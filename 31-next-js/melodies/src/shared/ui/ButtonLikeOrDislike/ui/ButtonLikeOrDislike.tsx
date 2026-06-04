"use client"
import React from 'react';  
import Image from "next/image";
import iconEmptyLikeButton from "../../../assets/icons/like-button/icon-empty-like-button.svg";
import iconFillLikeButton from "../../../assets/icons/like-button/icon-fill-like-button.svg";

interface IButtonLikeOrDislike {
    isSuccess: boolean;
};

const ButtonLikeOrDislike = ({isSuccess}: IButtonLikeOrDislike) => {
    return (
        <div>
            <Image
                src={isSuccess ? iconFillLikeButton: iconEmptyLikeButton}
                alt={"icon-like"}
                width={25}
                height={25} />
        </div>
    )
};

export default ButtonLikeOrDislike;
