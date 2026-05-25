"use client";
import React from 'react';
import PlayAndPauseButton from "@/features/player/ui/PlayAndPauseButton";
import {AvatarTrack} from "@/shared/ui/AvatarTrack";
import style from "./TrackImage.module.scss";


interface ITrackImage {
    image: string;
    togglePlay: () => void;
    isPlaying: boolean;
};

const TrackImage = ({image , togglePlay, isPlaying}: ITrackImage) => {

    return (
        <div className={style.containerImage}>
            <PlayAndPauseButton
                className={style.classPlayAndPauseButton}
                togglePlay={togglePlay}
                isPlaying={isPlaying} />
            <AvatarTrack image={image}/>
        </div>
    )
};

export default TrackImage;
