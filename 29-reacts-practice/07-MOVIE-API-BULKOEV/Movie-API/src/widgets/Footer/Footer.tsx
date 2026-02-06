import type { JSX } from "react";
import style from "./footer.module.scss";

 const Footer = (): JSX.Element => {
  return (
    <div className={style.footer}>
        <h2>Footer</h2>
    </div>
  )
};

export default Footer;
