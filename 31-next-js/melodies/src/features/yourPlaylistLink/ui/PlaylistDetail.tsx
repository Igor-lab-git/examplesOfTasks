"use client";
import React, {useId, useState} from 'react';
import {
    useDeleteYourPlaylistByIdMutation, useGetTracksToPlayListByIdQuery,
    useGetYourPlaylistByIdQuery,
    useUploadPlaylistCoverMutation
} from "@/store/redusers/melodiesStoreApi";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {UploadTrack} from "@/features/upload-track";

interface IPlaylistDetail {
    playlistId: string
};

const PlaylistDetail = ({playlistId}: IPlaylistDetail) => {
    const idFile = useId();
    const [image, setNewImage] = useState<string>("");
    const router = useRouter();

    const {data, isLoading, error, refetch} = useGetYourPlaylistByIdQuery({playlistId});
    const [uploadCover, {data: dataPlaylistCover, isLoading: isLoadingUpload }] = useUploadPlaylistCoverMutation()
    const [deletePlaylist] = useDeleteYourPlaylistByIdMutation();
    const {data: dataTracksToPlayListById, isLoading: isLoadingTracksToPlayListById} = useGetTracksToPlayListByIdQuery({playlistId});

    console.log(data, isLoading, error, "PlaylistDetail")

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("file", file);

        if(!file) return;

        const img = document.createElement("img") as HTMLImageElement;
        const urlImage = URL.createObjectURL(file);
        img.src = urlImage;
        console.log()

        img.onload = () => {
            console.log(`Изображение загружено, размеры ${img.width}x${img.height}`);
            URL.revokeObjectURL(urlImage);
            
            const minSize = Math.min(img.width, img.height);

            const canvas = document.createElement("canvas") as HTMLCanvasElement;
            canvas.width = minSize;
            canvas.height = minSize;

            const ctx = canvas.getContext('2d');
            ctx?.drawImage(
                img,
                (img.width - minSize) / 2,   // отрезать слева
                (img.height - minSize) / 2,  // отрезать сверху
                minSize,                      // ширина вырезаемого куска
                minSize,                      // высота вырезаемого куска
                0, 0,                      // куда вставить
                minSize,                      // ширина на холсте
                minSize                       // высота на холсте
            );

            canvas.toBlob(async (blob) => {
                if (!blob) return;

                const formData = new FormData();
                formData.append("file", blob, 'cover.jpg');

                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'test.jpg';
                link.click();

                try {
                    const res = await uploadCover({playlistId, file: blob});
                    await refetch();
                    console.log(res, 'Обложка загружена')
                } catch (err: any) {
                    console.error('Полная ошибка:', err);
                    console.error('Ответ сервера:', err.data);
                    console.error('Статус:', err.status);
                }
            }, 'image/jpg')
        };
        img.onerror = function() {
            alert("Ошибка во время загрузки изображения");
        };
    };

    const deletePlayList = async () => {
        try {
          await deletePlaylist({playlistId}).unwrap();
            router.push("/");
            await refetch();
        } catch (e) {
            console.error(e);
        }

    };

    console.log(image, "image")
    console.log(dataPlaylistCover, "dataPlaylistCover")
    const imagePlaylistCover = data?.data.attributes.images?.main?.[0]?.url;
    console.log(imagePlaylistCover, "imagePlaylistCover")
    return (
        <div>
            <h1>PlaylistDetail</h1>
            <button style={{color: "white"}} onClick={deletePlayList}>deletePlayList</button>

            <div>
                <img src="#" alt="image avatar"/>
                <label htmlFor={idFile}>image poster</label>
                <input
                    onChange={handleFileChange}
                    type="file"
                    id={idFile}
                    accept=".jpg, .jpeg, .png"
                    disabled={isLoadingUpload}
                    />
            </div>
            {imagePlaylistCover && (
                <Image src={imagePlaylistCover} alt={"I"} width={200} height={200} />
            )}


            <h2>{data?.data.attributes.title}</h2>
            <p>{data?.data.attributes.addedAt}</p>
            <p>{data?.data.attributes.description}</p>
            <UploadTrack />
            <ul>
                {dataTracksToPlayListById && dataTracksToPlayListById.data.map((track) => (
                    <li key={track.id}>
                        <h1>{track.attributes.addedAt}</h1>
                        {/*<img src={track.attributes.attachments[0]?.url} alt="">*/}
                            <Image src={track.attributes.images.main[0].url}   width={100}
                                   height={100}  alt={"img"}/>
                        <audio
                            // muted
                            // ref={audioRef}
                            controls
                            style={{color: "blue"}}
                            src={track.attributes.attachments && track.attributes.attachments[0]?.url}>
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PlaylistDetail;
