import {type JSX, memo} from "react";
import LogoIcon from "./LogoIcon";

interface ILogo {
  theme: "light" | "dark";
}

const Logo = ({ theme }: ILogo): JSX.Element => {

  return (
    <a href="/">
      <LogoIcon theme={theme}/>
    </a>
  );
};

export default memo(Logo);
