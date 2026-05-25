import React from 'react'
import Link from "next/link";
import {INavLink} from "@/shared/costants/navigation";
import style from "./AuthControlsLink.module.scss"

interface IAuthControlsLink {
    link: INavLink;
};

const AuthControlsLink = ({link}: IAuthControlsLink) => {
    return (
        <li
            className={style.navigationItem}
            key={link.href}>
            <Link
                className={style.navigationLink}
                href={link.href}>
                {link.label}
            </Link>
        </li>
    )
};

export default AuthControlsLink;
