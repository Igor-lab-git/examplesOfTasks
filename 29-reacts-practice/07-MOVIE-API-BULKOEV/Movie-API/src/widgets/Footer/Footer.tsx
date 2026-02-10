import type { JSX } from "react";
import style from "./footer.module.scss";

 const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
        <h2>Footer</h2>
    </footer>
  )
};

export default Footer;
