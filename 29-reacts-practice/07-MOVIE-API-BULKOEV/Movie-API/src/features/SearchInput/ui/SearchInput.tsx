import {type JSX, memo} from "react";
import searchIcon from "../../../../public/header/Search.svg"
import style from "./SearchInput.module.scss"


const SearchInput = (): JSX.Element => {
    console.log("SearchInput")
    return (
        <div className={style.inputContainer}>
            <input className={style.inputElement} type="text" placeholder="Поиск по сайту..."/>
            <div className={style.icon}>
                <img src={searchIcon} alt=""/>
            </div>
        </div>
    )
};

export  default memo(SearchInput);