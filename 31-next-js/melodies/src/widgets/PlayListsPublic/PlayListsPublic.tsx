"use client";
import React from 'react';
import {useGetAllYourPlaylistsQuery, useGetPlaylistsPublicQuery} from "@/store/redusers/melodiesStoreApi";

const PlayListsPublic = () => {
    const { data, isLoading } = useGetPlaylistsPublicQuery();

    // console.log(data);


    if(isLoading) return <h2>Loading...</h2>
    return (
        <div>
            <ul>
                {data && data.data.map((list) => (
                    <li style={{color: "red", background: "red"}} key={list.id}>
                        <h2>{list.attributes.user.name}</h2>
                        <ul>
                            {list.attributes.images.main.map((image, index) => (
                                <li key={index}>
                                    <img src={image.url} alt=""/>
                                </li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PlayListsPublic;
