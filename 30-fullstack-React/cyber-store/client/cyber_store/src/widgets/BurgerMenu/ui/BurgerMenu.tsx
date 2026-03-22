import {type JSX} from "react";
import style from "./BurgerMenu.module.scss";

interface IBurgerMenu {
    isOpenBurgerMenu: boolean;
    closeBurgerMenu: () => void;
}

const BurgerMenu = ({isOpenBurgerMenu, closeBurgerMenu}: IBurgerMenu): JSX.Element => {
    return (
        <div className={`${style.overlay} ${isOpenBurgerMenu ? style.overlayOpen : ""}`}>
            <div className={`${style.burgerMenu} ${isOpenBurgerMenu ? style.burgerMenuOpen : ""}`}>
                <button onClick={closeBurgerMenu}>close</button>
                <h1>Overlay</h1>
            </div>
        </div>
    )
};

export default BurgerMenu;