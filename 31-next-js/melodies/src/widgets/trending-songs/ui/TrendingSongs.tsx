"use client";
import {WidgetsTitle} from "@/shared";
import {useGetTrendingSongsQuery} from "@/store/redusers/melodiesStoreApi";
import React, {useRef, useState} from "react";
import { Track } from "@/entities/track";
import {CategoryWithLink} from "@/features/category-with-link";
import WIDGET_CONFIG from "@/shared/costants/widgets-config";
import "../../../styles/globals.scss";
import style from "./TrendingSongs.module.scss";
import {ReactionButtonLike} from "@/features/reaction-button-like";
import {TrackContextMenu} from "@/features/track-context-menu";
import {useLockBodyScroll} from "@/widgets/trending-songs/lib/useLockBodyScroll";

interface ICoordinatesButtonMenu {
    x: number;
    y: number;
    isOpenMenu: boolean;
    trackId: string | null;
}

const TrendingSongs = () => {
    const [menu, setMenu] = useState<ICoordinatesButtonMenu>({x: 0, y: 0, isOpenMenu: false, trackId: null});

    console.log()
    const {data, isLoading } = useGetTrendingSongsQuery({pageNumber: 1, pageSize: 10});
    const tracksQueue = data?.data || [];
    // useLockBodyScroll(menu.isOpenMenu)
    // console.log(data, "TrendingSongs");
    // console.log(menu, "TrendingSongs menu");
    useLockBodyScroll(menu.isOpenMenu)

    const handleOpenMenu = (x: number, y: number, trackId: string) => {
        setMenu(prev => ({...prev, x: x - 20, y: y - 270, isOpenMenu: true, trackId}));
    };

    const closeMenu = () => {
        setMenu(prev => ({...prev, x: 0, y: 0, isOpenMenu: false, trackId: null}));
    };

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div >
            <WidgetsTitle
                firstTitle={WIDGET_CONFIG.TRENDING_SONGS.titleWidget.firstTitle}
                lastTitle={WIDGET_CONFIG.TRENDING_SONGS.titleWidget.lastTitle}/>
            <ul className={`list-reset ${style.listTrendingSongs}`}>
                {data && data?.data.map((song, index) => {
                    const isLikes = song.attributes.currentUserReaction === 1;
                    return (
                        <Track
                            key={song.id}
                            track={song}
                            queue={tracksQueue}
                            trackNumber={index + 1}
                            currentIndex={index}
                            openMenu={handleOpenMenu}
                            likeButton={<ReactionButtonLike
                            trackId={song.id}
                            initialLike={isLikes}/>}
                            trackContextMenu={<TrackContextMenu
                                trackId={song.id}
                                menu={menu}
                                onClose={closeMenu}/>}/>
                    )
                })}
            </ul>
            <CategoryWithLink
                title={WIDGET_CONFIG.TRENDING_SONGS.titleWidget}
                link={`/${WIDGET_CONFIG.TRENDING_SONGS.slug}`}
                nameLink={"+ View All"}/>
        </div>
    )
};

export default TrendingSongs;
// CategoryWithLink