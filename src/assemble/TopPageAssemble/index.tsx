import { FC, useRef } from "react";
/* components */
import Header from "../../sections/Header";
import Main from "../../sections/Main";
import Career from "../../sections/Career";
import Skill from "../../sections/Skill";
import Footer from "../../sections/Footer";
/* libs */
import smoothScroll from "../../lib/smoothScroll";

const TopPageAssemble: FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const onMoveMain = () => smoothScroll(mainRef, "start");
  const onMoveCareer = () => smoothScroll(careerRef, "end");
  const onMoveSkill = () => smoothScroll(skillRef, "end");

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
    </>
  );
};

export default TopPageAssemble;
