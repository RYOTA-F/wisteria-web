import type { FC } from "react";
/* components */
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import Contact from "../../sections/Contact";

const SrcPageAssemble: FC = () => {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default SrcPageAssemble;
