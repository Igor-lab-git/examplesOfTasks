import {type JSX, useCallback, useState} from "react";
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import NavMenu from "./NavMenu.tsx";
import { useMedia } from 'react-use';
import "../../../app/styles/main.scss";
import {SearchInput} from "../../../features/searchInput";
import {BurgerButton, BurgerMenu} from "../../burger-menu";
import {UserActions} from "../../../features/header-user-action";
import style from "./Header.module.scss";

const Header = (): JSX.Element => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
    const isMobile = useMedia('(max-width: 640.98px)', false);

    const handleBurgerClick = useCallback(() => {
        setIsOpenBurgerMenu(prev => !prev);
    }, []);

    const closeBurgerMenu = useCallback(() => {
        setIsOpenBurgerMenu(false)
    }, []);

    if(!isMobile && isOpenBurgerMenu) {
        closeBurgerMenu();
    };

    return (
        <header className={`${style.containerHeader} container-main`}>
            <Logo />
            {!isMobile ? (
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
            {isMobile
                ? <BurgerButton
                handleBurgerClick={handleBurgerClick}/>
                : null}
        </header>
    );
};

export default Header;
