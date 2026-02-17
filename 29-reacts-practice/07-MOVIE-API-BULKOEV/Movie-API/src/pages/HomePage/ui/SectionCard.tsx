import type { IMovies } from "../../../app/store/moviesApi";
import style from "../HomePage.module.scss";

interface ISectionCard {
  movies: IMovies[] | undefined;
}

const SectionCard = ({ movies }: ISectionCard) => {
  console.log(movies);

  return (
    <>
      {movies?.map((movie) => (
        <article className={style.cardMovie} key={movie.kinopoiskId}>
          <img
            className={style.cardMoviePoster}
            src={ movie?.posterUrlPreview ? movie?.posterUrlPreview : movie?.posterUrl  }
            alt={`${movie?.nameRu ? movie?.nameRu : movie?.nameEn}`}/>
          <div>
            <h3 className={style.cardMovieTitle}>
              {movie?.nameRu ? movie?.nameRu : movie?.nameEn}
            </h3>
          </div>
        </article>
      ))}
    </>
  );
};

export default SectionCard;
