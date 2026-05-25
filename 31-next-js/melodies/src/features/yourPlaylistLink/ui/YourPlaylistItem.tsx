import React from 'react'
import Link from "next/link";
import YourPlaylistCover from "@/features/yourPlaylistLink/ui/YourPlaylistCover";
import YourPlaylistLabel from "@/features/yourPlaylistLink/ui/YourPlaylistLabel";
import {IDataPlaylist} from "@/store/types/playLists";
import {useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";

interface IYourPlaylistItem {
    playlist: IDataPlaylist
};

const YourPlaylistItem = ({playlist}: IYourPlaylistItem) => {
    // console.log(playlist.id);

    return (

        <li>
            <Link href={`/collection/yourPlaylist/${playlist.id}`}>
                <YourPlaylistCover imagesList={playlist.attributes.images?.main}/>
            </Link>
            <Link href={`/collection/yourPlaylist/${playlist.id}`}>
                <YourPlaylistLabel title={playlist.attributes.title}/>
            </Link>
        </li>

    )
};

export default YourPlaylistItem;
