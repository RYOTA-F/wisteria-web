import type { FC, ReactNode } from "react";
/* styles */
import { StyledH3 } from "./styles";

interface IHeading {
  children: ReactNode;
}

const H3: FC<IHeading> = ({ children }) => {
  return <StyledH3>{children}</StyledH3>;
};

export default H3;
