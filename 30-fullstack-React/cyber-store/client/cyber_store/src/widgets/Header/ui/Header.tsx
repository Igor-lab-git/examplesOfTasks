import {type JSX, useCallback, useState} from "react";
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import {SearchInput} from "../../../features/SearchInput";
import NavMenu from "./NavMenu.tsx";
import UserActions from "./UserActions.tsx";
import {BurgerButton, BurgerMenu} from "../../BurgerMenu";
import style from "./Header.module.scss";
import "../../../app/styles/main.scss";
import { useMedia } from 'react-use';

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
    }

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
            {isMobile ? <BurgerButton handleBurgerClick={handleBurgerClick}/> : null}
        </header>
    );
};

export default Header;
