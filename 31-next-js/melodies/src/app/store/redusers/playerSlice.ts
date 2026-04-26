import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "@/app/store/types/track";

interface IInitialState {
    activeTrack: null | ITrack,
    volume: number,
    duration: number,
    currentTime: number,
    isPlaying: boolean,
    isMuted: boolean
};

const initialState: IInitialState = {
    activeTrack: null,
    volume: 30,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    isMuted: false
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
        }
    }
});

export const {
    playTrack,
    togglePlaying,
    setVolume,
    setCurrentTimes,
    setToggleMute,
    setDuration
} = playerSlice.actions;
export default playerSlice.reducer;