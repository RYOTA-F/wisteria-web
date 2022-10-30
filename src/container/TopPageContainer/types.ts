import type { RefObject } from "react";

export interface ITopPageState {
  isViewScrollButton: boolean;
}

export interface ITopPageRefs {
  mainRef: RefObject<HTMLDivElement>;
  careerRef: RefObject<HTMLDivElement>;
  skillRef: RefObject<HTMLDivElement>;
}

export interface ITopPageFunctions {
  onMoveMain: () => void;
  onMoveCareer: () => void;
  onMoveSkill: () => void;
}

interface ITopPageContainer {
  state: ITopPageState;
  refs: ITopPageRefs;
  functions: ITopPageFunctions;
}

export default ITopPageContainer;
