'use client';
import React from 'react';
import TrackImage from "@/shared/ui/track/TrackImage";
import {TrackInfo} from "@/shared/ui/track/TrackInfo";
import TrackProgress from "@/shared/ui/track/TrackProgress";
import TrackVolumeButton from "@/shared/ui/track/TrackVolumeButton";
import PlayerControls from "@/features/player/ui/PlayerControls";
import style from "./Player.module.scss";

const track = {
    image: "../../../../public/images/poster.png",
    title: "banana6boom - Frontend Жив_part-2",
    originalName: "compress (1).mp3",
};

const Player = () => {
    return (
        <div className={style.player}>
            <div className={style.playerContainerInner}>
                <div className={style.containerInfo}>
                    <TrackImage image={track.image}/>
                    <TrackInfo executor={track.title} nameTrack={track.originalName}/>
                </div>

                <div className={style.containerControls}>
                    <TrackProgress left={0} right={100} onChange={() => ({})}/>
                    <PlayerControls />
                </div>

                <div className={style.containerVolume}>
                    <TrackVolumeButton />
                    <TrackProgress left={0} right={100} onChange={() => ({})}/>
                </div>
            </div>
        </div>
    )
};

export default Player;
