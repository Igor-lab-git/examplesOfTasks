import React from 'react';
import Image from "next/image";
import searchIcon from "../../../shared/assets/icons/header/input/search-icon-input.svg"
import style from "./SearchInput.module.scss";

const SearchInput = () => {
    return (
        <div className={style.searchWrapper}>
            <Image
                className={style.searchIcon}
                src={searchIcon}
                alt={"icon"} />
            <input
                className={style.searchInput}
                type="search"
                placeholder="Search For Musics, Artists, ..." />
        </div>
    )
};

export default SearchInput;
