import {useGetMoviesTopCollectionsQuery} from "../../app/store/ui/moviesApi.ts";

interface IMovieListTop {
  type: "top100" | "top250";
}

const MovieListTop = ({type}: IMovieListTop) => {

    const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({type: "TOP_POPULAR_ALL", page: 1});

    console.log(data, error, isLoading);

    if(isLoading) {
        return <h2>Загрузка...</h2>
    };

    if(error) {
        return <h2>Ошибка на сервере, данных о фильмах нет</h2>
    };

  return (
    <div>
        <h1>{type === "top100" ? "TOP Movies 100" :  type === "top250" ? "TOP Movies 250" : ""}</h1>
    </div>
  )
};

export default MovieListTop;
