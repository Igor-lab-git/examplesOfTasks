"use client";
import React from 'react'
import style from "@/features/player/ui/PlayerControls.module.scss";
import Image from "next/image";
import iconBackTrack from "../../../../public/icons/player/back-trsack-icon.svg";

interface IPrevTrackButton {
    handlePrevTrackSwitch: () => void;
};

const PrevSwitchTrackButton = ({handlePrevTrackSwitch}: IPrevTrackButton) => {
    return (
        <>
            <button
                onClick={handlePrevTrackSwitch}
                className={style.buttonBackTrack}
                type={"button"}>
                <Image src={iconBackTrack} alt="" width={20} height={20}/>
            </button>
        </>
    )
};
export default PrevSwitchTrackButton;

