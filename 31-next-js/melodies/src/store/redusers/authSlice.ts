import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getValueLocalStorage, removeValueLocalStorage, setValueLocalStorage} from "@/shared/lib/storage/storage";

interface IUser {
    loginName: string
};

interface IInitialState  {
    accessToken?: string | null;
    refreshToken?: string | null;
    isAuthenticated: boolean;
    user: IUser | null;
};

const initialState: IInitialState = {
    accessToken: getValueLocalStorage("accessToken"),
    refreshToken: getValueLocalStorage("refreshToken"),
    isAuthenticated: !!getValueLocalStorage("accessToken"),
    user: getValueLocalStorage("user"),
};

const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        setCredentialsActionSlice: (state, action: PayloadAction<{
            accessToken?: string;
            refreshToken?: string;
            user: { loginName: string };
        }>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            state.user = action.payload.user;

            // if(action.payload.user) {
            //     state.user = action.payload.user;
            // };

            // Сохраняем в localStorage
            if (action.payload.accessToken) {
                setValueLocalStorage("accessToken", action.payload.accessToken);
            }
            if (action.payload.refreshToken) {
                setValueLocalStorage("refreshToken", action.payload.refreshToken);
            }
            if (action.payload.user) {
                setValueLocalStorage("user", action.payload.user);
            }
        },
        logoutActionSlice: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.user = null;
            removeValueLocalStorage("accessToken");
            removeValueLocalStorage("refreshToken");
            removeValueLocalStorage("user");
        }
    }
});

export const { setCredentialsActionSlice, logoutActionSlice } = authSlice.actions;
export default authSlice.reducer;