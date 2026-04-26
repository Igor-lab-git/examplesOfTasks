import React from 'react'
import style from "./Sidebar.module.scss";
import LogoSidebar from "@/shared/ui/LogoSidebar/LogoSidebar";
import SidebarNavigation from "@/widgets/sidebar/ui/SidebarNavigation";

const Sidebar = () => {
    return (
        <aside className={style.aside}>
            <LogoSidebar />
            <SidebarNavigation />
        </aside>
    )
};

export default Sidebar;
