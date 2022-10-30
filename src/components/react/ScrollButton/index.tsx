import type { FC } from "react";
/* styles */
import { Wrapper, InnerArrow } from "./styles";

export interface IScrollButton {
  isView: boolean;
  onMoveMain: () => void;
}

const ScrollButton: FC<IScrollButton> = ({ isView, onMoveMain }) => {
  const onClickScrollButton = () => {
    onMoveMain();
  };

  return (
    <Wrapper isView={isView} onClick={onClickScrollButton}>
      <InnerArrow />
    </Wrapper>
  );
};

export default ScrollButton;
