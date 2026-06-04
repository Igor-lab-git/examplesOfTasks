"use client";
import React, {useState} from 'react'
import {useAddTrackToMyPlaylistMutation, useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";
import style from "./AddTrackToYourPlaylist.module.scss"
import Image from "next/image";
import iconAddToPlaylist from "../../../shared/assets/icons/track-context-menu/icon-add-to-playlist.svg"

interface IAddTrackToYourPlaylist {
    trackId: string;
}

const AddTrackToYourPlaylist = ({trackId}: IAddTrackToYourPlaylist) => {
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const { data: dataYourPlaylistsQ } = useGetAllYourPlaylistsQuery();
    const [addTrack, {isLoading}] = useAddTrackToMyPlaylistMutation()
    console.log(dataYourPlaylistsQ, "AddTrackToYourPlaylist", "AddTrackToYourPlaylist")

    const handleAddTrackToYourPlaylist = async (trackId: string, playlistId: string) => {
        try {
            const res = await addTrack({ playlistId, trackId});
            console.log(res, "handleAddTrackToYourPlaylist")
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div
                onMouseEnter={() => setSubMenuOpen(true)}
                onMouseLeave={() => setSubMenuOpen(false)}>
            <button>
                <Image src={iconAddToPlaylist} alt={"icon"}  width={20} height={20}/>
                Add to playlist
            </button>
                {subMenuOpen && (
                    <div className={style.submenu}>
                        {dataYourPlaylistsQ && dataYourPlaylistsQ?.data.map((playlist) => (
                            <button
                                key={playlist.id}
                                onClick={() => handleAddTrackToYourPlaylist(trackId, playlist.id)}
                                disabled={isLoading}
                                className={style.submenuItem}
                                style={{color: "red"}}
                            >
                                {playlist.attributes.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>


        </div>
    )
};

export default AddTrackToYourPlaylist;
