"use client";
import React, {useEffect, useRef, useState} from 'react';
import style from "./TrackContextMenu.module.scss";
import {AddTrackToYourPlaylist} from "@/features/add-track-to-your-playlist";
import {ReactionButtonLike} from "@/features/reaction-button-like";
interface ICoordinatesButtonMenu {
    x: number;
    y: number;
    isOpenMenu: boolean;
    trackId: string | null;
}

interface ITrackContextMenu {
    trackId: string
    menu: ICoordinatesButtonMenu;
    onClose: () => void;
}

const TrackContextMenu = ({ trackId, menu, onClose}: ITrackContextMenu) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [newPos, setNewPos] = useState({x: 0, y: 0});

    const handleMouseClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (!menu.isOpenMenu) return;

        if (!menuRef.current) return;

        let newX = menu.x;
        let newY = menu.y;

        const menuRect = menuRef.current.getBoundingClientRect();
        // Корректировка по горизонтали
        if (newX + menuRect.width > window.innerWidth) {
            newX = window.innerWidth - menuRect.width - 10;
        }
        if (newX < 0) newX = 10;

        // Корректировка по вертикали
        if (newY + menuRect.height > window.innerHeight) {
            newY = (window.innerHeight - menuRect.height - 10);
        }
        if (newY < 0) newY = 10;

        setNewPos({ x: newX - menuRect.width / 2, y: newY});

    }, [menu.isOpenMenu, menu.x, menu.y]);

    if(!menu.isOpenMenu) return null;
    return (
        <div
            onClick={onClose}
            className={`${menu.isOpenMenu ? style.overlay : ""}`}>
            <div
                onClick={handleMouseClick}
                ref={menuRef}
                className={`${style.trackContextMenu}`}
                style={{position: "fixed", top: newPos.y, left: newPos.x}}>
                <AddTrackToYourPlaylist trackId={trackId}/>
                <div >
                    <ReactionButtonLike trackId={trackId} />
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
};

export default TrackContextMenu;
