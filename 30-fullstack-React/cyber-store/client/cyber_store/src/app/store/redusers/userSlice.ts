import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    email: string;
    role: "ADMIN" | "USER";
};

interface IInitialState {
    user: IUser | null,
    isAuth: boolean;
    isLoading: boolean
};

const initialState:IInitialState = {
    user: null,
    isAuth: false,
    isLoading: true,
};
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        },
        logOutUser: (state) => {
            state.user = null;
            state.isAuth = false;
            state.isLoading = true;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
         },
    }
})

export const {setUser, logOutUser, setLoading} = userSlice.actions;
export default userSlice.reducer;
