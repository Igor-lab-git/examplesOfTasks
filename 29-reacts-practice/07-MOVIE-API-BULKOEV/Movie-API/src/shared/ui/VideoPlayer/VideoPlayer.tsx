import {useGetTeaserAndTrailerByIdQuery} from "../../../app/store/moviesApi.ts";
// import ReactPlayer from 'react-player';
// import type { ReactPlayerProps } from 'react-player';


const VideoPlayer = ({ movieId }: { movieId: number }) => {
    const { data, error, isLoading } = useGetTeaserAndTrailerByIdQuery({ id: movieId });

    const videos = data?.items || [];
    const youtubeVideo = videos.find(v => v.site === 'YOUTUBE');

    console.log('Все видео:', videos);
    console.log('YouTube видео:', youtubeVideo);

    if (isLoading) return <div>⏳ Загрузка...</div>;
    if (error) return <div>❌ Ошибка</div>;
    if (!youtubeVideo) return <div>🎬 Нет трейлера</div>;
    // if (!youtubeTrailer) return <div>Трейлер не найден</div>;
    return (
        <div className="player-wrapper" style={{position: 'relative', paddingTop: '20'}}>
            <iframe
                src={`https://www.youtube.com/embed/${movieId}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '500',
                    height: '500',
                    border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;