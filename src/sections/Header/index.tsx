import type { FC } from "react";
/* const */
import { LOGO_SRC, MENU_LIST } from "../../const/menu";
import { PAGE } from "../../const/page";
/* styles */
import {
  Wrapper,
  Inner,
  LogoWrapper,
  Logo,
  MenuList,
  MenuItem,
  MenuLink,
} from "./styles";

export interface IHeader {
  onMoveMain?: () => void;
  onMoveCareer?: () => void;
  onMoveSkill?: () => void;
}

const Header: FC<IHeader> = ({ onMoveMain, onMoveCareer, onMoveSkill }) => {
  const onClickTop = () =>
    onMoveMain ? onMoveMain() : (window.location.href = PAGE.TOP);
  const onClickCareer = () =>
    onMoveCareer ? onMoveCareer() : (window.location.href = PAGE.TOP);
  const onClickSkill = () =>
    onMoveSkill ? onMoveSkill() : (window.location.href = PAGE.TOP);
  const onClickBlog = () => (window.location.href = PAGE.BLOG);
  const onClickSrc = () => (window.location.href = PAGE.SRC);
  const onClickContact = () => (window.location.href = PAGE.CONTACT);

  return (
    <Wrapper>
      <Inner>
        <LogoWrapper href={PAGE.TOP}>
          <Logo src={LOGO_SRC} />
        </LogoWrapper>
        <MenuList>
          {/* TOP */}
          <MenuItem>
            <MenuLink onClick={onClickTop}>{MENU_LIST.MAIN.TITLE}</MenuLink>
          </MenuItem>
          {/* CAREER */}
          <MenuItem>
            <MenuLink onClick={onClickCareer}>
              {MENU_LIST.CAREER.TITLE}
            </MenuLink>
          </MenuItem>
          {/* SKILL */}
          <MenuItem>
            <MenuLink onClick={onClickSkill}>{MENU_LIST.SKILL.TITLE}</MenuLink>
          </MenuItem>
          {/* BLOG */}
          <MenuItem>
            <MenuLink onClick={onClickBlog}>{MENU_LIST.BLOG.TITLE}</MenuLink>
          </MenuItem>
          {/* SRC */}
          <MenuItem>
            <MenuLink onClick={onClickSrc}>{MENU_LIST.SRC.TITLE}</MenuLink>
          </MenuItem>
          {/* CONTACT */}
          <MenuItem>
            <MenuLink onClick={onClickContact}>
              {MENU_LIST.CONTACT.TITLE}
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Inner>
    </Wrapper>
  );
};

export default Header;
