"use client";
import React from 'react';
import {useCreatePlaylistMutation} from "@/store/redusers/melodiesStoreApi";

export const CreatePlaylistPage = () => {
    const [namePlayList, setNamePlayList] = React.useState<string>("");
    const [descriptionPlayList, setDescriptionPlayList] = React.useState<string>("");

    const[createPlaylist, {isLoading}] = useCreatePlaylistMutation();

    const handleCreatePlaylist = async () => {
        try {
            const response = await createPlaylist({
                title: namePlayList,
                description: descriptionPlayList
            }).unwrap();

            console.log('Плейлист создан, id:', response);

            setNamePlayList("");
            setDescriptionPlayList("")
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <span>New playlist</span>
            <div>
                <input
                    required={true}
                    value={namePlayList}
                    onChange={(e) => setNamePlayList(e.target.value)}
                    type="text"
                    placeholder='Input your new playlist'/>

                <input
                    value={descriptionPlayList}
                    onChange={(e) => setDescriptionPlayList(e.target.value)}
                    type="text"
                    placeholder='Input your new playlist'/>
            </div>
            <button
                type="button"
                disabled={isLoading || namePlayList.trim().length === 0}
                style={{color: "white"}}
                onClick={handleCreatePlaylist}>
                {isLoading ? "Creating..." : "Create playlist"}
            </button>
        </div>
    )
};

export default CreatePlaylistPage;
