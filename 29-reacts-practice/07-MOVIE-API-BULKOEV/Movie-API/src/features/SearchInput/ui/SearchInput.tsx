import {type JSX, memo} from "react";
import searchIcon from "../../../../public/header/Search.svg"
import style from "./SearchInput.module.scss"
import {useGetFilteredContentQuery} from "../../../app/store/moviesApi.ts";


const SearchInput = (): JSX.Element => {

    // const [searchText, setSearchText] = useState("");

    const {data} = useGetFilteredContentQuery({
        country: "",
        genre: "",
        order: "NUM_VOTE",
        type: "FILM",
        year: 1000,
        page: 1,
        keyword: ""});
    // "useGetFilteredContentQuery"
    console.log(data)

    // const listMovies = data?.items.map((item) => item.nameRu)
    //
    // const handleQueryMovie = (e) => {
    //     if(e.target.value.trim()) {
    //         setSearchText(e.target.value)
    //     }
    //     setSearchText("")
    // }

    console.log("SearchInput")
    return (
        <div className={style.inputContainer}>
            <input
                // value={}
                // onChange={}
                className={style.inputElement}
                type="text"
                placeholder="Поиск по сайту..."/>
            <div className={style.icon}>
                <img src={searchIcon} alt=""/>
            </div>
        </div>
    )
};

export  default memo(SearchInput);