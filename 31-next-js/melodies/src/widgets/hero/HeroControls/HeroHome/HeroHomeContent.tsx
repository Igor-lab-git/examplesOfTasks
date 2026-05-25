import React from 'react';
import HeroHomeTitle from "@/widgets/hero/HeroControls/HeroHome/HeroHomeTitle";
import HeroHomeSubtitle from "@/widgets/hero/HeroControls/HeroHome/HeroHomeSubtitle";
import HeroDiscoverLink from "@/widgets/hero/HeroControls/HeroHome/HeroDiscoverLink";
import HeroLinkCreatePlaylist from "@/widgets/hero/HeroControls/HeroHome/HeroLinkCreatePlaylist";
import style from "./HeroHome.module.scss";

const HeroHomeContent = () => {
    return (
        <div className={style.heroContainer}>
            <HeroHomeTitle />
            <HeroHomeSubtitle />
            <div className={style.heroContainerButtons}>
                <HeroDiscoverLink />
                <HeroLinkCreatePlaylist />
            </div>
        </div>
    )
};

export default HeroHomeContent;
