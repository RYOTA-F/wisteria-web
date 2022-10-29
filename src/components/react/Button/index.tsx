import type { FC } from "react";

const Button: FC = () => {
  const onClickButton = () => {
    console.log("test");
  };

  return <button onClick={onClickButton}>テストテスト</button>;
};

export default Button;
