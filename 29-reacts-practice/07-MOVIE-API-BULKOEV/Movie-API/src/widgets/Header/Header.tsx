import {type JSX, useCallback, useContext, useEffect, useRef, useState} from "react";
import NavBar from "../NavBar/NavBar";
import BurgerButton from "./ui/BurgerButton";
import { SearchInput } from "../../features/SearchInput";
import Logo from "./ui/Logo.tsx";
import SwitchingThemes from "./ui/SwitchingThemes.tsx";
import useCloseNavBar from "../../features/hooks/useCloseNavBar.ts";
import style from "./header.module.scss";
import "../../app/styles/main.scss";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext.ts";

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSkrolled, setIsSkrolled] = useState<boolean>(false);
  const refNavBar = useRef<HTMLDivElement>(null);
  const refBurgerButton = useRef<HTMLButtonElement>(null);

  const  context = useContext(ThemeModeContext);

 if(!context ) {
     throw new Error('SwitchingThemes must be used within ThemeProvider');
};
  const {theme} = context;
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768.98);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useCloseNavBar({refNavBar, refBurgerButton, setIsOpen});

  const toggleNavBar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]) ;

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 150) {
        setIsSkrolled(true);
      } else {
        setIsSkrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header 
        className={`${style.header} ${isSkrolled ? style.scrollHeight : ""} ${theme === "dark" ? style.ligtheTheme : ""}`} >
        <div className={`containerMain ${style.containerHeader}`}>
          <Logo theme={theme}/>
          <div className={style.wrapperSettings}>
            <NavBar ref={refNavBar}  isOpen={isOpen} onClose={onClose} >
              {isMobile && <SearchInput />}
            </NavBar>
              {!isMobile && <SearchInput />}
            <BurgerButton ref={refBurgerButton} toggleNavBar={toggleNavBar} isOpen={isOpen} />
            <SwitchingThemes/>
          </div>
        </div>
      </header>
  );
};
