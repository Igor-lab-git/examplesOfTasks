import {type JSX, useCallback, useEffect, useState} from "react";
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import {SearchInput} from "../../../features/SearchInput";
import NavMenu from "./NavMenu.tsx";
import UserActions from "./UserActions.tsx";
import {BurgerButton, BurgerMenu} from "../../BurgerMenu";
import style from "./Header.module.scss";
import "../../../app/styles/main.scss";

const Header = (): JSX.Element => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(() => window.innerWidth <= 640.98);

    useEffect(() => {
        const checkWindowMobile = () => {
            const isMobile = window.innerWidth <= 640.98;
            setIsVisible(isMobile);
            if(!isMobile) {
                setIsOpenBurgerMenu(false);
            };
        };

        window.addEventListener("resize", checkWindowMobile);
        return () => window.removeEventListener("resize", checkWindowMobile);
    }, []);

    const handleBurgerClick = useCallback(() => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    }, [isOpenBurgerMenu]);

    const closeBurgerMenu = useCallback(() => {
        setIsOpenBurgerMenu(false)
    }, []);

    return (
        <header className={`${style.containerHeader} container-main`}>
            <Logo />
            {!isVisible ? (
                <>
                <SearchInput />
                    <div className={style.container_menu}>
                        <NavMenu />
                        <UserActions />
                    </div>
                </>
            ) : (
            <BurgerMenu
                isOpenBurgerMenu={isOpenBurgerMenu}
                closeBurgerMenu={closeBurgerMenu}>
                <SearchInput />
                <NavMenu />
                <UserActions />
            </BurgerMenu>
            )}
            {isVisible ? <BurgerButton handleBurgerClick={handleBurgerClick}/> : null}
        </header>
    );
};

export default Header;
