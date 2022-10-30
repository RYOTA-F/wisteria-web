import type { FC } from "react";
/* components */
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import Main from "../../sections/Main";

const BlogPageAssemble: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default BlogPageAssemble;
