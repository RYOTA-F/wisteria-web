import type { FC } from "react";
/* components */
import Header from "../../sections/Header";
import Main from "../../sections/Main";
import Career from "../../sections/Career";
import Skill from "../../sections/Skill";
import Footer from "../../sections/Footer";
import ScrollButton from "../../components/react/ScrollButton";
/* container */
import TopPageContainer from "../../container/TopPageContainer";

const TopPageAssemble: FC = () => {
  const {
    state: { isViewScrollButton },
    refs: { mainRef, careerRef, skillRef },
    functions: { onMoveMain, onMoveCareer, onMoveSkill },
  } = TopPageContainer();

  return (
    <>
      <Header
        onMoveMain={onMoveMain}
        onMoveCareer={onMoveCareer}
        onMoveSkill={onMoveSkill}
      />
      <section ref={mainRef}>
        <Main />
      </section>
      <section ref={careerRef}>
        <Career />
      </section>
      <section ref={skillRef}>
        <Skill />
      </section>
      <Footer />

      <ScrollButton isView={isViewScrollButton} onMoveMain={onMoveMain} />
    </>
  );
};

export default TopPageAssemble;
