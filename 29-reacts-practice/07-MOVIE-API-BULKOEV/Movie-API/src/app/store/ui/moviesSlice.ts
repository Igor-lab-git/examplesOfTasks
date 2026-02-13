import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ICurrentGlobalState {
  country: string;
  genre: string;
  order: "NUM_VOTE" | string;
  type: string;
  year: number;
  page: number;
}

// Define the initial state using that type
const initialState: ICurrentGlobalState = {
  country: "",
  genre: "",
  order: "NUM_VOTE",
  type: "",
  year: 1000,
  page: 1,
};

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setCountryes: (state, action: PayloadAction<string>) => {
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
  },
});

// Other code such as selectors can use the imported `RootState` type

export const { setCountryes, setGenres, setOrder, setType, setYear, setPage } = moviesSlice.actions;
export const selectFilters = (state: RootState) => state.movies;


export default moviesSlice.reducer;
