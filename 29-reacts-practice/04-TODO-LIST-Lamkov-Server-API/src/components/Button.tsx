import type React from "react";

type IButtonSubmit = 'submit' | 'reset' | 'button';

interface IButton {
    children: React.ReactNode;
    type?: IButtonSubmit;
    onClick?: () => void;
    isDisabled?: boolean;
};

const Button = ({ children, type, onClick, isDisabled}: IButton) => {

  return (
    <>
      <button 
        className="button" 
        type={type || "submit"}
        onClick={onClick}
        disabled={isDisabled}
        >
        {children}
      </button>
    </>
  );
};

export default Button;
