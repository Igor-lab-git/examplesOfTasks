import { useNavigate } from "react-router-dom";
import style from "./NavigationPage.module.scss";
import { useContext } from "react";
import { ThemeModeContext } from "../../../app/ThemeContext/ThemeModeContext";

interface INavigationPage {
  title?: string | null;
}

const NavigationPage = ({ title }: INavigationPage) => {
  const navigate = useNavigate();
  const context = useContext(ThemeModeContext);
    
      if (!context) {
        throw new Error("SwitchingThemes must be used within ThemeProvider");
      };
    
      const { theme } = context;
  return (
    <>
      <div className={style.containerNavigation}>
        <button className={`${style.navigationHomeBtn} ${style.navigationItem} ${theme === "dark" ? style.navigationItemDark : ""}`} onClick={() => navigate("/")}>на главную</button>
        <button className={`${style.navigationHomeBtn} ${style.navigationItem} ${theme === "dark" ? style.navigationItemDark : ""}`} onClick={() => navigate(-1)}>назад</button>
        <span className={`${style.navigationTitltPage} ${style.navigationItem} ${theme === "dark" ? style.navigationItemDark : ""}`}>{title}</span>
      </div>
    </>
  );
};

export default NavigationPage;
