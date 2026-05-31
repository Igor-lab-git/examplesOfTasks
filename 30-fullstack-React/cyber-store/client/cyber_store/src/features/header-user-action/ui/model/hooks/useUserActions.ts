import {useSelector} from "react-redux";
import type {RootState} from "../../../../../app/store/store.ts";

export const useUserActions = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const { totalItems } = useSelector((state: RootState) => state.cart);

    return {
        user,
        totalItems,
        role: user?.role,
    }
};