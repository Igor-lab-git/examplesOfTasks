export type TSlug = "weeklyTop" | "newRelease" | "trendingSongs" | "popularArtists" | "topAlbums" | "MoodPlaylist";

export interface IWidget {
    slug: TSlug;
    titleWidget: IWidgetTitle;
    apiParams: IApiParams
}

export interface IWidgetTitle  {
    firstTitle: string;
    lastTitle: string;
};

export interface IApiParams  {
    sortBy: string;
    pageSize: number;
    numberPage: number;
};

export interface IWidgetTitles  {
    WEEKLY_TOP_SONGS: IWidget;
    NEW_RELEASE_SONGS: IWidget;
    TRENDING_SONGS: IWidget;
    POPULAR_ARTISTS: IWidget;
    TOP_ALBUMS: IWidget;
    MOOD_PLAYLIST: IWidget;
};

const WIDGET_CONFIG: IWidgetTitles = {
    WEEKLY_TOP_SONGS: {
        slug: "weeklyTop",
        titleWidget : {
            firstTitle: "Weekly Top",
            lastTitle: "Songs",
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }
    },
    NEW_RELEASE_SONGS: {
        slug: "newRelease",
        titleWidget : {
            firstTitle: "New Release",
            lastTitle: "Songs",
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }

    },
    TRENDING_SONGS: {
        slug: "trendingSongs",
        titleWidget : {
            firstTitle: "Trending",
            lastTitle: "Songs"
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }
    },
    POPULAR_ARTISTS: {
        slug: "popularArtists",
        titleWidget : {
            firstTitle: "Popular",
            lastTitle: "Artists"
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }
    },
    TOP_ALBUMS: {
        slug: "topAlbums",
        titleWidget : {
            firstTitle: "Top",
            lastTitle: "Albums",
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }
    },
    MOOD_PLAYLIST: {
        slug: "MoodPlaylist",
        titleWidget : {
            firstTitle: "Mood",
            lastTitle: "Playlist",
        },
        apiParams: {
            sortBy: "likesCount",
            pageSize: 20,
            numberPage: 1,
        }
    },
} as const;

export default WIDGET_CONFIG;