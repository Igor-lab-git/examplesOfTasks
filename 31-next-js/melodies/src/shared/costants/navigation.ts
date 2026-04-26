import homeIcon from "../assets/icons/navigation-icon/home-icon.svg";
import albumsIcon from "../assets/icons/navigation-icon/albums-icon.svg";
import artistsIcon from "../assets/icons/navigation-icon/artists-icon.svg";
import recentlyAddedIcon from "../assets/icons/navigation-icon/recently-added-icon.svg";
import mostPlayedAddedIcon from "../assets/icons/navigation-icon/most-played-icon.svg";
import yourFavoritesIcon from "../assets/icons/navigation-icon/your-favorites-icon.svg";
import yourPlaylistIcon from "../assets/icons/navigation-icon/your-playlist-icon.svg";
import addPlaylistIcon from "../assets/icons/navigation-icon/add-playlist-icon.svg";
import logoutIcon from "../assets/icons/navigation-icon/logout-icon.svg";

export interface  INavLink {
    href: string;
    label: string;
    icon: string;
};

export type INavigationLinks = Record<string, INavLink>;

const NAVIGATION_LINKS_SIDEBAR: INavigationLinks = {
    home: {
        href: '/',
        label: 'Home',
        icon: homeIcon,
    },
    albums: {
        href: '/albums',
        label: 'Albums',
        icon: albumsIcon,
    },
    artists: {
        href: '/artists',
        label: 'Artists',
        icon: artistsIcon,
    },
    recentlyAdded: {
        href: '/recentlyAdded',
        label: 'Recently Added',
        icon: recentlyAddedIcon,
    },
    mostPlayed: {
        href: '/mostPlayed',
        label: 'Most played',
        icon: mostPlayedAddedIcon,
    },
    yourFavorites: {
        href: '/yourFavorites',
        label: 'Your favorites',
        icon: yourFavoritesIcon,
    },
    yourPlaylist: {
        href: '/yourPlaylist',
        label: 'Your playlist',
        icon: yourPlaylistIcon,
    },
    addPlaylist: {
        href: '/addPlaylist',
        label: 'Add playlist',
        icon: addPlaylistIcon,
    },
    logout: {
        href: '/logout',
        label: 'Logout',
        icon: logoutIcon,
    }
} as const;

export default NAVIGATION_LINKS_SIDEBAR;