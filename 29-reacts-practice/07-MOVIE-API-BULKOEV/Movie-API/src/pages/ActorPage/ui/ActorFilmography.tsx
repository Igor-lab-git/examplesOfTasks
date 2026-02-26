import type { JSX } from "@emotion/react/jsx-runtime";
import type { IFilms } from "../../../app/store/moviesApi";
import { Link } from "react-router-dom";
import  { memo, useMemo } from "react";
import style from "../ActorPage.module.scss";
import "../../../app/styles/main.scss";

interface IActorFilmography {
  films?: IFilms[];
};

const ActorFilmography = ({ films }: IActorFilmography): JSX.Element => {

  console.log(films, "films");
  const groupedFilms = useMemo(() => {
    if (!films) return [];
    
    const filmMap = new Map();
    
    films.forEach(film => {
      if (!filmMap.has(film.filmId)) {
        filmMap.set(film.filmId, {
          ...film,
          professions: [film.professionKey]
        });
      } else {
        const existing = filmMap.get(film.filmId);
        if (!existing.professions.includes(film.professionKey)) {
          existing.professions.push(film.professionKey);
        }
      }
    });
    
    return Array.from(filmMap.values());
  }, [films]);

 

  const filtredProfession = () => {
    const listProfessionKey = ["DIRECTOR", "WRITER", "ACTOR", "PRODUCER"];
    const result = films?.filter((film) => {
      return listProfessionKey.includes(film.professionKey);
    })

    return result
  }

  console.log(filtredProfession(), "filtredProfession");
  
  

  return (
    <div className={style.containerFilmography}>
      <span className={style.itemTitle}>Фильмография</span>
      <ul className={ `${style.listFilmography}  list-reset`}>
        {groupedFilms && groupedFilms.map((film, index) => (
            <li className={style.itemFilm} key={film.filmId}>
              <span>{index + 1}. </span>
              <Link className={style.linkFilm} to={`/movie/${film.filmId}`}>
                <span>{film.nameRu ? film.nameRu : film.nameEn}</span>
                <span>{film.professionKey === "DIRECTOR" ? "Режисёр" : "Режисёр"}</span>
              </Link>
              <span>{film.rating ? film.rating : "0"}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(ActorFilmography);
