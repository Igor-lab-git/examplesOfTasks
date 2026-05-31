import {useEffect} from "react";
import {logOutUser} from "../store/redusers/userSlice.ts";
import {useDispatch} from "react-redux";
import {useUserRole} from "./useUserRole.ts";


export const useLogOutUserAndClearLocalStorage = () => {
    const dispatch = useDispatch();
    const {error} = useUserRole();

    useEffect(() => {
        if (error && "status" in error && error.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            dispatch(logOutUser());
        }
    }, [error, dispatch]);
}