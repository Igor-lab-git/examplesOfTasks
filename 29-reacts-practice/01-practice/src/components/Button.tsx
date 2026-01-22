import type React from "react";

type IButtonSubmit = 'submit' | 'reset' | 'button';

interface IProps {
    children: React.ReactNode;
    type?: IButtonSubmit;
}

const Button = (props: IProps) => {

    const { children, type} = props;

  return (
    <>
      <button className="button" type={type || "submit"}>
        {children}
      </button>
    </>
  );
};

export default Button;
