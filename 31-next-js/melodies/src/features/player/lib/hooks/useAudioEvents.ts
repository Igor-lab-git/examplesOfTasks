import React, {useEffect} from "react";
import {setCurrentTimes, setDuration} from "@/store/redusers/playerSlice";
import {useDispatch} from "react-redux";

const useAudioEvents = (audioRef: React.RefObject<HTMLAudioElement | null>, trackUrl?: string) => {
   const dispatch = useDispatch();
    // Запускается при монтировании компонента или изменении `trackUrl` или `dispatch`.
    useEffect(() => {
        if(!audioRef.current) return
        const audio = audioRef.current;
        if (!audio) return;

        // Эта функция будет вызвана, когда браузер загрузит метаданные трека (длительность и т.д.)
        const setDurationTime = () => {
            // Отправляем экшен в Redux, чтобы сохранить общую длительность трека.
            dispatch(setDuration(audio.duration)); // сохраняем в Redux
        };

        // Эта функция будет вызываться очень часто (каждые ~250мс) во время воспроизведения.
        const setCurrentTime = () => {
            // Отправляем экшен в Redux, чтобы сохранить текущее время воспроизведения.
            dispatch(setCurrentTimes(audio.currentTime));
        };

        // Навешиваем обработчики событий на аудио-элемент.
        audio.addEventListener('loadedmetadata', setDurationTime);
        audio.addEventListener('timeupdate', setCurrentTime);

        // Функция очистки: она выполнится, когда компонент будет удален или эффект запустится заново.
        return () => {
            audio.removeEventListener('timeupdate', setCurrentTime);
            audio.removeEventListener('loadedmetadata', setDurationTime);
        };

    }, [dispatch, trackUrl, audioRef]);

};

export default useAudioEvents;