import {useLocation} from "react-router-dom";
import {MOVIE_CONTENT_LIST} from "../../../shared/lib/constants.ts";
import {useSelector} from "react-redux";
import {selectFilters} from "../../../app/store/moviesSlice.ts";
import {useGetFilteredContentQuery} from "../../../app/store/moviesApi.ts";
import {useState} from "react";

const ContentListApi  = () => {
    const location = useLocation();
    const [numberPage, setNumberPage] = useState<number>(1);

    const {country, order, year, genre} = useSelector(selectFilters);

    const getTypeContent = MOVIE_CONTENT_LIST.find((item) => item.type === location.pathname);


    const {data, error, isLoading} = useGetFilteredContentQuery({
        country: country,
        genre: genre,
        order,
        type: getTypeContent?.type,
        year: year,
        page: numberPage
    });

    return {
        data,
        error,
        isLoading,
        setNumberPage,
        numberPage,
        country,
        order,
        year,
        genre,
        getTypeContent,
    }
};

export default ContentListApi;