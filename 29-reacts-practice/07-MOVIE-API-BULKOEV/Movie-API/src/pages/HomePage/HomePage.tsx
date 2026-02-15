import Carousel from "./Carousel";
import style from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage.tsx";
import {useHookContentQuery} from "../../features";
import {type JSX} from "react";

const HomePage = (): JSX.Element => {

const {
    isLoading,
    isError,
    getTopPopularFilms,
    getTopBestFilms,
    getContentFilms,
    getContentSeries,
    getContentCartoon,} = useHookContentQuery();
    // const sequelsPrequels = useGetSequelsPrequelsQuery({id: 839818});

    console.log(getTopPopularFilms.data)
    console.log(getTopBestFilms.data)
    console.log(getContentFilms.data)
    console.log(getContentSeries.data)
    console.log(getContentCartoon.data)
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
