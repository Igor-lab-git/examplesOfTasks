'use client';
import React from 'react';
import style from "./InputLogin.module.scss";
import Image from "next/image";
// import {setValue} from "reselect/src/autotrackMemoize/autotracking";

interface IInputLogin {
    id: string;
    typeInput: string;
    labelInput: string;
    autoComplete: string;
    iconLetter?: string
    placeholderInput: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLogin = ({
    id,
     typeInput,
     labelInput,
       autoComplete,
       iconLetter,
       placeholderInput,
                        value,
                        onChange
  }: IInputLogin) => {
    return (
        <div className={style.fieldInput}>
            {labelInput && (
                <label
                    className={style.inputLabel}
                    htmlFor={id}>{labelInput}
                </label>
            )}
            <div className={style.wrapperInput}>
                {iconLetter && (
                    <Image
                        className={style.inputIcon}
                        src={iconLetter}
                        alt={""}/>
                )}
                <input
                    value={value}
                    onChange={onChange}
                    className={style.inputElement}
                    type={typeInput}
                    placeholder={placeholderInput}
                    autoComplete={autoComplete}
                    required/>
            </div>
        </div>
    )
};

export default InputLogin;
