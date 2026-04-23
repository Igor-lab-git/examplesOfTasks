"use client";
import React from 'react';
import Image from 'next/image';
import volumeIcon from "../../../../public/icons/player/volume-icon.svg";
import style from "./TrackVolumeButton.module.scss";

interface ITrackVolumeButton {
    isMuted: boolean;
    handleToggleMuted: () => void;
}

const TrackVolumeButton = ({ isMuted, handleToggleMuted }: ITrackVolumeButton) => {
    return (
        <>
            <button
                onClick={handleToggleMuted}
                className={style.buttonTrackVolume}
                type={"button"}>
                <Image src={volumeIcon} alt="" width={20} height={20}/>
            </button>
        </>
    )
};

export default TrackVolumeButton;
