import type { IMOVIE_CONTENT_LIST, IMOVIE_GENRES_LIST, IMOVIE_TOP_RANKINGS_LIST } from "../../typse/types";
import top100Icon from '../../assets/icons/nav-bar/category-top-muvies-navBar/top_100.svg';
import top250Icon from '../../assets/icons/nav-bar/category-top-muvies-navBar/top_250.svg';
import bloDVampireIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/blood-vampire.svg';
import comicsIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/comics.svg';
import familyIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/family.svg';
import romanceIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/romance.svg';
import zombiesIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/zombies.svg';
import catostropheIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/catostrophe.svg';
import popular_TV_seriesIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/popular_TV_series.svg';
import categories_moviesIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/categories_movies.svg';
import categories_cartoonsIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/categories_cartoons.svg';
import categories_tv_seriesIcon from '../../assets/icons/nav-bar/category-top-muvies-navBar/categories_tv_series.svg';
import generateUniqueID from "./helpers.ts";


export const ICONS = {
  top100: top100Icon,
  top250: top250Icon,
  bloDVampire: bloDVampireIcon,
  comics: comicsIcon,
  family: familyIcon,
  romance: romanceIcon,
  zombies: zombiesIcon,
  catostropheIcon: catostropheIcon,
  popular_seriesIconIcon: popular_TV_seriesIcon,
} as const;

export const ICONS_Categories = {
    categoriesMovies: categories_moviesIcon,
    categoriesCartoons: categories_cartoonsIcon,
    categoriesTvSeries: categories_tv_seriesIcon,
  } as const;

export const MOVIE_TOP_RANKINGS_LIST: IMOVIE_TOP_RANKINGS_LIST[] = [
    {
        id: generateUniqueID(),
        title: "ТОП 100 популярных фильмов",
        icon: ICONS.top100,
        nameIcon: "ТОП 100",
        path: "/top-100",
        type: "TOP_POPULAR_MOVIES",
    },
    {
        id: generateUniqueID(),
        title: "ТОП 250 популярных фильмов",
        icon: ICONS.top250,
        nameIcon: "ТОП 250",
        path: "/top-250",
        type: "TOP_250_MOVIES",
    },
];

export const MOVIE_GENRES_LIST: IMOVIE_GENRES_LIST[] = [
    {
        id: generateUniqueID(),
        title: "вампиры",
        icon: ICONS.bloDVampire,
        nameIcon: "вампиры",
        path: "/category/vampire",
        type: "VAMPIRE_THEME",
    },
    {
        id: generateUniqueID(),
        title: "комиксы",
        icon: ICONS.comics,
        nameIcon: "комиксы",
        path: "/category/comics",
        type: "COMICS_THEME",
    },
    {
        id: generateUniqueID(),
        title: "семейные",
        icon: ICONS.family,
        nameIcon: "семейные",
        path: "/category/family",
        type: "FAMILY",
    },
    {
        id: generateUniqueID(),
        title: "романтика",
        icon: ICONS.romance,
        nameIcon: "романтика",
        path: "/category/love",
        type: "LOVE_THEME",
    },
    {
        id: generateUniqueID(),
        title: "зомби",
        icon: ICONS.zombies,
        nameIcon: "Зомби",
        path: "/category/zombie",
        type: "ZOMBIE_THEME",
    },
    {
        id: generateUniqueID(),
        title: "катастрофы",
        icon: ICONS.catostropheIcon,
        nameIcon: "катастрофы",
        path: "/category/catastrophe",
        type: "CATASTROPHE_THEME",
    },
    {
        id: generateUniqueID(),
        title: "популярные сериалы",
        icon: ICONS.popular_seriesIconIcon,
        nameIcon: "сериалы",
        path: "/category/popular_series",
        type: "POPULAR_SERIES",
    },
]

export const MOVIE_CONTENT_LIST: IMOVIE_CONTENT_LIST[] = [
    {
        id: generateUniqueID(),
        title: "Фильмы",
        icon: ICONS_Categories.categoriesMovies,
        nameIcon: "фильмы",
        path: "/movies",
        type: "FILM",
        genre: "1",
    },
    {
        id: generateUniqueID(),
        title: "Сериалы",
        icon: ICONS_Categories.categoriesTvSeries,
        nameIcon: "сериалы",
        path: "/series",
        type: "TV_SERIES",
        genre: "1",
    },
    {
        id: generateUniqueID(),
        title: "Мыльтфильмы",
        icon: ICONS_Categories.categoriesCartoons,
        nameIcon: "мыльтфильмы",
        path: "/cartoon",
        type: "FILM",
        genre: "18",
    },
];