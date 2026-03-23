import {type JSX} from "react";
import style from "./BurgerMenu.module.scss";

interface IBurgerButton {
    handleBurgerClick: () => void;
};

const BurgerButton = ({handleBurgerClick}: IBurgerButton): JSX.Element => {

    const onClickHandler = () => {
        handleBurgerClick();
    };

    return (
        <div className={style.containerBurgerBtn}>
            <button className={style.burgerBtn} onClick={() => onClickHandler()}>
                <span className={style.burgerBtnLine}></span>
                <span className={style.burgerBtnLine}></span>
                <span className={style.burgerBtnLine}></span>
            </button>
        </div>
    )
};

export default BurgerButton;