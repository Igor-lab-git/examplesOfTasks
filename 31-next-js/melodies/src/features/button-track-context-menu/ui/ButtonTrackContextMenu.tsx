"use client";
import React from 'react'
import style from "./ButtonTrackContextMenu.module.scss";

interface IButtonTrackContextMenu {
    trackId: string;
    openMenu: (x: number, y: number, trackId: string) => void;
}

const ButtonTrackContextMenu = ({trackId, openMenu}: IButtonTrackContextMenu) => {

    return (
        <button
            style={{}}
            aria-label="Лайкнуть трек"
            aria-hidden="true"
            aria-live="off"
            type="button"
            onClick={(e) => openMenu( e.clientX, e.clientY, trackId )}
            className={`btn-reset ${style.buttonContextUi}`}>
            <span className={style.buttonLine}></span>
            <span className={style.buttonLine}></span>
            <span className={style.buttonLine}></span>
        </button>
    )
};

export default ButtonTrackContextMenu;
