import { Link } from "react-router-dom";
import type { IMovies } from "../../../app/store/moviesApi";
import style from "./MovieCard.module.scss";

interface IMovieCard {
  movieCard: IMovies;
}

const MovieCard = ({ movieCard }: IMovieCard) => {
  console.log(movieCard);

  return (
    <Link to={`/movie/${movieCard.kinopoiskId}`}>
      <article className={style.cardMovie}>
        <img
          className={style.poster}
          src={movieCard.posterUrlPreview}
          alt={movieCard.nameRu ? movieCard.nameRu : "постер фильма"}
          loading="lazy"
        />

        <div className={style.cardBody}>
          <div className={style.cardDescription}>
            <span>{movieCard.nameRu ? movieCard.nameRu : movieCard.nameEn}</span>
            <span>{movieCard?.year}</span>
          </div>

          <div className={style.cardWrapperRating}>
            <span className={style.cardRatingImdb}> 
                <span className={style.cardImdbLabel}>IMDB</span>
                <span className={style.cardImdbValue}>{movieCard.ratingImdb || "0"}</span>
            </span>

            <span className={style.cardRatingKinopoisk}>
                <span className={style.cardKinopoiskLabel}>Kinopoisk</span>
                <span className={style.cardKinopoiskValue}>{movieCard.ratingKinopoisk || "0"}</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
