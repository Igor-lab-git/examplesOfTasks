import { useLocation } from "react-router-dom";
import { MOVIE_GENRES_LIST } from "../../shared/lib/constants";
import { useGetMoviesTopCollectionsQuery } from "../../app/store/ui/moviesApi";
import { useState } from "react";
import GenresHeader from "./ui/GenresHeader";
import GenresFooter from "./ui/GenresFooter";
import GenresBody from "./ui/GenresBody";

const GenresListPage  = () => {

  const location = useLocation();
  const [numberPage, setNumberPage] = useState<number>(1);

  const getTypeGenres =  MOVIE_GENRES_LIST.find((el) => el.path === location.pathname);

  const {data, error, isLoading} = useGetMoviesTopCollectionsQuery({type: getTypeGenres?.type, page: numberPage});

  if(error) return <h2>Ошибка на сервере, зайтиде позже :(</h2>;
  if(isLoading) return <h2>Загрузка данных...</h2>;

  return (
    <div>
      <GenresHeader getTypeGenres={getTypeGenres}/>

      <GenresBody movies={data?.items}/>

      <GenresFooter
        totalPages={data?.totalPages}
        quantityMovies={data?.items}
        numberPage={numberPage}
        setNumberPage={setNumberPage}/>
    </div>
  )
};

export default GenresListPage ;
