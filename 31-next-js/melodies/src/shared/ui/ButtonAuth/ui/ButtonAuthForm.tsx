"use client";
import React from 'react';
import style from "./ButtonAuthForm.module.scss";

interface IButtonAuthForm {
    buttonName: string;
}

const ButtonAuthForm = ({ buttonName }: IButtonAuthForm) => {
    return (
        <>
            <button className={style.buttonLoginForm}>{buttonName}</button>
        </>
    )
};

export default ButtonAuthForm;
