import {useDispatch, useSelector} from "react-redux";
import {useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";
import {RootState} from "@/store/store";
import {playTrack, playTrackWithQueue, togglePlaying} from "@/store/redusers/playerSlice";
import {ITrack} from "@/store/types/tracksPublic";

const useSelectedTrackToPlayer = (track: ITrack, queue: ITrack[] | [], currentIndex: number) => {
    const dispatch = useDispatch();

    const {isPlaying, activeTrack} = useSelector((state: RootState) => state.player);

    const handlePlayAndPauseTrack = () => {
        const idPlayingTrack = activeTrack?.id === track.id;

        if(idPlayingTrack) {
            dispatch(togglePlaying());
        } else {
            dispatch(playTrack(track));
            dispatch(playTrackWithQueue({track, queue, currentIndex}));
        };
    };

    const isCurrentTrack = activeTrack?.id === track.id && isPlaying;

    return {
        handlePlayAndPauseTrack,
        isCurrentTrack
    };
};

export default useSelectedTrackToPlayer;