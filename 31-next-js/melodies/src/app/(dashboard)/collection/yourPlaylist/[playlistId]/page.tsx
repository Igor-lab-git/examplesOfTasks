import React from 'react'
import PlaylistDetail from "@/features/yourPlaylistLink/ui/PlaylistDetail";

interface PlaylistPageProps {
    params: {
        playlistId : string;
    };
};

const YourPlayListPage = async ({params}: PlaylistPageProps) => {

    const { playlistId  } = await params;

    console.log(await params, "params");

    return (
        <div>
            <h2>YourPlayListPage</h2>
            <PlaylistDetail playlistId={playlistId } />
        </div>
    )
};

export default YourPlayListPage;


