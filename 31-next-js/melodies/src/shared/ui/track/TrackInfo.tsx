"use client";
import React from 'react';
import style from "./TrackInfo.module.scss";

interface ITrackInfo {
    executor:string;
    nameTrack: string;
};

export const TrackInfo = ({ executor, nameTrack }: ITrackInfo) => {
    return (
        <div className={style.containerInfo}>
            <span className={style.infoExecutor}>{executor ? executor : "executor"}</span>
            <span className={style.infoNameTrack}>{nameTrack ? nameTrack : "track name"}</span>
        </div>
    )
}
