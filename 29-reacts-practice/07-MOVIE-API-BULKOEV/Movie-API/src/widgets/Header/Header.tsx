import {type JSX, useEffect, useRef, useState} from "react";
import NavBar from "../NavBar/NavBar";
import BurgerButton from "./ui/BurgerButton";
import { SearchInput } from "../../features/SearchInput";
import Logo from "./ui/Logo.tsx";
import SwitchingThemes from "./ui/SwitchingThemes.tsx";
import useCloseNavBar from "../../features/hooks/useCloseNavBar.ts";
import style from "./header.module.scss";

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const refNavBar = useRef<HTMLDivElement>(null);
  const refBurgerButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768.98);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    console.log(checkMobile)
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useCloseNavBar({refNavBar, refBurgerButton, setIsOpen})

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <div className={`containerMain ${style.containerHeader}`}>
        <Logo />
        <div className={style.wrapperSettings}>
          <NavBar ref={refNavBar}  isOpen={isOpen} onClose={onClose} >
            {isMobile && <SearchInput />}
          </NavBar>
            {!isMobile && <SearchInput />}
          <BurgerButton ref={refBurgerButton} toggleNavBar={toggleNavBar} isOpen={isOpen} />
          <SwitchingThemes />
        </div>
      </div>
    </header>
  );
};
