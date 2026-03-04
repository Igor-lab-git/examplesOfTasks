import {type JSX, memo} from "react";
import LogoIcon from "./LogoIcon";

interface ILogo {
  theme: "light" | "dark";
  className?: string;
}

const Logo = ({ theme, className }: ILogo): JSX.Element => {

  return (
    <a className={`${className}`} href="/">
      <LogoIcon theme={theme}/>
    </a>
  );
};

export default memo(Logo);
