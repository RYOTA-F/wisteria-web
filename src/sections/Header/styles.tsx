import styled from "@emotion/styled";
/* const */
import COLOR from "../../const/color";
import { HEADER_HEIGHT } from "../../const/size";

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${COLOR.GRAY_SCALE.WHITE};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 70%;
  margin: 0 auto;
`;

export const LogoWrapper = styled.a`
  height: ${HEADER_HEIGHT}px;
  width: ${HEADER_HEIGHT}px;
  padding: 10px;
  cursor: pointer;
`;

export const Logo = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: ${COLOR.GRAY_SCALE.SHADOW};
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: end;
  width: 70%;
  height: 100%;
  text-align: center;
  list-style-type: none;
  position: relative;
  user-select: none;
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${COLOR.GRAY_SCALE.BLACK};

  :hover {
    cursor: pointer;
    color: ${COLOR.GRAY_SCALE.WHITE};
    background-color: ${COLOR.BLUE_GROUP.SKY};
  }
`;

export const MenuLink = styled.a`
  display: block;
  height: 100%;
  line-height: ${HEADER_HEIGHT}px;
  width: 100%;
  text-decoration: none;
  padding: 0 15px;
`;
