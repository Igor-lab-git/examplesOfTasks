import React, {type JSX, useEffect, useRef} from "react";
import style from "./BurgerMenu.module.scss";

interface IBurgerMenu {
    isOpenBurgerMenu: boolean;
    children: React.ReactNode;
    closeBurgerMenu: () => void;
};

const BurgerMenu = ({isOpenBurgerMenu, closeBurgerMenu, children}: IBurgerMenu): JSX.Element => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       const handleClick = (e: MouseEvent) => {
           const target = e.target as HTMLElement;
           if(overlayRef.current && overlayRef.current === target) {
                closeBurgerMenu();
           };
       };

       document.addEventListener("click", handleClick);

       return () => document.removeEventListener("click", handleClick);

    }, [closeBurgerMenu]);

    return (
        <div
            ref={overlayRef}
            className={`${style.overlay} ${isOpenBurgerMenu ? style.overlayOpen : ""}`}>

            <div className={`${style.burgerMenu} ${isOpenBurgerMenu ? style.burgerMenuOpen : ""}`}>
                <button 
                    className={style.button_close}
                    onClick={(e) => {
                    e.stopPropagation();
                    closeBurgerMenu();
                }}>
                    <span className={style.button_line}></span>
                    <span className={style.button_line}></span>
                </button>

                <div className={style.burgerMenu_container_body}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default BurgerMenu;