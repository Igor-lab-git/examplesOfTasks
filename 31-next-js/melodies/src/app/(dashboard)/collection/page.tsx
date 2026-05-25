import React from 'react'
import Link from "next/link";
import {COLLECTION_LIST_NAVIGATION} from "@/shared/costants/navigation";
import plusIconCreatePlaylist from "../../../shared/assets/icons/collection/createPlayList/plus_create_play_list.svg";
import style from "./CollectionPage.module.scss";
import Image from "next/image";
import {YourPlayListLink} from "@/features/yourPlaylistLink";

const CollectionPage = () => {
    return (
        <div>
            <div className={style.createPlayList}>
                <Link
                    className={style.linkCreatePlayList}
                    href={COLLECTION_LIST_NAVIGATION.createPlaylist.href}>
                    <Image
                        className={style.plusIconCreatePlaylist}
                        src={plusIconCreatePlaylist}
                        alt="Create playlist"
                        width={60}
                        height={60}/>
                </Link>
                <span className={style.labelCreatePlayList}>Create list</span>
            </div>
            <YourPlayListLink />
        </div>
    )
};

export default CollectionPage;
