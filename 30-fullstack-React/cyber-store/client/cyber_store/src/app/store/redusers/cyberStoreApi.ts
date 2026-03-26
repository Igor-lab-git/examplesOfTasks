import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {jwtDecode} from "jwt-decode";

interface IDevices {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    images: string[],
    typeId: number,
    brandId: number
}

interface IAllDevices {
    data: IDevices[];
    total?: number;
    page?: number;
    limit?: number;
}

interface IType {
    id: number
    name: string;
}

interface IAllTypes {
    data: IType[];
    message: string;
    count: number;
}

interface IBrand {
    id: number
    name: string;
}

interface IAllBrands {
    data: IBrand[];
    message: string;
    count: number;
}

interface IUserResponse {
    id: number;
    email: string;
    role: "ADMIN" | "USER";
}


interface IRegisterRequest{
    email: string;
    password: string;
};

interface ILoginRequest{
    email: string;
    password: string;
};

interface IDecodedToken {
    id: number;
    email: string;
    role: "ADMIN" | "USER";
    iat?: number;
    exp?: number;
}

interface ICheckAuthResponse {
    success: string,
    user: {
        id: number,
        email: string
        role: "ADMIN" | "USER"
    },
    message: string;
}


const BASE_URL = import.meta.env.VITE_API_URL;

const cyberStoreApi = createApi({
    reducerPath: 'cyberStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            };
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ["NewDevices"],
    endpoints: (builder) => ({
        getAllDevices: builder.query<IAllDevices, {count?: number}>({
            query: ({count}) => `/api/device?limit=${count || 9}`,
            providesTags: ["NewDevices"],
        }),
        getOneDevicesById: builder.query<IDevices, number>({
            query: (id) => `/api/device/${id}`
        }),
        getDevicesByTypeId: builder.query<IAllDevices, number>({
            query: (typeId) => `/api/device/?typeId=${typeId}`
        }),
        getAllTypes: builder.query<IAllTypes, void>({
            query: () => `/api/type`
        }),
        getAllBrands: builder.query<IAllBrands, void>({
            query: () => `/api/brand`
        }),
    //     =======================//
        registration: builder.mutation<IUserResponse, IRegisterRequest>({
            query: (userData) => ({
                url: `/api/user/registration`,
                method: "POST",
                body: userData,
            }),
            transformResponse(response: {message: string; token: string; data: IUserResponse}){
                const decoded = jwtDecode<IDecodedToken>(response.token)
                const userData = {
                    id: decoded.id,
                    email: decoded.email,
                    role: decoded.role
                }

                
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(userData));
                return userData
            }
        }),
        login: builder.mutation<IUserResponse, ILoginRequest>({
            query: (userData) => ({
                url: `/api/user/login`,
                method: "POST",
                body: userData,
            }),
            transformResponse(response: {message: string; token: string; data: IUserResponse} ){
                const decoded = jwtDecode<IDecodedToken>(response.token);

                const userData = {
                    id: decoded.id,
                    email: decoded.email,
                    role: decoded.role
                };
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(userData));
                return userData
            }
        }),
        checkAuth: builder.query<ICheckAuthResponse, void>({
            query: () => `/api/user/auth`,
            transformResponse: (response: ICheckAuthResponse) => {
                // Сохраняем данные пользователя
                // console.log(response, "checkAuth");
                if (response.user) {
                    localStorage.setItem("user", JSON.stringify(response.user));
                }
                return response;
            },
        }),
    })
});

export const {
    useGetAllDevicesQuery,
    useGetOneDevicesByIdQuery,
    useGetDevicesByTypeIdQuery,
    useGetAllTypesQuery,
    useGetAllBrandsQuery,
    useRegistrationMutation,
    useLoginMutation,
    useCheckAuthQuery
} = cyberStoreApi;
export default cyberStoreApi;

