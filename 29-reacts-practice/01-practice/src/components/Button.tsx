import { type JSX } from "react";

interface IProps {
  title: string;
}

const Button = ({ title }: IProps): JSX.Element => {
  return (
    <>
      <button>
        <span>{title}</span>
      </button>
    </>
  );
};

export default Button;
