import {  type ChangeEvent, type JSX, memo, useState} from "react";
import searchIcon from "../../../../public/header/Search.svg"
import style from "./SearchInput.module.scss"
import {useGetFilteredContentQuery} from "../../../app/store/moviesApi.ts";
import { useDispatch, useSelector } from "react-redux";
import {  selectKeywort, setSearchKeywordMovie } from "../../../app/store/searchKeywordSlice.ts";
// import { getSearchMovie } from "../../../app/store/moviesSlice.ts";



const SearchInput = (): JSX.Element => {

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    dispatch(setSearchKeywordMovie(searchText));
    const {
        country,
        genre,
        order,
        type,
        year,
        page,
        keyword,} = useSelector(selectKeywort);

    
    const {data} = useGetFilteredContentQuery({
        country,
        genre,
        order,
        type,
        year,
        page,
        keyword}, {
            skip: searchText.length < 3 // Не отправлять запрос, если мало символов
          });
    console.log(data)

    // useEffect(() => {
    //     dispatch(getSearchKeywordMovie(searchText))
    // }, [searchText])

    // getSearchMovie("Гарри")

    // const listMovies = data?.items.map((item) => item.nameRu)

    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);
        // console.log('1. Локальный searchText:', value);
        
        // console.log('2. Диспатчнули в Redux');
    };
    
    
    // const toggleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch(getSearchMovie(e.target.value)); // e.target.value, а не e.value!
    // };

//     console.log('3. keyword из Redux для запроса:', keyword);
// console.log('4. URL запроса:', useGetFilteredContentQuery);

// ===========


    console.log(page, keyword, "SearchInput")
    return (
        <div className={style.inputContainer}>
            <input
                value={searchText}
                // value={data && data?.items.map((el) => el.nameRu)}
                // options={data && data?.items.map((el) => el.nameRu)}
                onChange={handleInputChange}
                className={style.inputElement}
                type="search"
                placeholder="Поиск по сайту..."/>
            <div className={style.icon}>
                <img src={searchIcon} alt=""/>
            </div>

        </div>
    )
};

export  default memo(SearchInput);