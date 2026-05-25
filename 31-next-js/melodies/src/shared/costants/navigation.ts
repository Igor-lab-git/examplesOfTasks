import homeIcon from "../assets/icons/navigation-icon/home-icon.svg";
import discoverIcon from "../assets/icons/navigation-icon/discover-icon.svg";
import albumsIcon from "../assets/icons/navigation-icon/albums-icon.svg";
import artistsIcon from "../assets/icons/navigation-icon/artists-icon.svg";
import recentlyAddedIcon from "../assets/icons/navigation-icon/recently-added-icon.svg";
import mostPlayedAddedIcon from "../assets/icons/navigation-icon/most-played-icon.svg";
import yourFavoritesIcon from "../assets/icons/navigation-icon/your-favorites-icon.svg";
import yourPlaylistIcon from "../assets/icons/navigation-icon/your-playlist-icon.svg";
import addPlaylistIcon from "../assets/icons/navigation-icon/add-playlist-icon.svg";
import logoutIcon from "../assets/icons/navigation-icon/logout-icon.svg";

export interface IHeaderLinks {
    href: string;
    label: string;
    title?: string;
    question?: string;
};

export interface IAuthConfig {
    buttonName: string;
    title: string;
    question: string;
    questionLink: string;
};


export interface  INavLink extends IHeaderLinks {
    icon?: string;
};

export type TNavigationLinks = Record<string, INavLink>;
export type TAuthPageConfig = Record<"login" | "signUp", IAuthConfig>;

export const LOGOUT_LINK: INavLink = {
        href: '/logout',
        label: 'Logout',
        icon: logoutIcon,
} as const;

export const NAVIGATION_LINKS_SIDEBAR: TNavigationLinks = {
    home: {
        href: '/',
        label: 'Home',
        icon: homeIcon,
    },
    discover: {
        href: '/discover',
        label: 'discover',
        icon: discoverIcon,
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
    collection: {
        href: '/collection',
        label: 'Your Collection',
        icon: yourPlaylistIcon,
    },
    addPlaylist: {
        href: '/addPlaylist',
        label: 'Add yourPlaylistLink',
        icon: addPlaylistIcon,
    },
} as const;

export const COLLECTION_LIST_NAVIGATION: TNavigationLinks = {
    yourFavorites: {
        href: '/yourFavorites',
        label: 'Your favorites',
        icon: yourFavoritesIcon,
    },
    yourPlaylists: {
        href: '/collection/yourPlaylist',
        label: 'Your yourPlaylistLink',
        icon: yourPlaylistIcon,
    },
    createPlaylist: {
        href: '/collection/createPlaylist',
        label: 'New Playlist',
        icon: yourPlaylistIcon,
    },
} as const;

export const NAVIGATION_HEADER_LINKS: TNavigationLinks = {
    aboutUs: {
        href: '/aboutUs',
        label: 'About Us',
    },
    contact: {
        href: '/contact',
        label: 'Contact',
    },
    premuim: {
        href: '/premuim',
        label: 'Premuim',
    },
} as const;

export const NAVIGATION_AUTH_LINKS: TNavigationLinks = {
    login: {
        href: '/login',
        label: 'Log in',
        title: "Login To Continue",
        question: "Don't have an account? Sign Up Here",
    },
    signUp: {
        href: '/signUp',
        label: 'Sign Up',
        title: "Create An Account",
        question: "Do have an account? Login Up Here",
    },
} as const;

export const AUTH_PAGES_CONFIG: TAuthPageConfig = {
    login: {
        buttonName: 'Login',
        title: "Login To Continue",
        question: "Don't have an account? Sign Up Here",
        questionLink: "/signUp",
    },
    signUp: {
        buttonName: 'Create An Account',
        title: "Create An Account",
        question: "Do have an account? Login Up Here",
        questionLink: "/login",
    },
} as const;
