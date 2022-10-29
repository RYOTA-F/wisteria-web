import styled from "@emotion/styled";
import COLOR from "../../const/color";

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
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
  height: 80px;
  width: 80px;
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
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  text-align: center;
  list-style-type: none;
  position: relative;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  width: 100%;
  height: 100%;
  color: ${COLOR.GRAY_SCALE.BLACK};
  text-decoration: none;

  :hover {
    color: ${COLOR.GRAY_SCALE.WHITE};
    background-color: ${COLOR.BLUE_GROUP.SKY};
  }
`;
