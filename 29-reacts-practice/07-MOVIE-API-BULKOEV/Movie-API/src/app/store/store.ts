import { configureStore } from "@reduxjs/toolkit";
import {moviesSlice} from "./ui/moviesSlice.ts";
import {moviesApi} from "./ui/moviesApi.ts";


export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;