import style from "../DetailedPage.module.scss";
import "../../../app/styles/main.scss";

interface IDetailedInfo {
  year?: number | null;
  countriesArr?: {country: string}[];
  genresArr?: {genre: string}[];
  filmLength?: number | null;

}
const DetailedInfo = ({ year, countriesArr, genresArr, filmLength}: IDetailedInfo) => {
  return (
    <div className={style.containerDetailedInfo}>

    <div className={style.containerDetailedCountry}>
      <span>Год:</span>
      <span className={style.valueInfo}>{year}</span>
    </div>

    <div className={style.containerDetailedCountry}>
      <span>Длительность:</span>
      <span className={style.valueInfo}>{filmLength} мин.</span>
    </div>

    <div className={style.containerDetailedCountry}>
      <span>Страна:</span>
      <ul className={`${style.list} list-reset`}>
        {countriesArr?.map((item, index) => (
          <li className={style.valueInfo} key={index}><span>{item.country}</span></li>
        ))}
      </ul>
    </div>

    <div className={style.containerDetailedGanre}>
      <span>Жанр:</span>
      <ul className={`${style.list} list-reset`}>
        {genresArr?.map((item, index) => (
          <li className={style.valueInfo} key={index}><span>{item.genre}</span></li>
        ))}
      </ul>
    </div>

    </div>
  )
};

export default DetailedInfo;
