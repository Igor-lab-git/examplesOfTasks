import type { IMovies } from "../../../app/store/moviesApi.ts";
import style from "../GenresListPage.module.scss";
import "../../../app/styles/main.scss";
import MovieCard from "../../../entities/ui/MovieCard/MovieCard.tsx";

interface IGenresBody {
  movies?: IMovies[];
}

const GenresBody = ({ movies }: IGenresBody) => {
  
  return (
    <div>
      <ul className={`${style.listCards} list-reset`}>
        {movies &&
          movies.map((movieCard) => (
            <li className={style.cardItem} key={movieCard.kinopoiskId}>
              <MovieCard movieCard={movieCard} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GenresBody;
