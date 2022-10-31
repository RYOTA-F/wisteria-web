import type { FC, ReactNode } from "react";
import styled from "@emotion/styled";
/* const */
import SPACE from "../../../const/space";
import FONT from "../../../const/font";
import COLOR from "../../../const/color";

export const BUTTON_COLOR = {
  DEFAULT: "default",
} as const;

export type TButtonColorType = typeof BUTTON_COLOR[keyof typeof BUTTON_COLOR];

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  colorType?: TButtonColorType;
  paddingX?: number;
  paddingY?: number;
  fontSize?: number;
}

const Button: FC<IButton> = ({
  children,
  onClick,
  colorType = "default",
  paddingX = SPACE.SPACEx10,
  paddingY = SPACE.SPACEx4,
  fontSize = FONT.FONTx24,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      colorType={colorType}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{
  colorType: TButtonColorType;
  paddingX: number;
  paddingY: number;
  fontSize: number;
}>`
  padding: ${({ paddingY }) => paddingY}px ${({ paddingX }) => paddingX}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  color: ${COLOR.GRAY_SCALE.WHITE};
  background-color: ${COLOR.BLUE_GROUP.SKY};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
`;

export default Button;
