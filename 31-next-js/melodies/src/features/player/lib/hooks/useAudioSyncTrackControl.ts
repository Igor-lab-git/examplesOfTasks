import React, {useEffect} from "react";
import {ITrack} from "@/store/types/tracksPublic";

const useAudioSyncTrackControl = (
    audioRef: React.RefObject<HTMLAudioElement | null>,
    isPlaying: boolean,
    activeTrack: null | ITrack,
    volume: number,
    trackUrl?: string,
    ) => {
    // Этот эффект запускается каждый раз, когда меняется переменная `isPlaying`.
    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying && activeTrack) {
            // Если isPlaying = true и трек выбран, вызываем метод .play()
            audioRef.current.play();
        } else {
            // В противном случае ставим на паузу.
            audioRef.current.pause();
        };
    }, [isPlaying]); // ← когда isPlaying меняется, запускаем или останавливаем аудио ← срабатывает при каждом изменении isPlaying

    // 🔥 ОБНОВЛЯЕМ SRC АУДИО ПРИ СМЕНЕ ТРЕКА
    useEffect(() => {
        if (!audioRef.current || !trackUrl) return;

        const wasPlayingTrack = isPlaying; // Запоминаем, играла ли музыка ДО того, как мы начали менять трек.

        audioRef.current.src = trackUrl;  // Меняем источник аудио на новый URL. src
        audioRef.current.load(); // .load() перезагружает аудио-элемент с новым источником.

        if (wasPlayingTrack) {
            audioRef.current.play();  // Если музыка играла до смены трека, запускаем новый трек.
        };
    }, [trackUrl]); // ← зависит от URL трека


    // Синхронизация громкости (Redux → аудио)
    useEffect(() => {
        // Устанавливаем громкость HTML-элемента.
        // `volume` в Redux хранится в диапазоне 0-100, а HTML5 Audio использует 0-1.
        // Поэтому мы делим на 200? Это странно. Должно быть `/ 100`.
        if (!audioRef.current) return;
        audioRef.current.volume = volume / 100;
    }, [volume]);

};

export default useAudioSyncTrackControl;