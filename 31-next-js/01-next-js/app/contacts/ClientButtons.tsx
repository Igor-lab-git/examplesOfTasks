'use client';

import React from 'react'
import {useRouter} from "next/navigation";

const ClientButtons = () => {
    const router = useRouter();
    return (
        <>
            <button onClick={() => router.back()}>back</button>
            <button onClick={() => router.push("/")}>home</button>
        </>
    )
};

export default ClientButtons;
