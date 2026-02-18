import {useLocation} from "react-router-dom";
import {useGetMoviesTopCollectionsQuery} from "../../../app/store/moviesApi";
import {MOVIE_TOP_RANKINGS_LIST} from "../../../shared/lib/constants";
import {useState} from "react";

const TopRankingsPageApi = () => {
    const params = useLocation();
    const [numberPage, setNumberPage] = useState<number>(1);

    const getTypeTopMovies = MOVIE_TOP_RANKINGS_LIST.find(
        (item) => item.path === params.pathname
    );

    const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({
        type: getTypeTopMovies?.type,
        page: numberPage,
    });

    return {
        getTypeTopMovies,
        data,
        error,
        isLoading,
        numberPage,
        setNumberPage,
    };
};

export default TopRankingsPageApi;
