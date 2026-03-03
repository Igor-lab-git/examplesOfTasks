import style from "../DetailedPage.module.scss";
import "../../../app/styles/main.scss";

interface IDetailedInfo {
  year?: number | null;
  countriesArr?: {country: string}[];
  genresArr?: {genre: string}[];
  filmLength?: number | null;
  theme: "light" | "dark";

}
const DetailedInfo = ({ year, countriesArr, genresArr, filmLength, theme}: IDetailedInfo) => {
  return (
    <div className={style.containerDetailedInfo}>

    <div className={style.containerDetailedCountry}>
      <span className={`${theme === "dark" ? style.nameMovieDark : ""}`}>Год:</span>
      <span className={`${style.valueInfo} ${theme === "dark" ? style.valueInfoDark : ""}`}>{year}</span>
    </div>

    <div className={style.containerDetailedCountry}>
      <span className={`${theme === "dark" ? style.nameMovieDark : ""}`}>Длительность:</span>
      <span className={`${style.valueInfo} ${theme === "dark" ? style.valueInfoDark : ""}`}>{filmLength} мин.</span>
    </div>

    <div className={style.containerDetailedCountry}>
      <span className={`${theme === "dark" ? style.nameMovieDark : ""}`}>Страна:</span>
      <ul className={`${style.list} list-reset`}>
        {countriesArr?.map((item, index) => (
          <li className={`${style.valueInfo} ${theme === "dark" ? style.valueInfoDark : ""}`} key={index}><span>{item.country}</span></li>
        ))}
      </ul>
    </div>

    <div className={style.containerDetailedGanre}>
      <span className={`${theme === "dark" ? style.nameMovieDark : ""}`}>Жанр:</span>
      <ul className={`${style.list} list-reset`}>
        {genresArr?.map((item, index) => (
          <li className={`${style.valueInfo} ${theme === "dark" ? style.valueInfoDark : ""}`} key={index}><span>{item.genre}</span></li>
        ))}
      </ul>
    </div>

    </div>
  )
};

export default DetailedInfo;
