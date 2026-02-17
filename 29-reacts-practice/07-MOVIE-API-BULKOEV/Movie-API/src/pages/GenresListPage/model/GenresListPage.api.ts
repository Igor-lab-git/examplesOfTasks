import { useLocation } from "react-router-dom";
import { useGetMoviesTopCollectionsQuery } from "../../../app/store/moviesApi";
import { MOVIE_GENRES_LIST } from "../../../shared/lib/constants";
import { useState } from "react";

const GenresListPageApi = () => {

    const location = useLocation();
    const [numberPage, setNumberPage] = useState<number>(1);
    
    const getTypeGenres =  MOVIE_GENRES_LIST.find((el) => el.path === location.pathname);
    
    const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({
      type: getTypeGenres?.type,
      page: numberPage,
    });

    return {
        data,
        error,
        isLoading,
        numberPage,
        setNumberPage,
        getTypeGenres,
    };
};

export default GenresListPageApi;
