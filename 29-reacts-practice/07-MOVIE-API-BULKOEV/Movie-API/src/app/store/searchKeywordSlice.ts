import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store.ts";

interface ICurrentGlobalState {
    country: string;
    genre: string;
    order: "NUM_VOTE" | string;
    type: string;
    year: number;
    page: number;
    keyword: string;
};

const initialState: ICurrentGlobalState = {
    country: "",
    genre: "",
    order: "NUM_VOTE",
    type: "",
    year: 1000,
    page: 1,
    keyword: "",
};

export const searchKeywordSlice = createSlice({
    name: "searchKeywordSlice",
    initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
        setGenres: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
        setYear: (state, action: PayloadAction<number>) => {
            state.year = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchKeywordMovie: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload;
        },
    },
});

export const { setCountries, setGenres, setOrder, setType, setYear, setPage, setSearchKeywordMovie } = searchKeywordSlice.actions;
export const selectKeywort = (state: RootState) => state.moviesKeyWord;

export default searchKeywordSlice.reducer;
