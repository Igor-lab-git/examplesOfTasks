"use client";
import React, {useId, useState} from 'react'
import {useUploadTrackMutation} from "@/store/redusers/melodiesStoreApi";

const UploadTrack = () => {
    const [titleValue, setTitleValue] = useState('');
    const [fileValue, setFileValue] = useState<File | null>(null);
    const idTitleUploadTrack = useId();
    const idFileUploadTrack = useId();
    const [uploadTrack, {isLoading}] = useUploadTrackMutation();

    const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!titleValue.trim() || !fileValue) return;

        console.log(titleValue, "titleValue")
        console.log(fileValue, "fileValue");

        if (fileValue.size > 1048576) {
            alert('Файл слишком большой. Максимум 1 MB');
            return;
        }

        const formData = new FormData();
        formData.append('title', titleValue);
        formData.append('file', fileValue);

        try {
          const result =  await uploadTrack(formData).unwrap();
            console.log('Трек загружен:', result);
        } catch (error) {
            console.error('Полная ошибка:', error);
            if (error && typeof error === 'object' && 'data' in error) {
                // Распечатайте тело ответа сервера, там может быть объяснение
                console.error('Детали от сервера:', JSON.stringify(error.data, null, 2));
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor={idTitleUploadTrack}>Название трека</label>
                <input
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    type="text"
                    name="title"
                    id={idTitleUploadTrack}
                    placeholder="Название трека"
                    required={true}
                />

                <label htmlFor={idFileUploadTrack}>Файл</label>
                <input
                    onChange={(e) => setFileValue(e.target.files?.[0] || null)}
                    type="file"
                    name="file"
                    id={idFileUploadTrack}
                    accept=".mp3"
                    required={true}/>

                <button
                    style={{color: "white"}}
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
    )
};

export default UploadTrack;
