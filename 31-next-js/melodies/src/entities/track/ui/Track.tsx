import React from 'react'
import TrackCard from "@/entities/track/ui/TrackCard";
import {ITrack} from "@/store/types/tracksPublic";
import TrackReleaseDate from "@/entities/track/ui/TrackReleaseDate";
import TrackTime from "@/entities/track/ui/TrackTime";
// import PlayAndPauseButton from "@/features/player/ui/PlayAndPauseButton";
import useSelectedTrackToPlayer from "@/features/player/lib/hooks/useSelectedTrackToPlayer";
import {useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";
import style from "./Track.module.scss";
import {ReactionButtonLike} from "@/entities/reaction-button-like";
import {QueryActionCreatorResult} from "@reduxjs/toolkit/query";

interface ITrackComponent {
    track: ITrack;
    queue: ITrack[] | [];
    trackNumber: number;
    currentIndex: number;
};

const Track = ({track, queue, trackNumber, currentIndex}: ITrackComponent) => {

    const { handlePlayAndPauseTrack, isCurrentTrack } = useSelectedTrackToPlayer(track, queue, currentIndex);

    console.log(track, "Track");

    const { data: dataYourPlaylistsQ } = useGetAllYourPlaylistsQuery();

    const isLikes = track.attributes.currentUserReaction === 1;
    // const [addTrack, {isLoading: isLoadingAddTrack}] = useAddTrackToMyPlaylistMutation();

    // console.log(data, "useGetTrendingSongsQuery");

    // console.log(dataYourPlaylistsQ, "useGetTrendingSongsQuery");

    // const handleAddTrack = async (playlistId: string, songId: string) => {
    //     try {
    //         const res = await addTrack({playlistId: playlistId, trackId: songId});
    //         console.log(res, "handleAddTrack")
    //     } catch (e) {
    //         console.error(e);
    //         console.error('Не удалось добавить трек');
    //     }
    // };
    console.log(track.attributes.currentUserReaction, "track.attributes.currentUserReaction")
    return (
        <li className={style.trackItem}>
            <span
                className={style.trackIndexNumber}>
                #{trackNumber}
            </span>
            <div className={style.wrapperTrackBody}>
                <TrackCard
                    track={track}
                    togglePlay={handlePlayAndPauseTrack}
                    isPlaying={isCurrentTrack}/>
                <TrackReleaseDate
                    releaseDate={track.attributes?.publishedAt}
                    addedAtTrack={track.attributes?.addedAt}/>
                <TrackTime duration={track?.attributes?.duration}/>
                <ReactionButtonLike
                    trackId={track.id}
                    initialLike={isLikes}/>
            </div>

            {/*<button>add track to my playlist</button>*/}

            {/*<ul>*/}
            {/*    {dataYourPlaylistsQ && dataYourPlaylistsQ.data.map((playlist) => (*/}
            {/*        <li key={playlist.id}>*/}
            {/*            <button*/}
            {/*                onClick={() => handleAddTrack(playlist.id, track.id)}>*/}
            {/*                {isLoadingAddTrack ? 'Добавление...' : playlist.attributes.title}*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </li>
    )
};
export default Track;

