import { useState, useRef, useEffect } from "react";
/* libs */
import getIsScrollTop from "../../lib/getIsScrollTop";
import smoothScroll from "../../lib/smoothScroll";
/* types */
import type ITopPageContainer from "./types";

const TopPageContainer = (): ITopPageContainer => {
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

  return {
    state: { isViewScrollButton },
    refs: { mainRef, careerRef, skillRef },
    functions: { onMoveMain, onMoveCareer, onMoveSkill },
  };
};

export default TopPageContainer;
