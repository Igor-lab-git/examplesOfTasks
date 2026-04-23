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
import {pauseTrack, playTrack, setCurrentTimes, setDuration, setToggleMute, setVolume} from "@/app/store/redusers/playerSlice";


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
    const track = activeTrack;
    const trackUrl = activeTrack?.attributes?.attachments[0]?.url;


    // 🔥 ОБНОВЛЯЕМ SRC АУДИО ПРИ СМЕНЕ ТРЕКА
    useEffect(() => {
        if (!audioRef.current || !trackUrl) return;

        const wasPlaying = isPlaying;

        audioRef.current.src = trackUrl;
        audioRef.current.load();

        if (wasPlaying) {
            audioRef.current.play();
        }
    }, [trackUrl]); // ← зависит от URL трека


    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]); // ← когда isPlaying меняется, запускаем или останавливаем аудио

    // Синхронизация громкости (Redux → аудио)
    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = volume / 100;
    }, [volume]);

    // Обновление currentTime из аудио
    useEffect(() => {
        if(!audioRef.current) return
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => {
            console.log('Длительность трека:', audio.duration);
            dispatch(setDuration(audio.duration)); // сохраняем в Redux
        };

        const updateTime = () => {
            dispatch(setCurrentTimes(audio.currentTime));
        };

        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', updateTime);
        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }

    }, [dispatch, trackUrl]);

    const play = () => {
        if (track && !activeTrack) {
            dispatch(playTrack(track));
        } else if (track && !isPlaying) {
            // Если трек уже активен, но на паузе
            dispatch(playTrack(track));
        }
    };

    const stop = () => {
        dispatch(pauseTrack());
    };

    const togglePlay = () => {
        if(isPlaying) {
            stop();
        } else {
            play();
        }
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
                    <TrackImage image={trackMock.image}/>
                    <TrackInfo executor={trackMock.title} nameTrack={trackMock.originalName}/>
                </div>

                <div className={style.containerControls}>
                    <TrackProgress left={Math.ceil(currentTime)} right={Math.ceil(duration)} onChange={handleProgressChange}/>
                    <PlayerControls key={trackUrl} audioRef={audioRef} togglePlay={togglePlay} isPlaying={isPlaying} trackUrl={trackUrl}/>
                </div>

                <div className={style.containerVolume}>
                    <TrackVolumeButton isMuted={isMuted} handleToggleMuted={handleToggleMuted}/>
                    <TrackProgress left={volume} right={100} onChange={handleVolume}/>
                </div>
            </div>
        </div>
    )
};

export default Player;
