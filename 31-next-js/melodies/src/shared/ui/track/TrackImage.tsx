"use client";
import React from 'react';
import style from "./TrackImage.module.scss"

interface ITrackImage {
    image: string;
};

const TrackImage = ({image}: ITrackImage) => {
    return (
        <div className={style.containerImage}>
            {/*<img src={image} alt="poster of track"/>*/}
            <img
                className={style.image}
                src="https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/19252d4f-e73f-4114-9b58-d85cfdd9e9fc_image.png" alt="poster of track"/>
        </div>
    )
};

export default TrackImage;
