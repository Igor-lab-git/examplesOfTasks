import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import melodiesStoreApi from "@/app/store/redusers/melodiesStoreApi";

export const store = configureStore({
    reducer: {
        [melodiesStoreApi.reducerPath]: melodiesStoreApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(melodiesStoreApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);