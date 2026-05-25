"use client";
import React from 'react'
import Link from "next/link";
import styles from "./AuthRedirect.module.scss";

interface IAuthRedirect {
    href: string;
    nameLink: string;
    accountQuestion?: string;
};

const AuthRedirect = ({ href, nameLink, accountQuestion }: IAuthRedirect) => {
    return (
        <div className={styles.authRedirect}>
            <span>{accountQuestion}</span>
            <Link
                className={styles.authLink}
                href={href}>
                {nameLink}
            </Link>
        </div>
    )
};

export default AuthRedirect;
