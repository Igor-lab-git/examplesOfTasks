import React from 'react'
import Link from "next/link";
import style from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <>
            <nav className={style.navigation}>
                <Link className={style.link} href="/">home</Link>
                <Link className={style.link} href="/about">about</Link>
                <Link className={style.link} href="/contacts">contacts</Link>
                <Link className={style.link} href="/users">users</Link>
            </nav>
        </>
    )
};

export default Navigation;
