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

interface IFilterувContent {
    total: number;
    totalPages: number;
    items: IMovies[];
};

interface ISelectOptions {
    genres: 
        {
          "id": number,
          "genre": string
        }[];
        countries: 
    {
      "id": number,
      "country": string
    }[];
};

const exceptionsGenres = ["", "новости", "для взрослых", "церемония", "концерт"]


// const KEY_API = import.meta.env.VITE_KINOPOISK_KEY || "";
const API_KEY = "b991989e-b5f5-499d-af3b-7032b60b94d0";
const BASE_URL = "https://kinopoiskapiunofficial.tech/api";


// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,
    prepareHeaders: headers => {
        headers.set('X-API-KEY', API_KEY);
        headers.set('Content-Type', 'application/json',);
        return headers; // Важно вернуть headers
    }}),
    endpoints: (builder) => ({
        getMoviesTopCollections: builder.query<IMoviesCollectionResponse, { type?: string; page: number }>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        }),
        getFilteredContent: builder.query<IFilterувContent, { country?: string; genre?: string, order?: string, type?: string, year?: number, page?: number}>({
            query: ({
                country,
                genre,
                order = "NUM_VOTE",
                type = "FILM",
                year,
                page
            })=> `/v2.2/films?countries=${country}&genres=${genre}&order=${order}&type=${type}&year=${year}&page=${page}`,
        }),
        getSelectOptions: builder.query<ISelectOptions, void>({
            query: ()=> `v2.2/films/filters`,
            transformResponse: (response: ISelectOptions) => ({
                ...response,
                genres: response.genres.filter(
                    (genre: { genre: string }) => !exceptionsGenres.includes(genre.genre)
                )
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesTopCollectionsQuery, useGetFilteredContentQuery, useGetSelectOptionsQuery } = moviesApi;



