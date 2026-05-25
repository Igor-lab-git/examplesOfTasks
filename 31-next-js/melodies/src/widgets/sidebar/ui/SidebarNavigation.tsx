import React from 'react'
import {NAVIGATION_LINKS_SIDEBAR} from "@/shared/costants/navigation";
import SidebarNavigationItem from "@/widgets/sidebar/ui/SidebarNavigationItem";
import style from "./Sidebar.module.scss";
import SidebarLogoutButton from "@/widgets/sidebar/ui/SidebarLogoutButton";

const SidebarNavigation = () => {

    const linksInArray = Object.values(NAVIGATION_LINKS_SIDEBAR);

    return (
        <>
            <nav className={style.navigation}>
                <ul className={`list-reset ${style.navigationList}`}>
                    {linksInArray.map((link) => (
                        <SidebarNavigationItem key={link.href} link={link}/>
                    ))}
                    <SidebarLogoutButton />
                </ul>
            </nav>
        </>
    )
};

export default SidebarNavigation;
