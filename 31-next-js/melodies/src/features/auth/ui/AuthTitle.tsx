"use client";
import React from 'react';
import style from "./AuthTitle.module.scss";

interface IAuthTitle {
    title?: string
};

const AuthTitle = ({ title }: IAuthTitle) => {
    return (
        <>
            <h1 className={style.authTitle}>{title}</h1>
        </>
    )
};

export default AuthTitle;
