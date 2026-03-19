import {configureStore} from "@reduxjs/toolkit";
import cyberStoreApi from "./redusers/cyberStoreApi.ts"

const store = configureStore({
    reducer: {
        [cyberStoreApi.reducerPath]: cyberStoreApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cyberStoreApi.middleware),
});

export default store;