'use client';
import React, { useRef } from 'react';
import TrackImage from "@/entities/track/ui/TrackImage";
import {TrackInfo} from "@/entities/track/ui/TrackInfo";
import TrackProgress from "@/features/player/ui/TrackProgress";
import SoundToggleButton from "@/features/player/ui/SoundToggleButton";
import PlayerControls from "@/features/player/ui/PlayerControls";
import { useSelector} from "react-redux";
import {RootState} from "@/store/store";
import usePlayerControls from "@/features/player/lib/hooks/usePlayerControls";
import useAudioEvents from "@/features/player/lib/hooks/useAudioEvents";
import useAudioSyncTrackControl from "@/features/player/lib/hooks/useAudioSyncTrackControl";
import style from "./Player.module.scss";

const Player = () => {
    // useRef создает объект, который сохраняется между рендерами.
    // audioRef.current будет содержать ссылку на DOM-элемент <audio>.
    // Это нужно, чтобы напрямую управлять воспроизведением (play, pause, менять src).
    const audioRef = useRef<HTMLAudioElement>(null);

    const {isPlaying, activeTrack, volume, duration, currentTime, isMuted} = useSelector((state: RootState) => state.player);
    const trackUrl = activeTrack?.attributes?.attachments[0]?.url;
    const {
        togglePlay,
        handleProgressChange,
        handleVolume,
        handleToggleMuted,
        handlePrevTrackSwitch,
        handleNextTrackSwitch
    } = usePlayerControls({audioRef});

    useAudioEvents(audioRef, trackUrl);

    useAudioSyncTrackControl(
        audioRef,
        isPlaying,
        activeTrack,
        volume,
        trackUrl
    );

    if(!activeTrack) return null;

    return (
        <div className={style.player}>
            <div className={style.playerContainerInner}>
                <div className={style.containerInfo}>
                    <TrackImage image={activeTrack?.attributes?.images?.main[0]?.url}/>
                    <TrackInfo
                        executor={activeTrack?.relationships?.artists?.data[0]?.type}
                        nameTrack={activeTrack.attributes.title}/>
                </div>

                <div className={style.containerControls}>
                    <TrackProgress
                        left={Math.ceil(currentTime)}
                        right={Math.ceil(duration)}
                        onChange={handleProgressChange}/>
                    <PlayerControls
                        key={trackUrl}
                        audioRef={audioRef}
                        togglePlay={togglePlay}
                        isPlaying={isPlaying}
                        trackUrl={trackUrl}
                        handlePrevTrackSwitch={handlePrevTrackSwitch}
                        handleNextTrackSwitch={handleNextTrackSwitch}/>
                </div>

                <div className={style.containerVolume}>
                    <SoundToggleButton
                        isMuted={isMuted}
                        handleToggleMuted={handleToggleMuted}/>
                    <TrackProgress
                        left={volume}
                        right={100}
                        onChange={handleVolume}/>
                </div>
            </div>
        </div>
    )
};

export default Player;
