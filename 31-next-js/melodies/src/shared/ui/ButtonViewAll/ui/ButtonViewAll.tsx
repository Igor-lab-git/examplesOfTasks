import React from 'react'
import Link from "next/link";

interface IButtonViewAll {
    link: string;
    nameLink: string;
    className: string;
};

const ButtonViewAll = ({link, nameLink = "View All", className}: IButtonViewAll) => {
    return (
        <>
            <Link
                className={className}
                href={link}>
                {nameLink}
            </Link>
        </>
    )
};

export default ButtonViewAll;
