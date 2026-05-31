import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {jwtDecode} from "jwt-decode";
import type {
    ICheckAuthResponse,
    ICreateBrandRequest,
    ICreateBrandResponse,
    IDeviceCreateResponse,
    ILoginRequest,
    IRegisterRequest,
    IUserResponse,
    TAllDevicesResponse,
    TDecodedToken,
    TGetAllBrandsResponse,
    TGetAllTypesResponse,
    TGetDevicesByTypeIdResponse,
    TGetOneDevicesByIdResponse,
    TTypeCreateResponse
} from "../../../shared/types";

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
        getAllDevices: builder.query<TAllDevicesResponse, {limit?: number, page?: number}>({
            query: ({limit, page}) => `/api/device?limit=${limit || 9}&page=${page || 1}`,
            providesTags: ["NewDevices"],
        }),
        getOneDevicesById: builder.query<TGetOneDevicesByIdResponse, number>({
            query: (id) => `/api/device/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'NewDevices', id }],
        }),
        getDevicesByTypeId: builder.query<TGetDevicesByTypeIdResponse, { typeId: number; limit?: number; page?: number }>({
            query: ({ typeId, limit, page }) => {
                const params = new URLSearchParams();
                params.append('typeId', String(typeId));
                if (limit) params.append('limit', String(limit));
                if (page) params.append('page', String(page));
                return `/api/device/?${params.toString()}`;
            },
            providesTags: ["NewDevices"],
        }),
        getAllTypes: builder.query<TGetAllTypesResponse, void>({
            query: () => `/api/type`,
            providesTags: ["Types"],
        }),
        getAllBrands: builder.query<TGetAllBrandsResponse, void>({
            query: () => `/api/brand`,
            providesTags: ["Brands"],
        }),
        // ====================// Admin-panel
        createTypeDevice: builder.mutation<TTypeCreateResponse, FormData>({
            query: (FormData) => ({
                url: `/api/type`,
                method: "POST",
                body: FormData,
            }),
            invalidatesTags: ["Types"],
        }),
        createBrandDevice: builder.mutation<ICreateBrandRequest, ICreateBrandResponse>({
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
                const decoded = jwtDecode<TDecodedToken>(response.token)
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
                const decoded = jwtDecode<TDecodedToken>(response.token);

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

