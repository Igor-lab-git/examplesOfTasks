import type React from "react";
import style from "./ContainerPages.module.scss";
import { useContext } from "react";
import { ThemeModeContext } from "../../../app/ThemeContext/ThemeModeContext";

interface IContainerPages {
    children: React.ReactNode;
};

const ContainerPages = ({children}: IContainerPages) => {

    const  context = useContext(ThemeModeContext);
  
   if(!context ) {
       throw new Error('SwitchingThemes must be used within ThemeProvider');
  };
    const {theme} = context;

  return (
    <main className={`${style.main} ${theme === "dark" ? style.dark : ""}`}>
        {children}
    </main>
  )
};

export default ContainerPages;
