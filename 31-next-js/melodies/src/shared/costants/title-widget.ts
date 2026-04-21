interface IWidgetTitle  {
    firstTitle: string;
    lastTitle: string;
};

interface IWidgetTitles  {
    WEEKLY_TOP_SONGS: IWidgetTitle;
    NEW_RELEASE_SONGS: IWidgetTitle;
    TRENDING_SONGS: IWidgetTitle;
    POPULAR_ARTISTS: IWidgetTitle;
    TOP_ALBUMS: IWidgetTitle;
    MOOD_PLAYLIST: IWidgetTitle;
}

const WIDGET_TITLES: IWidgetTitles = {
    WEEKLY_TOP_SONGS: {
        firstTitle: "Weekly Top",
        lastTitle: "Songs"
    },
    NEW_RELEASE_SONGS: {
        firstTitle: "New Release",
        lastTitle: "Songs"
    },
    TRENDING_SONGS: {
        firstTitle: "Trending",
        lastTitle: "Songs"
    },
    POPULAR_ARTISTS: {
        firstTitle: "Popular",
        lastTitle: "Artists"
    },
    TOP_ALBUMS: {
        firstTitle: "Top",
        lastTitle: "Albums"
    },
    MOOD_PLAYLIST: {
        firstTitle: "Mood",
        lastTitle: "Playlist"
    },
};

export default WIDGET_TITLES;