import {type JSX, useEffect, useState} from "react";
import "../../../app/styles/main.scss";
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import {SearchInput} from "../../../features/SearchInput";
import NavMenu from "./NavMenu.tsx";
import UserActions from "./UserActions.tsx";
import style from "./Header.module.scss";
import {BurgerButton, BurgerMenu} from "../../BurgerMenu";

const Header = (): JSX.Element => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
    const [isBurger, setIsBurger] = useState(() => document.documentElement.clientWidth <= 768);

    useEffect(() => {
        const checkWindowMobile = () => {
            setIsBurger(document.documentElement.clientWidth <= 768);

        }
        window.addEventListener("resize", checkWindowMobile);
        return () => window.removeEventListener("resize", checkWindowMobile);
    }, []);

    const handleBurgerClick = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    };

    const closeBurgerMenu = () => {
        setIsOpenBurgerMenu(false)
    }
    return (
        <div className={`${style.containerHeader} container-main`}>

            <Logo />
            {!isBurger && (
                <>
                <SearchInput />
                <NavMenu />
                <UserActions />
                </>
            )}
            {isBurger ? <BurgerButton handleBurgerClick={handleBurgerClick}/> : null};

            <BurgerMenu isOpenBurgerMenu={isOpenBurgerMenu} closeBurgerMenu={closeBurgerMenu}/>

        </div>
    );
};

export default Header;
