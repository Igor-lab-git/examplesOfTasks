import {useGetTeaserAndTrailerByIdQuery} from "../../../app/store/moviesApi.ts";

interface IVideoPlayer {
    movieId?: number | undefined;
};

const VideoPlayer = ({ movieId }: IVideoPlayer) => {
    const { data, error, isLoading } = useGetTeaserAndTrailerByIdQuery({ id: movieId });

    const videos = data?.items || [];
    // const youtubeVideo = videos.find(v => v.site === 'YOUTUBE');
    const trailer = videos[0];

    if (isLoading) return <div>⏳ Загрузка...</div>;
    if (error) return <div>❌ Ошибка</div>;
    if (videos.length === 0) return <div>🎬 Нет трейлера</div>;

    return (
        <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <video
                src={trailer.url}
                controls
                style={{width: '100%', height: 'auto', display: 'block'}}
                preload="metadata">
                <source src={trailer.url} type="video/mp4"/>
                Ваш браузер не поддерживает видео тег.
            </video>
            {trailer.name && (
                <div style={{
                    padding: '8px',
                    textAlign: 'center',
                    background: 'rgba(0,0,0,0.05)'
                }}>
                    {trailer.name}
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;