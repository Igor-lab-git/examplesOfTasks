import { Link } from "react-router-dom";
import type { IMovies } from "../../../app/store/ui/moviesApi";
import style from "../GenresListPage.module.scss"

interface IGenresBody {
  movies?: IMovies[];
}

const GenresBody = ({ movies }: IGenresBody) => {
  return (
    <div>
      <ul className={style.listCards}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.kinopoiskId}>
              <Link to={`/movie/${movie.kinopoiskId}`}>
                <img
                  src={movie.posterUrlPreview}
                  alt={movie.nameRu ? movie.nameRu : "постер фильма"}
                  loading="lazy"
                />
              <span>{movie.nameRu ? movie.nameRu : movie.nameEn}</span>
              <span>IMDB {movie.ratingImdb ? movie.ratingImdb : "0"}</span>
              <span>Kinopoisk {movie.ratingKinopoisk ? movie.ratingKinopoisk : "0"}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GenresBody;
