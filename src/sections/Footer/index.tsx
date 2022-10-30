import type { FC } from "react";
/* const */
import { COPY } from "./const";
/* styles */
import { Wrapper, CopyLight } from "./styles";

const Footer: FC = () => {
  return (
    <Wrapper>
      <CopyLight>{COPY}</CopyLight>
    </Wrapper>
  );
};

export default Footer;
