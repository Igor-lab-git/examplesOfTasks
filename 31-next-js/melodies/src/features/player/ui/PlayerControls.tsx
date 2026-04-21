"use client";
import React from 'react';
import Image from "next/image";
import iconPlayTrack from "../../../../public/icons/player/play-icon.svg";
import iconStopTrack from "../../../../public/icons/player/stop-icon.svg";
import iconBackTrack from "../../../../public/icons/player/back-trsack-icon.svg";
import iconNextTrack from "../../../../public/icons/player/next-track-icon.svg";
import style from "./PlayerControls.module.scss";

const PlayerControls = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleTogglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <div className={style.containerPlayerControls}>
            <button
                className={style.buttonBackTrack}
                type={"button"}>
                <Image src={iconBackTrack} alt="" width={20} height={20}/>
            </button>
            {!isPlaying ? (
                <button
                    className={style.buttonPlayTrack}
                    onClick={handleTogglePlay}
                    type={"button"}>
                    <Image src={iconPlayTrack} alt="" width={28} height={28}/>
                </button>

            ) : (
                <button
                    className={style.buttonStopTrack}
                    onClick={handleTogglePlay}
                    type={"button"}>
                    <Image src={iconStopTrack} alt="" width={28} height={28}/>
                </button>
            )}
            <button
                className={style.buttonStopTrack}
                type={"button"}>
                <Image src={iconNextTrack} alt="" width={20} height={20}/>
            </button>
        </div>
    )
};

export default PlayerControls;
