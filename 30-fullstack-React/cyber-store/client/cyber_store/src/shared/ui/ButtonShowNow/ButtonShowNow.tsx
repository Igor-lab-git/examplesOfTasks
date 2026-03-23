import type React from "react";
import type { JSX } from "react";

interface IButtonShowNow {
    className: string;
  children: React.ReactNode;
}

const ButtonShowNow = ({ className, children }: IButtonShowNow): JSX.Element => {
  return (
    <>
    <button className={className}>
        {children}
    </button>
    </>
  );
};

export default ButtonShowNow;
