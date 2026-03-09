import { useContext, type JSX } from "react";
import style from "./footer.module.scss";
import "../../app/styles/main.scss";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext";
import Logo from "../Header/ui/Logo";

const Footer = (): JSX.Element => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("SwitchingThemes must be used within ThemeProvider");
  };
  const { theme } = context;

  return (
    <footer className={`${style.footer} ${theme === "dark" ? style.footerDark : ""}`}>
      <div className={`${style.footerInner} containerMain`}>
        <div className={style.containerInfo}>
          <div className={style.containerCopyright}>
            <span>&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span>CinemaHub - Смотреть фильмы онлайн.</span>
          </div>
          <div className={style.containerDisclaimer}>
            <span>Данный сайт создан исключительно для обучающих целей.</span>
            <span>Все права пренадлежат правообладателю.</span>
          </div>
        </div>
          <Logo theme={theme} className={style.footerLogo} isFooter={true} />
      </div>
    </footer>
  );
};

export default Footer;
