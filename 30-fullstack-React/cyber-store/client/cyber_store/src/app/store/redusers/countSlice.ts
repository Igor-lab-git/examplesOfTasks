import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
    user: {
        email: string;
        exp: number;
        iat: number;
        id: number;
        role: "ADMIN" | "USER"
    },
    isAuth: boolean
};

const initialState:IInitialState = {
    user: {
        email: "",
        exp: 0,
        iat: 0,
        id: 0,
        role: "USER",
    },
    isAuth: false
};

const userSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        // increment: (state) => {
        //     state.value +=1
        // },
        // decrement: (state) => {
        //     state.value -=1
        // }
    }
})

// export const {increment, decrement} = userSlice.actions;
export default userSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
// interface IUser {
//     id: number;
//     email: string;
//     role: 'USER' | 'ADMIN';
// }
//
// interface IAuthState {
//     user: IUser | null;
//     isAuth: boolean;
//     isLoading: boolean;
// }
//
// const initialState: IAuthState = {
//     user: null,
//     isAuth: false,
//     isLoading: true,
// };
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setUser: (state, action: PayloadAction<IUser>) => {
//             state.user = action.payload;
//             state.isAuth = true;
//             state.isLoading = false;
//         },
//         logout: (state) => {
//             state.user = null;
//             state.isAuth = false;
//             state.isLoading = false;
//             localStorage.removeItem('token');
//             localStorage.removeItem('user');
//         },
//         setLoading: (state, action: PayloadAction<boolean>) => {
//             state.isLoading = action.payload;
//         },
//     },
// });
//
// export const { setUser, logout, setLoading } = authSlice.actions;
// export default authSlice.reducer;