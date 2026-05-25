import React from 'react';
import {INavLink} from "@/shared/costants/navigation";
import Link from "next/link";
import style from "./HeaderNavigationItem.module.scss"

interface IHeaderNavItem {
    link: INavLink
};

const HeaderNavigationItem = ({link}: IHeaderNavItem) => {
    return (
        <li className={style.navigationItem}>
            <Link
                className={style.navigationLink}
                href={link.href}>{link.label}
            </Link>
        </li>
    )
};

export default HeaderNavigationItem;
