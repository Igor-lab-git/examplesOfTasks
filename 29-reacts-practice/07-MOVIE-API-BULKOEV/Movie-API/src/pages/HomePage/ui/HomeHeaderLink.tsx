import { Link } from "react-router-dom";
import style from "../HomePage.module.scss";
import { useContext } from "react";
import { ThemeModeContext } from "../../../app/ThemeContext/ThemeModeContext";
import type { JSX } from "@emotion/react/jsx-runtime";

interface IHomeHeaderLink {
  title: string;
  url: string;
}

const HomeHeaderLink = ({ title, url }: IHomeHeaderLink): JSX.Element => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("SwitchingThemes must be used within ThemeProvider");
  }

  const { theme } = context;

  return (
    <>
      <Link to={url}>
        <h2
          className={`${style.titleLink} ${theme === "dark" ? style.titleLinkDark : ""}`}
        >
          {title}
        </h2>
      </Link>
    </>
  );
};

export default HomeHeaderLink;
