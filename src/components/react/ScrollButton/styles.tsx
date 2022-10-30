import styled from "@emotion/styled";
import { SerializedStyles, css } from "@emotion/react";
/* const */
import COLOR from "../../../const/color";

export const Wrapper = styled.button<{ isView: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.SKY};
  cursor: pointer;

  ${({ isView }): SerializedStyles => css`
    ${isView
      ? css`
          opacity: 1;
          transition: 1s;
        `
      : css`
          opacity: 0;
          transition: 1s;
        `}
  `}
`;

export const InnerArrow = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  display: block;
  width: 16px;
  height: 16px;
  margin-right: -10px;
  margin-top: -5px;
  content: "";
  border-bottom: 4px solid ${COLOR.GRAY_SCALE.WHITE};
  border-left: 4px solid ${COLOR.GRAY_SCALE.WHITE};
  transform: rotate(135deg);
`;
