"use client";
import React, {RefObject} from 'react';
import style from "./PlayerControls.module.scss";
import PlayAndPauseButton from "@/features/player/ui/PlayAndPauseButton";
import PrevSwitchTrackButton from "@/features/player/ui/PrevSwitchTrackButton";
import NextSwitchTrackButton from "@/features/player/ui/NextSwitchTrackButton";

interface IPlayerControls {
    audioRef: RefObject<HTMLAudioElement | null>;
    togglePlay: () => void;
    isPlaying: boolean;
    trackUrl?: string;
    handlePrevTrackSwitch: () => void;
    handleNextTrackSwitch: () => void;
};

const PlayerControls = ({audioRef, togglePlay, isPlaying, trackUrl, handlePrevTrackSwitch, handleNextTrackSwitch}: IPlayerControls) => {

    return (
        <div className={style.containerPlayerControls}>
            <audio
                // muted
                ref={audioRef}
                src={trackUrl}>
            </audio>
            <PrevSwitchTrackButton
                handlePrevTrackSwitch={handlePrevTrackSwitch}/>
            <PlayAndPauseButton
                isPlaying={isPlaying}
                togglePlay={togglePlay}/>
            <NextSwitchTrackButton
                handleNextTrackSwitch={handleNextTrackSwitch}/>
        </div>
    )
};

export default PlayerControls;
