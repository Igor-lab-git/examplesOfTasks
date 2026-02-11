// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IMovies {
    kinopoiskId: number;
    imdbId: string | null;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    description: string;
    ratingImdb: number;
    ratingKinopoisk: number;
}

interface IMoviesCollectionResponse {
    total: number;
    totalPages: number;
    items: IMovies[];
};

// const KEY_API = import.meta.env.KINOPOISK_KEY || "";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
        headers.set('X-API-KEY', "b991989e-b5f5-499d-af3b-7032b60b94d0");
        headers.set('Content-Type', 'application/json',);
        return headers; // Важно вернуть headers
    }}),
    endpoints: (builder) => ({
        getMoviesTopCollections: builder.query<IMoviesCollectionResponse, { type?: string; page: number }>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesTopCollectionsQuery } = moviesApi;



