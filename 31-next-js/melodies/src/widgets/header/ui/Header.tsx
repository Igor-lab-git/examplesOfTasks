import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href={"/login"}>login</Link>
            <input type="search" placeholder={"Search For Musics, Artists, ..."}/>
        </div>
    )
};

export default Header;
