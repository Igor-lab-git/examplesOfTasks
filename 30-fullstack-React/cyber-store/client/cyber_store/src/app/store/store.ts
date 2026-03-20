import {configureStore} from "@reduxjs/toolkit";
import cyberStoreApi from "./redusers/cyberStoreApi.ts";
import counterReducer from "./redusers/countSlice.ts"

const store = configureStore({
    reducer: {
        [cyberStoreApi.reducerPath]: cyberStoreApi.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cyberStoreApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;