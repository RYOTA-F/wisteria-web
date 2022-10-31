import styled from "@emotion/styled";
import type { TButtonColorType } from "./";
import COLOR from "../../../const/color";

export const Wrapper = styled.button<{
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
