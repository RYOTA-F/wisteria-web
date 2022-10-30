import { FC, useState, useRef, useEffect } from "react";
/* components */
import Header from "../../sections/Header";
import Main from "../../sections/Main";
import Career from "../../sections/Career";
import Skill from "../../sections/Skill";
import Footer from "../../sections/Footer";
import ScrollButton from "../../components/react/ScrollButton";
/* libs */
import smoothScroll from "../../lib/smoothScroll";
import getIsScrollTop from "../../lib/getIsScrollTop";

const TopPageAssemble: FC = () => {
  const [isViewScrollButton, setIsViewScrollButton] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const onMoveMain = () => smoothScroll(mainRef, "start");
  const onMoveCareer = () => smoothScroll(careerRef, "end");
  const onMoveSkill = () => smoothScroll(skillRef, "end");

  const onScroll = (): void => {
    const position = getIsScrollTop();
    if (position) {
      setIsViewScrollButton(true);
    } else {
      setIsViewScrollButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header
        onMoveMain={onMoveMain}
        onMoveCareer={onMoveCareer}
        onMoveSkill={onMoveSkill}
      />
      <div ref={mainRef}>
        <Main />
      </div>
      <div ref={careerRef}>
        <Career />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <Footer />

      <ScrollButton isView={isViewScrollButton} onMoveMain={onMoveMain} />
    </>
  );
};

export default TopPageAssemble;
