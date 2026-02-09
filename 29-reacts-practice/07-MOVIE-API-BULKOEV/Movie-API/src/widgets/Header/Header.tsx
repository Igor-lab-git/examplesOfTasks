import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./header.module.scss";
import BurgerButton from "./ui/BurgerButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const onClose = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={style.header}>
      <BurgerButton toggleNavBar={toggleNavBar} />
      <a href="/">
        <span>КиноПоиск</span>
      </a>
      <NavBar isOpen={isOpen} onClose={onClose} />
    </header>
  );
};
