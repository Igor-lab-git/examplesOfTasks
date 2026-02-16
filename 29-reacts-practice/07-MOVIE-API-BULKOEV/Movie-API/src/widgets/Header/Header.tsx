import { type JSX, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./header.module.scss";
import BurgerButton from "./ui/BurgerButton";
import { SearchInput } from "../../features/SearchInput";
import Logo from "./ui/Logo.tsx";
import SwitchingThemes from "./ui/SwitchingThemes.tsx";
import useCloseNavBar from "../../features/hooks/useCloseNavBar.ts";

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refNavBar = useRef<HTMLDivElement>(null);
  const refBurgerButton = useRef<HTMLButtonElement>(null);

  useCloseNavBar({refNavBar, refBurgerButton, setIsOpen})

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  console.log(document.documentElement.clientHeight);
  

  return (
    <header className={style.header}>
      <div className={`containerMain ${style.containerHeader}`}>
        <Logo />
        <div className={style.wrapperSettings}>
          <BurgerButton ref={refBurgerButton} toggleNavBar={toggleNavBar} isOpen={isOpen} />
          <NavBar ref={refNavBar}  isOpen={isOpen} onClose={onClose} />
          <SearchInput />
          <SwitchingThemes />
        </div>
      </div>
    </header>
  );
};
