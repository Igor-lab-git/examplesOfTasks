import {
    nextTrackSwitch,
    playTrack,
    prevTrackSwitch,
    setCurrentTimes,
    setToggleMute,
    setVolume,
    togglePlaying
} from "@/store/redusers/playerSlice";
import React, {RefObject} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";

interface IUsePlayerControlsProps {
    audioRef: RefObject<HTMLAudioElement | null>;
};

const usePlayerControls = ({ audioRef }: IUsePlayerControlsProps) => {
    const dispatch = useDispatch();
    const {isPlaying, activeTrack, isMuted} = useSelector((state: RootState) => state.player);
    // Главная функция для кнопки Play/Pause.
    const togglePlay = () => {
        if(isPlaying) {
            dispatch(togglePlaying());
        } else if (activeTrack && !isPlaying) {
            dispatch(playTrack(activeTrack));
        };
    };

    // Вызывается при изменении ползунка прогресса (перемотка).
    const handleProgressChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        if (audioRef.current) {
            // Обновляем время в самом аудио-элементе.
            audioRef.current.currentTime = newTime;
        };
        // Обновляем время в Redux
        dispatch(setCurrentTimes(Number(newTime)));
    };

    // Вызывается при изменении ползунка громкости.
    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Сохраняем новое значение громкости в Redux.
        dispatch(setVolume(Number(e.target.value)));
    };

    // Вызывается при клике по кнопке mute/unmute.
    const handleToggleMuted = () => {
        if(!audioRef.current) return;
        // Меняем состояние `isMuted` в Redux.
        dispatch(setToggleMute());
        // Применяем состояние `muted` к аудио-элементу.
        audioRef.current.muted = !isMuted;
    };
    const handlePrevTrackSwitch = () => {
        if(!audioRef.current) return;
        dispatch(prevTrackSwitch());
    };

    const handleNextTrackSwitch = () => {
        if(!audioRef.current) return;
        dispatch(nextTrackSwitch())
    }

    return {
        togglePlay,
        handleProgressChange,
        handleVolume,
        handleToggleMuted,
        handlePrevTrackSwitch,
        handleNextTrackSwitch
    };
};

export default usePlayerControls;