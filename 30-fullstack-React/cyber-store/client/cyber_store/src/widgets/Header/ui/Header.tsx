import {type JSX, useEffect, useState} from "react";
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import {SearchInput} from "../../../features/SearchInput";
import NavMenu from "./NavMenu.tsx";
import UserActions from "./UserActions.tsx";
import {BurgerButton, BurgerMenu} from "../../BurgerMenu";
import style from "./Header.module.scss";
import "../../../app/styles/main.scss";

const Header = (): JSX.Element => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
    const [isBurger, setIsBurger] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const checkWindowMobile = () => {
            const isMobile = window.innerWidth <= 768;
            setIsBurger(isMobile);
            if(!isMobile) {
                setIsOpenBurgerMenu(false);
            };
        };

        window.addEventListener("resize", checkWindowMobile);
        return () => window.removeEventListener("resize", checkWindowMobile);
    }, []);

    const handleBurgerClick = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    };

    const closeBurgerMenu = () => {
        setIsOpenBurgerMenu(false)
    };

    return (
        <header className={`${style.containerHeader} container-main`}>
            <Logo />
            {!isBurger && (
                <>
                <SearchInput />
                <NavMenu />
                <UserActions />
                </>
            )}
            {isBurger ? <BurgerButton handleBurgerClick={handleBurgerClick}/> : null}
            <BurgerMenu 
                isOpenBurgerMenu={isOpenBurgerMenu} 
                closeBurgerMenu={closeBurgerMenu}>
                <SearchInput />
                <NavMenu />
                <UserActions />
            </BurgerMenu>
        </header>
    );
};

export default Header;
