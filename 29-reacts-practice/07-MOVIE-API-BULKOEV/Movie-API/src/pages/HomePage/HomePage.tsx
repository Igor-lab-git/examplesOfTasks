import Carousel from "./Carousel";
import style from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import {useHookContentQuery} from "../../app/store/ui/hooks.ts";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage.tsx";

const HomePage = () => {

const {
    isLoading,
    isError,
    getTopPopularFilms,
    getTopBestFilms,
    getContentFilms,
    getContentSeries,
    getContentCartoon,} = useHookContentQuery();

const carouselFormatedContent = [
  {
    title: "Популярные фильмы",
    url: "/top-100",
    data: getTopPopularFilms.data?.items,
  },
  {
    title: "Лучшие фильмы",
    url: "/top-250",
    data: getTopBestFilms.data?.items,
  },
  {
    title: "Фильмы",
    url: "/movies",
    data: getContentFilms.data?.items,
  },
  {
    title: "Сериалы",
    url: "/series",
    data: getContentSeries.data?.items,
  },
  {
    title: "Мультфильмы",
    url: "/cartoon",
    data: getContentCartoon.data?.items,
  },
];

if(isLoading) return <h2>Загрузка данных с сервера...</h2>;

if(isError) return <ErrorMessage />;

  return (
    <div>
        <h1>HomePage</h1>

        { carouselFormatedContent && carouselFormatedContent.map((carouseContent, index) => (
            <div key={index}>
                <Link to={carouseContent.url}>
                    {carouseContent.title}
                </Link>
                <Carousel>
                    <ul>
                    </ul>
                    {carouseContent.data && carouseContent.data.map((movie) => (
                        <li key={movie.kinopoiskId}>
                            <Link to={`/movie/${movie.kinopoiskId}`}>
                                    {<img className={style.poster} src={movie.posterUrlPreview} alt=""/>}
                            </Link>
                        </li>
                    ))}
                </Carousel>
            </div>
        ))}

    </div>
  )
};

export default HomePage
