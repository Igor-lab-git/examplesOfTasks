import { configureStore } from "@reduxjs/toolkit";
// import {moviesSlice} from "./ui/moviesSlice.ts";
import {moviesApi} from "./ui/moviesApi.ts";


export const store = configureStore({
    reducer: {
        // movies: moviesSlice.reducer,
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



// ======================================================

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { moviesApi } from "./ui/moviesApi.ts";

// // 1. Импортируем persist
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // 2. Настройка: ЧТО сохранять
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [moviesApi.reducerPath],
// };

// // 3. Создаём объект редьюсеров
// const rootReducer = {
//   [moviesApi.reducerPath]: moviesApi.reducer,
// };

// // 4. Применяем persist к корневому редьюсеру
// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers(rootReducer) // combineReducers импортируйте из redux или @reduxjs/toolkit
// );

// // 5. Создаём store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
//       },
//     }).concat(moviesApi.middleware),
//   devTools: true,
// });

// export const persistor = persistStore(store);