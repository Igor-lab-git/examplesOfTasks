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
    year: number | null;
};

export interface IMoviesCollectionResponse {
    total: number;
    totalPages: number;
    items: IMovies[];
};

interface IFilteredContent {
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

interface IMovieById {
    kinopoiskId: number;
    posterUrl: string;
    nameRu: string | null;
    nameOriginal: string | null;
    ratingKinopoisk: number;
    year: number | null;
    countries: {
        country: string
    }[];
    genres: {
        genre: string
    }[];
    filmLength: number;
    description: string;
    webUrl: string;
    imdbId: string;
};

interface ISequelsPrequels {
    filmId: number;
    nameRu: null | string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: "PREQUEL" | "SEQUEL";
};

interface IPersonById {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: null | string;
    posterUrl: string;
    professionText: string;
    professionKey: string;
};

interface IActorById {
    personId: string;
    webUrl: string;
    nameRu: string;
    nameEn: string;
    sex: string;
    posterUrl: string;
    birthday: string;
    age: number;
    birthplace: string;
    profession: string;
    films: {
        filmId: number;
      nameRu: string;
      nameEn: string;
      rating: string;
      general: boolean;
      description: string;
      professionKey: string;
    }
}

interface  ITeaserAndTrailerById {
    items: {
        name: string;
        site: string;
        url: string
    }[]
    total: number
}

const exceptionsGenres = ["", "новости", "для взрослых", "церемония", "концерт"]

const KEY_API = import.meta.env.VITE_API_KEY || "";
const BASE_URL = "https://kinopoiskapiunofficial.tech/api";

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,
    prepareHeaders: headers => {
        headers.set('X-API-KEY', KEY_API);
        headers.set('Content-Type', 'application/json',);
        return headers;
    }}),
    endpoints: (builder) => ({
        getMoviesTopCollections: builder.query<IMoviesCollectionResponse, { type?: string; page: number }>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        }),
        getFilteredContent: builder.query<IFilteredContent, { country?: string; genre?: string, order?: string, type?: string, year?: number, page?: number, keyword?: string}>({
            query: ({
                country,
                genre,
                order = "NUM_VOTE",
                type = "FILM",
                year,
                page,
                keyword = "",
            })=> `/v2.2/films?countries=${country}&genres=${genre}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
        }),
        getSelectOptions: builder.query<ISelectOptions, void>({
            query: ()=> `v2.2/films/filters`,
            transformResponse: (response: ISelectOptions) => ({
                ...response,
                genres: response.genres.filter(
                    (genre: { genre: string }) => !exceptionsGenres.includes(genre.genre)
                )
            })
        }),
        getMovieById: builder.query<IMovieById, {id: number}>({
            query: ({id})=> `/v2.2/films/${id}`,
        }),
        getSequelsPrequels: builder.query<ISequelsPrequels[], {id: number}>({
            query: ({id})=> `/v2.1/films/${id}/sequels_and_prequels`,
        }),
        getPersonById: builder.query<IPersonById[], {id: number}>({
            query: ({id})=> `/v1/staff?filmId=${id}`,
        }),
        getTeaserAndTrailerById: builder.query<ITeaserAndTrailerById, {id?: number}>({
            query: ({id})=> `/v2.2/films/${id}/videos`,
        }),
        getActorById: builder.query<IActorById[], {id: number}>({
            query: ({id})=> `/v1/staff/${id}`,
        }),
        
    }),


})

export const {
    useGetMoviesTopCollectionsQuery,
    useGetFilteredContentQuery,
    useGetSelectOptionsQuery,
    useGetMovieByIdQuery,
    useGetSequelsPrequelsQuery,
    useGetPersonByIdQuery,
    useGetTeaserAndTrailerByIdQuery,
    useGetActorByIdQuery} = moviesApi;



