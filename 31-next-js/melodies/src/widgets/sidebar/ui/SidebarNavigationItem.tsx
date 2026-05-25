"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {INavLink} from "@/shared/costants/navigation";
import style from "./Sidebar.module.scss";
import {usePathname} from "next/navigation";

interface ISidebarNavigationItem {
    link: INavLink
};

const SidebarNavigationItem = ({link}: ISidebarNavigationItem) => {
    const pathName = usePathname();

    // console.log(pathName, "activePage");
    return (
        <>
            <li
                className={`${style.navigationItem} ${link.href === pathName ? style.activePage : ""}`}
                key={link.href}>
                <Link className={`${style.navigationLink}`} href={link.href}>
                    {link?.icon && (
                    <Image
                        className={style.navigationLinkImage}
                        src={link.icon}
                        alt={link.label || "icon"}/>
                    )}
                    <span className={style.navigationLabel}>{link.label}</span>
                </Link>
            </li>
        </>
    )
};

export default SidebarNavigationItem;
