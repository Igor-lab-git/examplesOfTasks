import {useSelector} from "react-redux";
import {selectFilters} from "../../app/store/moviesSlice.ts";
import {useGetFilteredContentQuery, useGetMoviesTopCollectionsQuery} from "../../app/store/moviesApi.ts";
import {MOVIE_TOP_RANKINGS_LIST} from "../../shared/lib/constants.ts";


export const useHookContentQuery = () => {
    const {country, order, year, page} = useSelector(selectFilters);

    const getTopPopularFilms = useGetMoviesTopCollectionsQuery({
        type: MOVIE_TOP_RANKINGS_LIST[0].type,
        page: page,
    });

    const getTopBestFilms = useGetMoviesTopCollectionsQuery({
        type: MOVIE_TOP_RANKINGS_LIST[1].type,
        page: page
    });

    const getContentFilms = useGetFilteredContentQuery({
        type: "FILM",
        page: page,
        country: country,
        genre: "1",
        order: order,
        year: year
    });

    const getContentSeries = useGetFilteredContentQuery({
        type: "TV_SERIES",
        page: page,
        country: country,
        genre: "1",
        order: order,
        year: year
    });

    const getContentCartoon = useGetFilteredContentQuery({
        type: "FILM",
        page: page,
        country: country,
        genre: "18",
        order: order,
        year: year
    });
    console.log(getTopPopularFilms)
    console.log(getTopBestFilms)

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