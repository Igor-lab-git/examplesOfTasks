import {type JSX, useState} from "react";
import NavBar from "../NavBar/NavBar";
import style from "./header.module.scss";
import BurgerButton from "./ui/BurgerButton";
import {SearchInput} from "../../features/SearchInput";
import Logo from "./ui/Logo.tsx";

export const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavBar = () => {
        setIsOpen((prev) => !prev);
    };

    const onClose = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className={style.header}>
            <div className={`containerMain ${style.containerHeader}`}>
            <Logo/>
            <BurgerButton toggleNavBar={toggleNavBar} isOpen={isOpen}/>
            <NavBar isOpen={isOpen} onClose={onClose}/>
            <SearchInput/>
            </div>
        </header>
    );
};
