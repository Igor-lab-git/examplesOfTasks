import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ICurrentGlobalState {
  countries: number;
  genres: number;
  order: "NUM_VOTE" | string;
  type: string;
  year: number;
  page: number;
}

// Define the initial state using that type
const initialState: ICurrentGlobalState = {
  countries: 0,
  genres: 0,
  order: "NUM_VOTE",
  type: "",
  year: 2002,
  page: 1,
};

// const fetchMovies = createAsyncThunk("movies/etchMovies", async() => {
//     try {
//         const responce = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
//             method: 'GET',
//             headers: {
//                 'X-API-KEY': 'b991989e-b5f5-499d-af3b-7032b60b94d0',
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = await responce.json();
//         return data;
//     } catch (error) {
//      console.log(error);
//     }
// });

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setCuntries: (state, action: PayloadAction<number>) => {
      state.countries = action.payload;
    },
    setGenres: (state, action: PayloadAction<number>) => {
      state.genres = action.payload;
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

export const { setCuntries, setGenres, setOrder, setType, setYear, setPage } = moviesSlice.actions;
export const selectFilters = (state: RootState) => state.movies;


export default moviesSlice.reducer;
