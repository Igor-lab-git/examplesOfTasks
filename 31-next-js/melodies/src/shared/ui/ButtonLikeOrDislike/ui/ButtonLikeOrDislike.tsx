import React from 'react'
import Image from "next/image";
import iconEmptyLikeButton from "../../../assets/icons/like-button/icon-empty-like-button.svg"

const ButtonLikeOrDislike = () => {
    return (
        <div>
            <Image src={iconEmptyLikeButton} alt={"icon-like"} width={25} height={25} />
        </div>
    )
};

export default ButtonLikeOrDislike;
