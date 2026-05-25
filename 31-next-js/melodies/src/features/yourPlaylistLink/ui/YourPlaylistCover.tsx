import React from 'react'
import Image from "next/image";
import iconPosterPlayListIsEmpty from "@/shared/assets/icons/collection/play_list/icon_enpty_poster_play_list.svg";
import {IMain} from "@/store/types/common";

interface  IYourPlaylistCover {
    imagesList: IMain[]
};

export const YourPlaylistCover = ({imagesList}: IYourPlaylistCover) => {

    const coverUrl = imagesList?.[0]?.url;

    // console.log(imagesList, "imagesList")
    return (
        <div>{coverUrl ? (
            <img src={coverUrl} alt=""/>
        ) : (
            <Image src={iconPosterPlayListIsEmpty} alt="poster playlist"/>
        )}</div>
    )
};

export default YourPlaylistCover;
