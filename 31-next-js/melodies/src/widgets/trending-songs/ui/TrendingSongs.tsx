"use client"
import {WidgetsTitle} from "@/shared";
import WIDGET_TITLES from "@/shared/costants/title-widget";
import {useGetTrendingSongsQuery} from "@/app/store/redusers/melodiesStoreApi";
import {playTrack} from "@/app/store/redusers/playerSlice";
import {useDispatch} from "react-redux";

const TrendingSongs =  () => {
     const dispatch = useDispatch();

    const { data, isLoading } = useGetTrendingSongsQuery();


    console.log(data);

    if (isLoading) return <h3>Loading...</h3>

    return (
        <div>
            <WidgetsTitle
                firstTitle={WIDGET_TITLES.TRENDING_SONGS.firstTitle}
                lastTitle={WIDGET_TITLES.TRENDING_SONGS.lastTitle}/>
            <ul>
                {data && data.data.map((song) => (
                    <li style={{color: "red", background: "red"}} key={song.id}>
                        <button onClick={() => dispatch(playTrack(song))}>
                            <img style={{width: "60px"}} src={song?.attributes?.images?.main[1]?.url} alt=""/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TrendingSongs;
