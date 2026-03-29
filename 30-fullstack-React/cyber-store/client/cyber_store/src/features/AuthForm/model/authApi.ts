import {useLoginMutation, useRegistrationMutation} from "../../../app/store/redusers/cyberStoreApi.ts";

const useAuthApi = () => {
    const [register, { isLoading: reqLoad, isSuccess: reqSuccess, error: reqError }] = useRegistrationMutation();
    const [login, { isLoading: loginLoad, isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    const authRequest = {
        loginRequest: async (email: string, password: string) => {
            return await login({email, password, role: "ADMIN"}).unwrap();
        },
        registrationRequest: async (email: string, password: string) => {
            return await register({email, password, role: "ADMIN"}).unwrap();
        },
    };

    return {authRequest, reqLoad, loginLoad, reqSuccess, loginSuccess, reqError, loginError}
};

export default useAuthApi;