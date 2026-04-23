"use client";
import React, {RefObject} from 'react';
import Image from "next/image";
import iconPlayTrack from "../../../../public/icons/player/play-icon.svg";
import iconStopTrack from "../../../../public/icons/player/stop-icon.svg";
import iconBackTrack from "../../../../public/icons/player/back-trsack-icon.svg";
import iconNextTrack from "../../../../public/icons/player/next-track-icon.svg";
import style from "./PlayerControls.module.scss";
import {ITrack} from "@/app/store/types/track";

interface IPlayerControls {
    audioRef: RefObject<HTMLAudioElement | null>;
    togglePlay: () => void;
    isPlaying: boolean;
    trackUrl?: string
};

const PlayerControls = ({audioRef, togglePlay, isPlaying, trackUrl}: IPlayerControls) => {


    return (
        <div className={style.containerPlayerControls}>
            <audio
                // muted
                ref={audioRef}
                src={trackUrl}>
            </audio>
            <button
                className={style.buttonBackTrack}
                type={"button"}>
                <Image src={iconBackTrack} alt="" width={20} height={20}/>
            </button>
            <button
                className={style.buttonStopTrack}
                onClick={togglePlay}
                type={"button"}>
                <Image
                    src={isPlaying ? iconStopTrack : iconPlayTrack}
                    alt="" width={28} height={28}/>
            </button>
            <button
                className={style.buttonStopTrack}
                type={"button"}>
                <Image src={iconNextTrack} alt="" width={20} height={20}/>
            </button>
        </div>
    )
};

export default PlayerControls;
