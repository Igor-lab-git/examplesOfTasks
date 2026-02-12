import { useGetFilteredContentQuery, useGetMoviesTopCollectionsQuery } from "../../app/store/ui/moviesApi";
import { MOVIE_CONTENT_LIST, MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants";
import { useSelector } from "react-redux";
import { selectFilters } from "../../app/store/ui/moviesSlice";
import Carousel from "./Carousel";
import style from "./HomePage.module.scss";
import { Link } from "react-router-dom";


const HomePage = () => {

// const {page} = useSelector((state: RootState) => state.movies.page)
 const { countries, order, year, page } = useSelector(selectFilters);

  const getTopPopularFilms = useGetMoviesTopCollectionsQuery({
    type: MOVIE_TOP_RANKINGS_LIST[0].type,
    page: page});

  const getTopBestFilms = useGetMoviesTopCollectionsQuery({type: MOVIE_TOP_RANKINGS_LIST[1].type, page: page});

  const getContentFilms = useGetFilteredContentQuery({
    type: MOVIE_CONTENT_LIST[0].type,
     page: page
    });

  const getContentSeries = useGetFilteredContentQuery({
    type: MOVIE_CONTENT_LIST[1].type,
     page: page,
     countries, 
     genres: 1, 
     order, 
     year
    });

  const getContentCartoon = useGetFilteredContentQuery({
    type: MOVIE_CONTENT_LIST[2].type, 
    page: page,
    countries, 
     genres: 18, 
     order, 
     year
  });
console.log(getTopPopularFilms.data?.items);

// const hasLoiding = getTopPopularFilms.isFetching


console.log( getContentFilms,  getContentSeries, getContentCartoon );

const caruselArr = [
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
]
  
  return (
    <div>
        <h1>HomePage</h1>
        <Link to={caruselArr[0].url}>
        {caruselArr[0].title}
        </Link>
        <Carousel>
          <ul>
          </ul>
            {caruselArr[0].data && caruselArr[0].data.map((movie) => (
              <li key={movie.kinopoiskId}>
                <img className={style.poster} src={movie.posterUrlPreview} alt="" />
              </li>
            ))}
        </Carousel>

        <Link to={caruselArr[1].url}>
        {caruselArr[1].title}
        </Link>
        <Carousel>
          <ul>
          </ul>
            {caruselArr[1].data && caruselArr[1].data.map((movie) => (
              <li key={movie.kinopoiskId}>
                <img className={style.poster} src={movie.posterUrlPreview} alt="" />
              </li>
            ))}
        </Carousel>

        <Link to={caruselArr[2].url}>
        {caruselArr[2].title}
        </Link>
        <Carousel>
          <ul>
          </ul>
            {caruselArr[2].data && caruselArr[2].data.map((movie) => (
              <li key={movie.kinopoiskId}>
                <img className={style.poster} src={movie.posterUrlPreview} alt="" />
              </li>
            ))}
        </Carousel>
    </div>
  )
};

export default HomePage
