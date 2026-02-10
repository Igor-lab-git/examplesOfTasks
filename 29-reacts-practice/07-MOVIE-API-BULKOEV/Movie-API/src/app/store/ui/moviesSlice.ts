import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
    countries: string;
    genres: string;
    order: "NUM_VOTE";
    type: string;
    year: string;
    page: number;
}

// Define the initial state using that type
const initialState: CounterState = {
    countries: "",
    genres: "",
    order: "NUM_VOTE",
    type: "",
    year: "",
    page: 1
};


const fetchMovies = createAsyncThunk("movies/etchMovies", async() => {
    try {
        const responce = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b991989e-b5f5-499d-af3b-7032b60b94d0',
                'Content-Type': 'application/json',
            },
        });

        const data = await responce.json();
        return data;
    } catch (error) {
     console.log(error);
    }
});

export const moviesSlice = createSlice({
  name: 'moviesSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = moviesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default moviesSlice.reducer




