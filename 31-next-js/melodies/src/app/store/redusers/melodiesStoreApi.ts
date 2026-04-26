import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITracksPublicResponse} from "@/app/store/types/track";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://musicfun.it-incubator.app/api/1.0";

const melodiesStoreApi = createApi({
    reducerPath: 'melodiesStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('api-key', process.env.NEXT_PUBLIC_API_KEY || '');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTrendingSongs: builder.query<ITracksPublicResponse, void>({
            query: () => `playlists/tracks?pageNumber=${1}`
        })
    })
});

export const {
    useGetTrendingSongsQuery,
} = melodiesStoreApi;

export default melodiesStoreApi