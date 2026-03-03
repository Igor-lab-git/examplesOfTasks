import type { JSX } from "@emotion/react/jsx-runtime";
import type { IFilms } from "../../../app/store/moviesApi";
import { Link } from "react-router-dom";
import  { memo, useMemo } from "react";
import { PROFESSION_TRANSLATIONS } from "../../../shared/lib/constants";
import style from "../ActorPage.module.scss";
import "../../../app/styles/main.scss";

interface IActorFilmography {
  films?: IFilms[];
  theme: "light" | "dark";
};

const ActorFilmography = ({ films, theme }: IActorFilmography): JSX.Element => {

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


 const getProfessionName = (professionKey: string): string => {
    if (professionKey && professionKey in PROFESSION_TRANSLATIONS) {
      return PROFESSION_TRANSLATIONS[professionKey as keyof typeof PROFESSION_TRANSLATIONS];
    }
    return professionKey || "Неизвестно";
  };

  const getRatingClass = useMemo(() => (rating: string): string => {
    const numberRating = Number(rating);
    if(!numberRating) return style.ratingNone;
    if (numberRating >= 7) return style.ratingHigh;
    if (numberRating >= 6) return style.ratingMedium;
    return style.ratingLow;
  }, []) ;
 

  return (
    <div className={style.containerFilmography}>
      <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Фильмография</span>
      <ul className={ `list-reset ${style.listFilmography}`}>
        {groupedFilms && groupedFilms.map((film) => (
            <li className={style.itemFilm} key={film.filmId}>
              <Link className={style.linkFilm} to={`/movie/${film.filmId}`}>
                <span className={`${style.linkName} ${theme === "dark" ? style.linkNameDark : ""}`}>{film.nameRu ? film.nameRu : film.nameEn}</span>
                <span className={`${style.linkDescription} ${theme == "dark" ? style.linkDescriptionDark : ""}`}>{film.description ? film.description : ""}</span>
                <span className={`${style.linkProfession} ${theme === "dark" ? style.linkProfessionDark : ""}`}>{getProfessionName(film.professionKey)}</span>
              </Link>
              <span className={getRatingClass(film.rating)}>{film.rating ? film.rating : "0"}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(ActorFilmography);
