import type { FC } from "react";
/* components */
import Header from "../../sections/Header";

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
    </>
  );
};

export default TopPageAssemble;
