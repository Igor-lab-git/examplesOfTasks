'use client';
import React, {useEffect, useRef} from 'react';
import TrackImage from "@/shared/ui/track/TrackImage";
import {TrackInfo} from "@/shared/ui/track/TrackInfo";
import TrackProgress from "@/shared/ui/track/TrackProgress";
import TrackVolumeButton from "@/shared/ui/track/TrackVolumeButton";
import PlayerControls from "@/features/player/ui/PlayerControls";
import style from "./Player.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useGetTrendingSongsQuery} from "@/app/store/redusers/melodiesStoreApi";
import {RootState} from "@/app/store/store";
import {togglePlaying, playTrack, setCurrentTimes, setDuration, setToggleMute, setVolume} from "@/app/store/redusers/playerSlice";


const trackMock = {
    image: "../../../../public/images/poster.png",
    title: "banana6boom - Frontend Жив_part-2",
    originalName: "compress (1).mp3",
};

const Player = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useDispatch();

    const { data, isLoading } = useGetTrendingSongsQuery();
    console.log(data);
    const {isPlaying, activeTrack, volume, duration, currentTime, isMuted} = useSelector((state: RootState) => state.player);
    const trackUrl = activeTrack?.attributes?.attachments[0]?.url;

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying && activeTrack) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]); // ← когда isPlaying меняется, запускаем или останавливаем аудио ← срабатывает при каждом изменении isPlaying

    // 🔥 ОБНОВЛЯЕМ SRC АУДИО ПРИ СМЕНЕ ТРЕКА
    useEffect(() => {
        if (!audioRef.current || !trackUrl) return;

        const wasPlaying = isPlaying; // запоминаем, играло ли до смены трека

        audioRef.current.src = trackUrl; // меняем src
        audioRef.current.load(); // загружаем новый трек

        if (wasPlaying) {
            audioRef.current.play();  // если играло — продолжаем играть новый
        }
    }, [trackUrl]); // ← зависит от URL трека


    // Синхронизация громкости (Redux → аудио)
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = volume / 200;
    }, [volume]);

    // Обновление currentTime из аудио
    useEffect(() => {
        if(!audioRef.current) return
        const audio = audioRef.current;
        if (!audio) return;

        const setDurationTime = () => {
            dispatch(setDuration(audio.duration)); // сохраняем в Redux
        };

        const setCurrentTime = () => {
            dispatch(setCurrentTimes(audio.currentTime));
        };

        audio.addEventListener('loadedmetadata', setDurationTime);
        audio.addEventListener('timeupdate', setCurrentTime);
        return () => {
            audio.removeEventListener('timeupdate', setCurrentTime);
            audio.removeEventListener('loadedmetadata', setDurationTime);
        };

    }, [dispatch, trackUrl]);

    const play = () => {
        if (activeTrack && !isPlaying) {
            dispatch(playTrack(activeTrack)); // просто говорим "играть этот трек"
        };
    };
    console.log(duration)
    const stop = () => {
        dispatch(togglePlaying());
    };

    const togglePlay = () => {
        if(isPlaying) {
            stop();
        } else {
            play();
        };
    };

    const handleProgressChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
        dispatch(setCurrentTimes(Number(newTime)));
    };

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setVolume(Number(e.target.value)));
    };

    const handleToggleMuted = () => {
        if(!audioRef.current) return;
        dispatch(setToggleMute());
        audioRef.current.muted = !isMuted;
    };

    if (isLoading || !data?.data?.[0]) {
        return <div className={style.player}>Загрузка трека...</div>;
    };

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
                        trackUrl={trackUrl}/>
                </div>

                <div className={style.containerVolume}>
                    <TrackVolumeButton
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
