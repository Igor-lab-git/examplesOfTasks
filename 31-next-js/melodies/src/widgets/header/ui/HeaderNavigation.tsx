import React from 'react'
import {NAVIGATION_HEADER_LINKS} from "@/shared/costants/navigation";
import HeaderNavigationItem from "@/widgets/header/ui/HeaderNavigationItem";
import style from "./HeaderNavigation.module.scss"

const HeaderNavigation = () => {

    const linksArray = Object.values(NAVIGATION_HEADER_LINKS);

    return (
        <div>
            <nav className={style.navigation}>
                <ul className={`list-reset ${style.navigationList}`}>
                    {linksArray.map((link) => (
                        <HeaderNavigationItem key={link.href} link={link}/>
                    ))}
                </ul>
            </nav>
        </div>
    )
};
export default HeaderNavigation;
