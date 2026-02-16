import LogoSVG from "../../../../public/logo/logo_cinemahub.svg";
import {type JSX, memo} from "react";

const Logo = (): JSX.Element => {
  return (
    <>
      <a href="/">
        <img src={LogoSVG} alt="Логотип CinemaHub" />
      </a>
    </>
  );
};

export default memo(Logo);
