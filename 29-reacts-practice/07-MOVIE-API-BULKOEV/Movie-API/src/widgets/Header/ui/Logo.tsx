import {type JSX, memo} from "react";
import LogoIcon from "./LogoIcon";

interface ILogo {
  theme: "light" | "dark";
  className?: string;
  isFooter: boolean;
}

const Logo = ({ theme, className, isFooter }: ILogo): JSX.Element => {

  return (
    <a className={`${className}`} href="/">
      <LogoIcon theme={theme} isFooter={isFooter}/>
    </a>
  );
};

export default memo(Logo);
