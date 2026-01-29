import type React from "react";

type IButtonSubmit = 'submit' | 'reset' | 'button';

interface IButton {
    children: React.ReactNode;
    type?: IButtonSubmit;
    onClick?: () => void;
};

const Button = ({ children, type, onClick}: IButton) => {

  return (
    <>
      <button 
        className="button" 
        type={type || "submit"}
        onClick={onClick}>

        {children}
      </button>
    </>
  );
};

export default Button;
