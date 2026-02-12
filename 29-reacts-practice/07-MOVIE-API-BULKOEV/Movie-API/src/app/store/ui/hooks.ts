import {useSelector} from "react-redux";
import {selectFilters} from "./moviesSlice.ts";
import {useGetFilteredContentQuery, useGetMoviesTopCollectionsQuery} from "./moviesApi.ts";
import {MOVIE_TOP_RANKINGS_LIST} from "../../../shared/lib/constants.ts";


export const useHookContentQuery = () => {
    const {countries, order, year, page} = useSelector(selectFilters);

    const getTopPopularFilms = useGetMoviesTopCollectionsQuery({
        type: MOVIE_TOP_RANKINGS_LIST[0].type,
        page: page
    });

    const getTopBestFilms = useGetMoviesTopCollectionsQuery({type: MOVIE_TOP_RANKINGS_LIST[1].type, page: page});

    const getContentFilms = useGetFilteredContentQuery({
        type: "FILM",
        page: page,
        countries,
        genres: "1",
        order,
        year
    });

    const getContentSeries = useGetFilteredContentQuery({
        type: "TV_SERIES",
        page: page,
        countries,
        genres: "1",
        order,
        year
    });

    const getContentCartoon = useGetFilteredContentQuery({
        type: "FILM",
        page: page,
        countries,
        genres: "18",
        order,
        year
    });

    const isLoading =
        getTopPopularFilms.isLoading ||
        getTopBestFilms.isLoading ||
        getContentFilms.isLoading ||
        getContentSeries.isLoading ||
        getContentCartoon.isLoading;

    const isError =
        getTopPopularFilms.isError ||
        getTopBestFilms.isError ||
        getContentFilms.isError ||
        getContentSeries.isError ||
        getContentCartoon.isError;

    return {
        isLoading,
        isError,
        getTopPopularFilms,
        getTopBestFilms,
        getContentFilms,
        getContentSeries,
        getContentCartoon,
    }

}