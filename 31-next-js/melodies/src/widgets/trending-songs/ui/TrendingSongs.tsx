"use client";
import {WidgetsTitle} from "@/shared";
import {useGetTrendingSongsQuery} from "@/store/redusers/melodiesStoreApi";
import React from "react";
import {Track} from "@/entities/track";
import "../../../styles/globals.scss";
import style from "./TrendingSongs.module.scss";
import {CategoryWithLink} from "@/features/category-with-link";
import WIDGET_CONFIG from "@/shared/costants/widgets-config";

const TrendingSongs = () => {

    const {data, isLoading } = useGetTrendingSongsQuery({pageNumber: 1, pageSize: 10});
    const tracksQueue = data?.data || [];

    console.log(data, "TrendingSongs");

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div>
            <WidgetsTitle
                firstTitle={WIDGET_CONFIG.TRENDING_SONGS.titleWidget.firstTitle}
                lastTitle={WIDGET_CONFIG.TRENDING_SONGS.titleWidget.lastTitle}/>
            <ul className={`list-reset ${style.listTrendingSongs}`}>
                {data && data?.data.map((song, index) => (
                    <Track
                        key={song.id}
                        track={song}
                        queue={tracksQueue}
                        trackNumber={index + 1}
                        currentIndex={index}/>
                ))}
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