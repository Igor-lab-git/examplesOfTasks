"use client";
import React from 'react'
import style from "@/features/player/ui/PlayerControls.module.scss";
import Image from "next/image";
import iconNextTrack from "../../../../public/icons/player/next-track-icon.svg";

interface INextSwitchTrackButton {
    handleNextTrackSwitch: () => void;
};

const NextSwitchTrackButton = ({handleNextTrackSwitch}: INextSwitchTrackButton) => {
    return (
        <>
            <button
                onClick={handleNextTrackSwitch}
                className={style.buttonStopTrack}
                type={"button"}>
                <Image src={iconNextTrack} alt="" width={20} height={20}/>
            </button>
        </>
    )
};
export default NextSwitchTrackButton;

