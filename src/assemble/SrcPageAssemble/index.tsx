import type { FC } from "react";
/* components */
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import Src from "../../sections/Src";

const SrcPageAssemble: FC = () => {
  return (
    <>
      <Header />
      <Src />
      <Footer />
    </>
  );
};

export default SrcPageAssemble;
