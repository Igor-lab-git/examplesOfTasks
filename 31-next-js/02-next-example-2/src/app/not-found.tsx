"use client";

import React from 'react'
import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathName = usePathname();
    const name = pathName.split("/")[1];
    console.log(pathName)

    return (
        <div>
            <h1>404</h1>
            <h1>НЭТ такой страницы :)</h1>
            <h2>Страницы с {name} нет</h2>
        </div>
    )
};

