import type { JSX } from "@emotion/react/jsx-runtime";
import style from "./Preloader.module.scss";

const Preloader = (): JSX.Element => {
  return (
    <>
      <div className={style.preloader}>
        <div className={style.circle}></div>
        <div className={style.circleSmall}></div>
        <div className={style.circlezBig}></div>
        <div className={style.circleInnerInner}></div>
        <div className={style.circleInner}></div>
      </div>
    </>
  );
};

export default Preloader;
