import type { JSX } from "react";
import type { IMovies } from "../../../app/store/moviesApi";
import { MovieCard } from "../../../entities/ui/MovieCard";
import style from "../TopRankingsPage.module.scss"

interface ITopRankingsBody {
    movies?: IMovies[];
}


const TopRankingsBody = ({movies}: ITopRankingsBody): JSX.Element => {
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
  )
};

export default TopRankingsBody;
