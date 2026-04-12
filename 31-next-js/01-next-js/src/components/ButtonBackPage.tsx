'use client'
import React from 'react';
import {useRouter} from "next/navigation";


const ButtonBackPage = () => {
    const router = useRouter()
    return (
        <>
            <button onClick={() => router.back()}>back</button>
        </>
    )
};

export default ButtonBackPage;
