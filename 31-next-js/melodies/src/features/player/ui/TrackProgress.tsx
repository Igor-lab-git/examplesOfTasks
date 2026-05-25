'use client';
import React from 'react';
import style from "./TrackProgress.module.scss";

interface ITrackProgress {
    left?: number;
    right?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TrackProgress = ({left, right, onChange}: ITrackProgress) => {
    return (
        <div className={style.containerProgress}>
            <input
                className={style.inputProgress}
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}/>
            <div className={style.metricsProgress}>{left} / {right}</div>
            <div>{left} / {right}</div>
        </div>
    )
};

export default TrackProgress;
