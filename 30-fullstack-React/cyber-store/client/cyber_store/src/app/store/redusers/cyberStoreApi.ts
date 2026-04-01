import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {jwtDecode} from "jwt-decode";

export interface IDevice {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    images: string[],
    typeId: number,
    brandId: number
}

export interface IAllDevices {
    data: IDevice[];
    total?: number;
    page?: number;
    limit?: number;
}

interface IType {
    id: number
    name: string;
    icon: string;
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
    role: "ADMIN" | "USER";
};

interface ILoginRequest{
    email: string;
    password: string;
    role: "ADMIN" | "USER";
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
};

interface ITypeCreateResponse {
    id: number,
    name: string,
    icon?: string | null; 
}

interface IBrandCraeteResponse {
    id: number,
    name: string,
    icon: null | string;    
}

interface ICreateBrandRequest {
    name: string;
};

interface  IDeviceCreateResponse {
    message: string,
    data: {
        rating: number;
        id: number;
        name: string;
        price: number;
        brandId: number;
        typeId: number;
        img: string;
        images: string[];
    }
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
    tagTypes: ["NewDevices", "Types", "Brands"],
    endpoints: (builder) => ({
        getAllDevices: builder.query<IAllDevices, {count?: number}>({
            query: ({count}) => `/api/device?limit=${count || 9}`,
            providesTags: ["NewDevices"],
        }),
        getOneDevicesById: builder.query<IDevice, number>({
            query: (id) => `/api/device/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'NewDevices', id }],
        }),
        getDevicesByTypeId: builder.query<IAllDevices, number>({
            query: (typeId) => `/api/device/?typeId=${typeId}`,
            providesTags: ["NewDevices"],
        }),
        getAllTypes: builder.query<IAllTypes, void>({
            query: () => `/api/type`,
            providesTags: ["Types"],
        }),
        getAllBrands: builder.query<IAllBrands, void>({
            query: () => `/api/brand`,
            providesTags: ["Brands"],
        }),
        // ====================// Admin-panel
        createTypeDevice: builder.mutation<ITypeCreateResponse, FormData>({
            query: (FormData) => ({
                url: `/api/type`,
                method: "POST",
                body: FormData,
            }),
            invalidatesTags: ["Types"],
        }),
        createBrandDevice: builder.mutation<IBrandCraeteResponse, ICreateBrandRequest>({
            query: (brandDevice) => ({
                url: `/api/brand`,
                method: "POST",
                body: brandDevice,
            }),
            invalidatesTags: ["Brands"],
        }),
        createDevice: builder.mutation<IDeviceCreateResponse, FormData>({
            query: (FormData) => ({
                url: `/api/device`,
                method: "POST",
                body: FormData,
            }),
            invalidatesTags: ["NewDevices"],
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
    useCheckAuthQuery,
    useCreateTypeDeviceMutation,
    useCreateBrandDeviceMutation,
    useCreateDeviceMutation
} = cyberStoreApi;
export default cyberStoreApi;

