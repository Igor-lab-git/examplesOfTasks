"use client";
import React from 'react';
import Image from 'next/image';
import volumeIcon from "../../../../public/icons/player/volume-icon.svg";
import style from "./TrackVolumeButton.module.scss"

const TrackVolumeButton = () => {
    return (
        <>
            <button
                className={style.buttonTrackVolume}
                type={"button"}>
                <Image src={volumeIcon} alt="" width={20} height={20}/>
            </button>
        </>
    )
};

export default TrackVolumeButton;
