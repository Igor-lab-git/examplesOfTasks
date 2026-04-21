"use client";
import React from 'react'
import {usePathname} from "next/navigation";

const ProfilePage = () => {
    const pathName = usePathname();

    console.log(pathName.split("/")[1]);

    return (
        <div>ProfilePage</div>
    )
};

export default ProfilePage;
