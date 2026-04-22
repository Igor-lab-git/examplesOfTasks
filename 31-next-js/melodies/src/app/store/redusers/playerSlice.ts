import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "@/app/store/types/track";

interface IInitialState {
    active: null | string,
    volume: number,
    duration: number,
    currentTime: number,
    isPlaying: boolean,
}

const initialState: IInitialState = {
    active: null,
    volume: 50,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
}

const playerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        playTrack: (state, action: PayloadAction<string>) => {
            state.active = action.payload;
            state.isPlaying = true;
        },
        pauseTrack: (state) => {
            state.isPlaying = false;
        },
        togglePlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        setProgress: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        }
    }
});

export const { playTrack, pauseTrack, setVolume, setProgress } = playerSlice.actions;
export default playerSlice.reducer;