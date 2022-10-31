import type { FC, ReactNode } from "react";
/* const */
import SPACE from "../../../const/space";
import FONT from "../../../const/font";
/* styles */
import { Wrapper } from "./styles";

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

export default Button;
