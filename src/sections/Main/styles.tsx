import styled from "@emotion/styled";
/* const */
import COLOR from "../../const/color";
import { HEADER_HEIGHT } from "../../const/size";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT}px;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background-color: ${COLOR.GRAY_SCALE.SHADOW};
  font-size: 70px;
`;
