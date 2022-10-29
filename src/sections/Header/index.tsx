import type { FC } from "react";
/* const */
import { LOGO_URL, LOGO_SRC, MENU_LIST, MENU_LIST_IDS } from "./const";
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

type TMenuListIds = typeof MENU_LIST_IDS[number];

export interface IHeader {
  onMoveMain: () => void;
  onMoveCareer: () => void;
  onMoveSkill: () => void;
  onMoveBlog: () => void;
}

const Header: FC<IHeader> = ({
  onMoveMain,
  onMoveCareer,
  onMoveSkill,
  onMoveBlog,
}) => {
  const onClickLink = (id: TMenuListIds) => {
    switch (id) {
      case "#main":
        return onMoveMain();
      case "#career":
        return onMoveCareer();
      case "#skill":
        return onMoveSkill();
      case "#blog":
        return onMoveBlog();
    }
  };

  return (
    <Wrapper>
      <Inner>
        <LogoWrapper href={LOGO_URL}>
          <Logo src={LOGO_SRC} />
        </LogoWrapper>
        <MenuList>
          {MENU_LIST.map((v, i) => (
            <MenuItem key={i}>
              <MenuLink onClick={() => onClickLink(v.ID)}>
                {v.MENU_TITLE}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </Inner>
    </Wrapper>
  );
};

export default Header;
