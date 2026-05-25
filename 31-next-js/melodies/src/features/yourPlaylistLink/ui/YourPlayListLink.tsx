"use client";
import React from 'react';
import YourPlaylistItem from "@/features/yourPlaylistLink/ui/YourPlaylistItem";
import {useGetAllYourPlaylistsQuery} from "@/store/redusers/melodiesStoreApi";

const YourPlayListLink = () => {

    const {data, isLoading, error} = useGetAllYourPlaylistsQuery();

    console.log(data, "YourPlayListLink");

    if(isLoading) return <span>loading...</span>;
    if(error) return <span>Error loading playlists.</span>;

    return (
        <>
            <ul>
                {data?.data.map((playlist) => (
                <YourPlaylistItem key={playlist.id} playlist={playlist}/>
                ))}
            </ul>
        </>
    )
};

export default YourPlayListLink
