"use client";
import React from 'react';
import style from "./TrackImage.module.scss"

interface ITrackImage {
    image: string;
};

const TrackImage = ({image}: ITrackImage) => {
    return (
        <div className={style.containerImage}>
            <img
                className={style.image}
                src={image} alt="poster of track"/>
        </div>
    )
};

export default TrackImage;
