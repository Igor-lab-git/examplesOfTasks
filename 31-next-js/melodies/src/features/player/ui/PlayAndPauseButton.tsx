"use client";
import React from 'react';
import style from "@/features/player/ui/PlayerControls.module.scss";
import Image from "next/image";
import iconStopTrack from "../../../../public/icons/player/stop-icon.svg";
import iconPlayTrack from "../../../../public/icons/player/play-icon.svg";

interface IPlayAndPauseButton {
    togglePlay: () => void;
    isPlaying: boolean;
    className:string
}

const PlayAndPauseButton = ({togglePlay, isPlaying, className}: IPlayAndPauseButton) => {
    return (
        <>
            <button
                className={`style.buttonStopTrack ${className}`}
                onClick={togglePlay}
                type={"button"}>
                <Image
                    src={isPlaying ? iconStopTrack : iconPlayTrack}
                    alt="" width={28}
                    height={28}/>
            </button>
        </>
    )
};
export default PlayAndPauseButton;

