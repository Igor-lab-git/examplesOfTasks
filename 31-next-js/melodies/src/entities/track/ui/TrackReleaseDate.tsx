import React from 'react';
import style from "./TrackReleaseDate.module.scss";

interface ITrackReleaseDate {
    releaseDate?: string;
    addedAtTrack?: string;
};

const TrackReleaseDate = ({releaseDate, addedAtTrack}: ITrackReleaseDate) => {

    const formatDate = (dateString?: string) => {
        if (dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        }
    };

    const releaseDateISO = releaseDate || addedAtTrack;
    const displayDate = formatDate(releaseDate) || formatDate(addedAtTrack);

    return (
        <div className={style.containerTrackReleaseDate}>
            <time dateTime={releaseDateISO}>
                {displayDate}
            </time>
        </div>
    )
};

export default TrackReleaseDate;
