import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import playerReducer from "./redusers/playerSlice";
import authReducer from "./redusers/authSlice";
import melodiesStoreApi from "@/store/redusers/melodiesStoreApi";

export const store = configureStore({
    reducer: {
        [melodiesStoreApi.reducerPath]: melodiesStoreApi.reducer,
        player: playerReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(melodiesStoreApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);