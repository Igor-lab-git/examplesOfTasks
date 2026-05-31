import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../store/redusers/userSlice.ts";
import {useUserRole} from "./useUserRole.ts";

export const useSetUserToStore = () => {
    const dispatch = useDispatch();
    const {user} = useUserRole()

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }
    }, [user, dispatch]);
};