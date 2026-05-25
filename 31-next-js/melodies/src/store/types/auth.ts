export interface ILoginCredentials {
    login: string;
    password: string;
    rememberMe: boolean
};

export interface ILogin {
    accessToken: "string",
    refreshToken: "string"
};