import {useCheckAuthQuery} from "../store/redusers/cyberStoreApi.ts";

export const useUserRole = () => {
    const { data, isLoading, error } = useCheckAuthQuery();

    return {
        isAdmin: data?.user?.role,
        user: data?.user,
        isLoading,
        error
    };
};