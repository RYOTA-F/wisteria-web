import type { FC, ReactNode } from "react";
/* styles */
import { StyledH1 } from "./styles";

interface IHeading {
  children: ReactNode;
}

const H1: FC<IHeading> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default H1;
