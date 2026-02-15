import {type JSX} from "react";
import searchIcon from "../../../../public/header/Search.svg"
import style from "./SearchInput.module.scss"


const SearchInput = (): JSX.Element => {
    return (
        <div className={style.inputContainer}>
            <input className={style.inputElement} type="text"/>
            <div className={style.icon}>
                <img src={searchIcon} alt=""/>
            </div>
        </div>
    )
};

export  default SearchInput;