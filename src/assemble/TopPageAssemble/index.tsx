import type { FC } from "react";
/* components */
import Header from "../../sections/Header";
import Main from "../../sections/Main";
import Career from "../../sections/Career";
import Skill from "../../sections/Skill";
import Footer from "../../sections/Footer";

const TopPageAssemble: FC = () => {
  const onMoveMain = () => console.log("hoge");
  const onMoveCareer = () => console.log("hoge");
  const onMoveSkill = () => console.log("hoge");
  const onMoveBlog = () => console.log("hoge");

  return (
    <>
      <Header
        onMoveMain={onMoveMain}
        onMoveCareer={onMoveCareer}
        onMoveSkill={onMoveSkill}
        onMoveBlog={onMoveBlog}
      />
      <Main />
      <Career />
      <Skill />
      <Footer />
    </>
  );
};

export default TopPageAssemble;
