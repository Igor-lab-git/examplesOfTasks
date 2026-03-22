import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

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

interface IRegisterResponse  {
    message: string;
    token: string;
    data: {
        id: number;
        email: string;
        password: string;
        role: "ADMIN" | "USER"
    };
}

interface IAuthResponse {
    message: string;
}

interface IRegisterRequest{
    email: string;
    password: string;
};

const BASE_URL = import.meta.env.VITE_API_URL;

const cyberStoreApi = createApi({
    reducerPath: 'cyberStoreApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json',);
            return headers;
    }}),
    endpoints: (builder) => ({
        getAllDevices: builder.query<IAllDevices, {count?: number}>({
            query: ({count}) => `/api/device?limit=${count || 9}`
        }),
        getAllTypes: builder.query<IAllTypes, void>({
            query: () => `/api/type`
        }),
        getAllBrands: builder.query<IAllBrands, void>({
            query: () => `/api/brand`
        }),
    //     =======================//
        registration: builder.mutation<IRegisterResponse, IRegisterRequest>({
            query: (userData) => ({
                url: `/api/user/registration`,
                method: "POST",
                body: userData,
            }),
            transformResponse(response: {message: string; token: string; data: IRegisterResponse} ){
                localStorage.setItem("token", response.token)
                return response.data
            }
        }),
        login: builder.mutation<IRegisterResponse, IRegisterRequest>({
            query: (userData) => ({
                url: `/api/user/login`,
                method: "POST",
                body: userData,
            }),
            transformResponse(response: {message: string; token: string; data: IRegisterResponse} ){
                localStorage.setItem("token", response.token)
                return response.data
            }
        }),
        checkAuth: builder.query<IAuthResponse, void>({
            query: () => `/api/user/auth`,
        }),
    })
});

export const {
    useGetAllDevicesQuery,
    useGetAllTypesQuery,
    useGetAllBrandsQuery,
    useRegistrationMutation,
    useLoginMutation,
    useCheckAuthQuery
} = cyberStoreApi;
export default cyberStoreApi;

// {
//     "message": "success",
//     "limit": 9,
//     "page": 1,
//     "data": [
//     {
//         "id": 1,
//         "name": "Apple 15 pro",
//         "price": 750000,
//         "rating": 0,
//         "img": "http://localhost:5000/static/8cc17cdc-d23c-4003-9aff-152c68c48286.jpg",
//         "images": [
//             "http://localhost:5000/static/62f11c7c-b7f8-4a9a-af06-6ab696903b7b.jpg",
//             "http://localhost:5000/static/5716bf9b-0909-4e66-a54c-6ed128ff4572.jpg",
//             "http://localhost:5000/static/fdd81c28-6b05-4aac-80a4-b5cf6d750e61.jpg"
//         ],
//         "typeId": 1,
//         "brandId": 3
//     },
//     {
//         "id": 2,
//         "name": "MacOs M5",
//         "price": 350000,
//         "rating": 0,
//         "img": "http://localhost:5000/static/fb551846-f999-40cb-a498-82b44184a0a8.jpg",
//         "images": [
//             "http://localhost:5000/static/a714baa0-3f41-4752-97d1-8d829ed06aa7.jpg",
//             "http://localhost:5000/static/baf10d68-2492-4714-b98e-f1eba2acda0a.jpg",
//             "http://localhost:5000/static/b1f680e6-e6ad-4335-ac0d-a5960ac14bb4.jpg",
//             "http://localhost:5000/static/fe98bb53-9da4-4b90-9269-f88c62391ee6.jpg",
//             "http://localhost:5000/static/5b35badb-cee0-47d7-a9a6-0f3c51864eb4.jpg"
//         ],
//         "typeId": 2,
//         "brandId": 3
//     },
//     {
//         "id": 3,
//         "name": "Samsung  SVA-78950",
//         "price": 76200,
//         "rating": 0,
//         "img": "http://localhost:5000/static/73deb567-e5cb-467a-9b82-3e4786464886.jpg",
//         "images": [
//             "http://localhost:5000/static/60a14bac-5a55-4e77-9d2e-6c0047b487da.jpg",
//             "http://localhost:5000/static/2a6913df-3820-4dd4-91c3-facf54fce69f.jpg",
//             "http://localhost:5000/static/a47c7632-1e10-4793-9f3a-62e9fefa6fca.jpg",
//             "http://localhost:5000/static/24062e36-3770-4028-ab09-5b7b7ff86862.jpg"
//         ],
//         "typeId": 3,
//         "brandId": 4
//     },
//     {
//         "id": 4,
//         "name": "Watch honor D2",
//         "price": 1640,
//         "rating": 0,
//         "img": "http://localhost:5000/static/6503ac10-88f8-46b8-9a4c-5332a1e1fed5.jpg",
//         "images": [
//             "http://localhost:5000/static/737b7ae1-d578-41dd-91ec-b9f2093b8094.jpg",
//             "http://localhost:5000/static/1a722df0-e41d-4df6-9175-678cf4fcc773.jpg",
//             "http://localhost:5000/static/2d8c7cf2-b598-4274-a92e-8a1f92d23d28.jpg"
//         ],
//         "typeId": 4,
//         "brandId": 8
//     },
//     {
//         "id": 5,
//         "name": "Холодильнк Sony 25",
//         "price": 8600,
//         "rating": 0,
//         "img": "http://localhost:5000/static/24ba0eb6-2cfa-4bd7-8199-4e387e76739e.jpg",
//         "images": [
//             "http://localhost:5000/static/ab2fd061-6154-4f32-9063-e1b4e5e598d8.jpg",
//             "http://localhost:5000/static/17858a1c-b565-4ccb-9773-f9b2e088f2e0.jpg"
//         ],
//         "typeId": 5,
//         "brandId": 7
//     },
//     {
//         "id": 6,
//         "name": "Планшет G185",
//         "price": 7850,
//         "rating": 0,
//         "img": "http://localhost:5000/static/79a46ed4-e309-4fd5-acd9-913bb0c92b2b.jpg",
//         "images": [
//             "http://localhost:5000/static/778e593e-9ec7-45c9-bf33-63f4e281a125.jpg",
//             "http://localhost:5000/static/b36c5c44-f70a-450d-b6b2-679dae674f67.jpg",
//             "http://localhost:5000/static/e95a3bbe-cefd-48ad-a03f-feb02964579c.jpg",
//             "http://localhost:5000/static/fde3b2ad-93ed-445f-befc-8a156c4af1be.jpg"
//         ],
//         "typeId": 6,
//         "brandId": 5
//     },
//     {
//         "id": 7,
//         "name": "Алиса колонка n-16",
//         "price": 8600,
//         "rating": 0,
//         "img": "http://localhost:5000/static/13e322c4-4e06-40c2-b021-ebeaf33ccee2.jpg",
//         "images": [
//             "http://localhost:5000/static/465b9c3b-049c-4ebe-aab4-2412e9d698c2.jpg",
//             "http://localhost:5000/static/7fab69ff-e6b7-4220-b584-b67cc1495c88.jpg",
//             "http://localhost:5000/static/1b468d70-9740-487c-8ed9-3c39ee331340.jpg",
//             "http://localhost:5000/static/3c65fc9e-448a-48b7-b646-5527758ada34.jpg",
//             "http://localhost:5000/static/831d8396-bba3-479a-8949-0e238604fac0.jpg"
//         ],
//         "typeId": 7,
//         "brandId": 2
//     }
// ]
// }