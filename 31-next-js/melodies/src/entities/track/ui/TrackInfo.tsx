"use client";
import React from 'react';
import style from "./TrackInfo.module.scss";

interface ITrackInfo {
    executor:string;
    nameTrack: string;
};

export const TrackInfo = ({ executor, nameTrack }: ITrackInfo) => {
    let displayName = ""
    if(nameTrack.length > 20) {
        displayName = nameTrack.slice(0, 20) + "..."
    };

    return (
        <div className={style.containerInfo}>
            <span className={style.infoExecutor}>{executor ?? "Unknown artist"}</span>
            <span className={style.infoNameTrack}>{displayName ? displayName : "track name"}</span>
        </div>
    )
}
