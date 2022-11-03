import type { FC, ReactNode } from "react";
/* styles */
import { StyledH2 } from "./styles";

interface IHeading {
  children: ReactNode;
}

const H2: FC<IHeading> = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default H2;
