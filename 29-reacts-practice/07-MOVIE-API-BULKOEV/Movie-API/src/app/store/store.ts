import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./moviesApi.ts";
import { moviesSlice } from "./moviesSlice.ts";
import { searchKeywordSlice } from "./searchKeywordSlice.ts";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: moviesSlice.reducer,
    moviesKeyWord: searchKeywordSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
