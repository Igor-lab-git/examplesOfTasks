import React from 'react'
import Link from "next/link";
import {NAVIGATION_LINKS_SIDEBAR} from "@/shared/costants/navigation";
import style from "./HeroHome.module.scss";

const HeroDiscoverLink = () => {

    return (
        <>
            <Link
                className={style.discoverLink}
                href={NAVIGATION_LINKS_SIDEBAR.discover.href}>
                <span className={style.discoverLinkLabel}>
                    {NAVIGATION_LINKS_SIDEBAR.discover.label} Now
                </span>
            </Link>
        </>
    )
};

export default HeroDiscoverLink;
