// import {useGetMoviesTopCollectionsQuery} from "../../app/store/ui/moviesApi.ts";

interface IMovieListTop {
  type: string;
}

const TopRankingsPage = ({type}: IMovieListTop) => {

    // const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({type: "TOP_POPULAR_ALL", page: 1});

    // console.log(data, error, isLoading);

    // if(isLoading) {
    //     return <h2>Загрузка...</h2>
    // };

    // if(error) {
    //     return <h2>Ошибка на сервере, данных о фильмах нет</h2>
    // };

  return (
    <div>
        <h1>{type === "TOP_POPULAR_MOVIES" ? "TOP_POPULAR_MOVIES" :  type === "TOP_250_MOVIES" ? "TOP_250_MOVIES" : ""}</h1>


    </div>
  )
};

export default TopRankingsPage;
