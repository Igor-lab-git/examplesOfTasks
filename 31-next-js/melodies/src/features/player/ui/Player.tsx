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
import {pauseTrack, playTrack, setProgress} from "@/app/store/redusers/playerSlice";
import {setVolume} from "../../../app/store/redusers/playerSlice";


const trackMock = {
    image: "../../../../public/images/poster.png",
    title: "banana6boom - Frontend Жив_part-2",
    originalName: "compress (1).mp3",
};

const Player = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useDispatch();

    const { data } = useGetTrendingSongsQuery();
    console.log(data);
    const track = data?.data[0].attributes.attachments[0].url;
    const {isPlaying, active, volume, duration} = useSelector((state: RootState) => state.player);


    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]); // ← когда isPlaying меняется, запускаем или останавливаем аудио

    // Обновление currentTime из аудио
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            dispatch(setProgress(audio.currentTime));
        };

        audio.addEventListener('timeupdate', updateTime);
        return () => audio.removeEventListener('timeupdate', updateTime);
    }, [dispatch]);

    const play = () => {
        if (track && !active) {
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
        dispatch(setProgress(Number(newTime)));
    };

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setVolume(Number(e.target.value)));
    };

    return (
        <div className={style.player}>
            <div className={style.playerContainerInner}>
                <div className={style.containerInfo}>
                    <TrackImage image={trackMock.image}/>
                    <TrackInfo executor={trackMock.title} nameTrack={trackMock.originalName}/>
                </div>

                <div className={style.containerControls}>
                    <TrackProgress left={duration} right={100} onChange={handleProgressChange}/>
                    <PlayerControls audioRef={audioRef} togglePlay={togglePlay} isPlaying={isPlaying} track={track}/>
                </div>

                <div className={style.containerVolume}>
                    <TrackVolumeButton />
                    <TrackProgress left={volume} right={100} onChange={handleVolume}/>
                </div>
            </div>
        </div>
    )
};

export default Player;
