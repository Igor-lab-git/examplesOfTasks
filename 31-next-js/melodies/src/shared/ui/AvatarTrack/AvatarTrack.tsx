import React from 'react'
import Image from "next/image";
import iconEmptyPosterTrack from "@/shared/assets/icons/collection/play_list/icon_enpty_poster_play_list.svg";
import style from "./AvatarTrack.module.scss";

interface IAvatarTrack {
    image: string;
};

const AvatarTrack = ({image}: IAvatarTrack) => {
    return (
        <div className={style.containerImage}>
            <Image
                className={style.image}
                src={image || iconEmptyPosterTrack}
                alt="poster of track"
                width={40}
                height={40}/>
        </div>
    )
};
export default AvatarTrack;

