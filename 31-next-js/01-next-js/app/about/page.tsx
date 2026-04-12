'use client';

import React from 'react'
import {useRouter} from 'next/navigation';
import ImageAvatar from "@/src/components/ImageAvatar";

const AboutPage = () => {
    const router = useRouter()
    return (
        <>
            <button onClick={() => router.back()}>back</button>
            <h1>About PAGE :)</h1>
            <h2>
                JENNA I LOVE YOU
            </h2>
            <ImageAvatar/>
        </>
    )
};

export default AboutPage;
