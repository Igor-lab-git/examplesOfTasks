import React, {ReactNode} from 'react'
import TrackCard from "@/entities/track/ui/TrackCard";
import {ITrack} from "@/store/types/tracksPublic";
import TrackReleaseDate from "@/entities/track/ui/TrackReleaseDate";
import TrackTime from "@/entities/track/ui/TrackTime";
// import PlayAndPauseButton from "@/features/player/ui/PlayAndPauseButton";
import useSelectedTrackToPlayer from "@/features/player/lib/hooks/useSelectedTrackToPlayer";
import {useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";
import style from "./Track.module.scss";

interface ITrackComponent {
    track: ITrack;
    queue: ITrack[] | [];
    trackNumber: number;
    currentIndex: number;
    children: ReactNode;
};

const Track = ({track, queue, trackNumber, currentIndex, children}: ITrackComponent) => {

    const { handlePlayAndPauseTrack, isCurrentTrack } = useSelectedTrackToPlayer(track, queue, currentIndex);

    // console.log(track, "Track");

    const { data: dataYourPlaylistsQ } = useGetAllYourPlaylistsQuery();
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
                <div>
                    {children}
                </div>
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

