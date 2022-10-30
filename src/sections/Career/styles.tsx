import styled from "@emotion/styled";
/* const */
import COLOR from "../../const/color";
import { HEADER_HEIGHT } from "../../const/size";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background-color: ${COLOR.GRAY_SCALE.DARK_GRAY};
  font-size: 70px;
`;
