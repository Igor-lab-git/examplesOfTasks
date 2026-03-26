import {configureStore} from "@reduxjs/toolkit";
import cyberStoreApi from "./redusers/cyberStoreApi.ts";
import userReducer from "./redusers/userSlice.ts"
import cartReducer from "./redusers/cartSlice.ts";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [cyberStoreApi.reducerPath]: cyberStoreApi.reducer,
        user: userReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cyberStoreApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);