import React from 'react'
import {SearchInput} from "@/features/searchInputHeader";
import HeaderNavigation from "@/widgets/header/ui/HeaderNavigation";
import {AuthControls} from "@/features/auth";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <SearchInput />
            <HeaderNavigation />
            <AuthControls />
        </div>
    )
};

export default Header;
