import type { IMOVIE_LIST, ITOP_LIST } from "../../typse/types";
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

export const TOP_LIST: ITOP_LIST[] = [
    {
        id: 1,
        title: "ТОП 100 популярных фильмов",
        icon: ICONS.top100,
        nameIcon: "ТОП 100",
        url: "/top100",
        type: "top100",
    },
    {
        id: 2,
        title: "ТОП 250 популярных фильмов",
        icon: ICONS.top250,
        nameIcon: "ТОП 250",
        url: "/top100",
        type: "top250",
    },
    {
        id: 3,
        title: "Вампиры",
        icon: ICONS.bloDVampire,
        nameIcon: "вампиры",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 4,
        title: "Комиксы",
        icon: ICONS.comics,
        nameIcon: "комиксы",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 5,
        title: "Семейные",
        icon: ICONS.family,
        nameIcon: "семейные",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 6,
        title: "Романтика",
        icon: ICONS.romance,
        nameIcon: "романтика",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 7,
        title: "Зомби",
        icon: ICONS.zombies,
        nameIcon: "Зомби",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 8,
        title: "Катастрофы",
        icon: ICONS.catostropheIcon,
        nameIcon: "катастрофы",
        url: "/top100",
        type: "catigory",
    },
    {
        id: 9,
        title: "Популярные сериалы",
        icon: ICONS.popular_seriesIconIcon,
        nameIcon: "сериалы",
        url: "",
        type: "catigory",
    },
];

export const MOVIE_LIST: IMOVIE_LIST[] = [
    {
        id: 1,
        title: "Фильмы",
        icon: ICONS_Categories.categoriesMovies,
        nameIcon: "фильмы",
        url: "",
        type: "movie",
    },
    {
        id: 2,
        title: "Сериалы",
        icon: ICONS_Categories.categoriesTvSeries,
        nameIcon: "сериалы",
        url: "",
        type: "series",
    },
    {
        id: 3,
        title: "Мыльтфильмы",
        icon: ICONS_Categories.categoriesCartoons,
        nameIcon: "мыльтфильмы",
        url: "",
        type: "cartoon",
    },
];