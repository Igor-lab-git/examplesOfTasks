"use client";
import React, {useEffect, useState} from 'react'
import {useGetTrendingSongsQuery} from "@/store/redusers/melodiesStoreApi";
import {ITrack} from "@/store/types/tracksPublic";
import {Track} from "@/entities/track";

const CategorySongs = () => {
    const [page, setPage] = useState(1);
    const [allTracks, setAllTracks] = useState<ITrack[] | []>([]);

    const {data, isLoading} = useGetTrendingSongsQuery({pageNumber: page, pageSize: 10});

    const tracksQueue = allTracks|| [];

    useEffect(() => {
        if(data?.data) {
            setAllTracks(prev => [...prev, ...data?.data]);
        }
    }, [data, page]);

    const uniqueTracks = allTracks.filter((song, index, self) =>
        index === self.findIndex(s => s.id === song.id)
    );

    console.log(uniqueTracks, "uniqueTracks");
    console.log(allTracks, "allTracks");

    if(isLoading) return <h3>Loading...</h3>;

    return (
        <div>
            <ul>
                {uniqueTracks && uniqueTracks.map((song, index ) => (
                    <Track
                        key={song.id}
                        track={song}
                        queue={tracksQueue}
                        trackNumber={index + 1}
                        currentIndex={index}/>
                ))}
            </ul>
            <button onClick={() => setPage(prev => prev + 1)}>show more</button>
        </div>
    )
};

export default CategorySongs;
