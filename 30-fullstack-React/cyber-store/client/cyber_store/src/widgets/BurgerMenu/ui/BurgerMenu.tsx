import React, {type JSX} from "react";
import style from "./BurgerMenu.module.scss";

interface IBurgerMenu {
    isOpenBurgerMenu: boolean;
    children: React.ReactNode;
    closeBurgerMenu: () => void;
};

const BurgerMenu = ({isOpenBurgerMenu, closeBurgerMenu, children}: IBurgerMenu): JSX.Element => {
    return (
        <div className={`${style.overlay} ${isOpenBurgerMenu ? style.overlayOpen : ""}`}>
            <div className={`${style.burgerMenu} ${isOpenBurgerMenu ? style.burgerMenuOpen : ""}`}>
                <button onClick={closeBurgerMenu}>close</button>
                <h1>Overlay</h1>
                {children}
            </div>
        </div>
    )
};

export default BurgerMenu;