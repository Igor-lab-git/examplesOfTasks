import {type JSX} from "react";
import searchIcon from "../../../shared/assets/icons/header/search-icon-input.svg";
import style from "./SearchInput.module.scss"

const SearchInput = (): JSX.Element => {
    return (
        <>
            <div className={style.containerInput}>
                <input className={style.inputElement} type="search" placeholder={"Поиск "}/>
                <img className={style.inputIcon} src={searchIcon} alt=""/>
            </div>
        </>
    )
};

export default SearchInput;