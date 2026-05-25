"use client";
import React from 'react';
import style from "./TrackTime.module.scss";

interface  ITrackTime {
    duration: number;
};

const TrackTime = ({duration}: ITrackTime) => {

    return (
        <div className={style.trackTimeWrapper}>
            <time>{duration}</time>
        </div>
    )
};
export default TrackTime;

