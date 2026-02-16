import LogoSVG from "../../../../public/logo/logo_cinemahub.svg";
import { type JSX } from "react";

const Logo = (): JSX.Element => {
  return (
    <>
      <a href="/">
        <img src={LogoSVG} alt="Логотип CinemaHub" />
      </a>
    </>
  );
};

export default Logo;
