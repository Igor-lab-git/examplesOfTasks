import React from 'react'
import TrackImage from "@/entities/track/ui/TrackImage";
import {TrackInfo} from "@/entities/track/ui/TrackInfo";
import {ITrack} from "@/store/types/tracksPublic";
import style from "./TrackCard.module.scss";

interface ITrackCard {
    track: ITrack;
    togglePlay: () => void;
    isPlaying: boolean;
};

const TrackCard = ({track, togglePlay, isPlaying}: ITrackCard) => {
    return (
        <div className={style.trackCardContainer}>
            <TrackImage
                image={track?.attributes?.images?.main[0]?.url}
                togglePlay={togglePlay}
                isPlaying={isPlaying}/>
            <TrackInfo
                executor={track?.relationships?.artists?.data[0]?.type}
                nameTrack={track?.attributes?.title} />
        </div>
    )
};

export default TrackCard;
