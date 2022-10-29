import type { FC } from "react";
import styled from "@emotion/styled";

const Button: FC = () => {
  const onClickButton = () => {
    console.log("test");
  };

  return <Wrapper onClick={onClickButton}>テストテスト</Wrapper>;
};

const Wrapper = styled.button`
  color: red;
`;

export default Button;
