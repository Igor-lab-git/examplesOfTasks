"use client"
import {WidgetsTitle} from "@/shared";
import WIDGET_TITLES from "@/shared/costants/title-widget";
import {useGetTrendingSongsQuery} from "@/app/store/redusers/melodiesStoreApi";

const TrendingSongs =  () => {

    const { data, isLoading } = useGetTrendingSongsQuery()

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
                        <audio controls>
                            <source src={song.attributes.attachments[0].url} type="audio/mpeg"/>
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TrendingSongs;
