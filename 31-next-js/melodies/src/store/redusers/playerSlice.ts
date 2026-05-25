import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "@/store/types/tracksPublic";

interface IPlayTrackWithQueuePayload {
    track: null | ITrack;
    queue: ITrack[] | [];
    currentIndex: number;
};

interface IInitialState {
    activeTrack: null | ITrack,
    queue: ITrack[] | [];
    currentIndex: number;
    volume: number,
    duration: number,
    currentTime: number,
    isPlaying: boolean,
    isMuted: boolean
};

const initialState: IInitialState = {
    activeTrack: null,
    queue: [],
    currentIndex: -1,
    volume: 30, //громкость | объем
    duration: 0, //продолжительность
    currentTime: 0,
    isPlaying: false,
    isMuted: false //отключен
};

const playerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        playTrack: (state, action: PayloadAction<ITrack>) => {
            state.activeTrack = action.payload;
            state.isPlaying = true;
        },
        togglePlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setCurrentTimes: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload;
        },
        setToggleMute: (state) => {
            state.isMuted = !state.isMuted;
        },
        playTrackWithQueue: (state, action: PayloadAction<IPlayTrackWithQueuePayload>) => {
            const {track, queue, currentIndex} = action.payload;
            state.activeTrack = track;
            state.queue = queue;
            state.currentIndex = currentIndex;
            state.isPlaying = true;
            state.currentTime = 0;
        },
        prevTrackSwitch: (state) => {
            if(state.queue.length === 0) return;
            if(state.currentIndex > 0) {
                state.currentIndex--;
                state.activeTrack = state.queue[state.currentIndex];
                state.currentTime = 0;
                state.isPlaying = true;
            }
        },
        nextTrackSwitch: (state) => {
            if(state.queue.length === 0) return;
            if(state.currentIndex < state.queue.length - 1) {
                state.currentIndex++;state.activeTrack = state.queue[state.currentIndex];
                state.currentTime = 0;
                state.isPlaying = true;

            }
        }
    }
});

export const {
    playTrack,
    togglePlaying,
    setVolume,
    setCurrentTimes,
    setToggleMute,
    setDuration,
    playTrackWithQueue,
    prevTrackSwitch,
    nextTrackSwitch
} = playerSlice.actions;
export default playerSlice.reducer;