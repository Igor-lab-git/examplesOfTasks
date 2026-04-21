'use client';
import React from 'react';
import style from "./TrackProgress.module.scss";

interface ITrackProgress {
    left: number;
    right: number;
    onChange: () => void
}

const TrackProgress = ({left, right, onChange}: ITrackProgress) => {
    return (
        <div className={style.containerProgress}>
            <input
                className={style.inputProgress}
                type="range"
                min={left}
                max={right}
                onChange={() => onChange()}/>
            <div className={style.metricsProgress}>{left} / {right}</div>
        </div>
    )
};

export default TrackProgress;
