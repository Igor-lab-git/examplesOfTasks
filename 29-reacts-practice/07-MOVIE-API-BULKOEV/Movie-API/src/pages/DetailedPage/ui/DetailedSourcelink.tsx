import style from "../DetailedPage.module.scss";
import "../../../app/styles/main.scss";

interface IDetailedSourcelink {
    webUrl?: string;
     imdUrl?: string;
}

const DetailedSourcelink = ({webUrl, imdUrl}: IDetailedSourcelink) => {
  return (
    <div className={style.containerSourcelink}>
        <h3 className={style.title}>Перейти по ссылке</h3>

        <a className={style.kinopoisk} href={webUrl} target="_blank" rel="noopener noreferrer">
            Кинопоиск<span className={style.icon}>🎬</span>
        </a>

        <a className={style.kinopoisk} href={`https://www.imdb.com/title/${imdUrl}`} target="_blank" rel="noopener noreferrer">
            IMDb<span className={style.icon}>⭐</span>
        </a>
    </div>
  )
};

export default DetailedSourcelink;


// return (
//     <div className={style.containerSourcelink}>
//       <h3 className={style.title}>Где посмотреть</h3>
//       <div className={style.links}>
//         {webUrl && (
//           <a href={webUrl} target="_blank" rel="noopener noreferrer"className={`${style.link} ${style.kinopoisk}`}>
//             <span className={style.icon}>🎬</span>
//             Кинопоиск
//           </a>
//         )}
        
//         {imdUrl && (
//             <a href={`https://www.imdb.com/title/${imdUrl}`} target="_blank" rel="noopener noreferrer"className={`${style.link} ${style.imdb}`}>
//             <span className={style.icon}>⭐</span>
//             IMDb
//           </a>
//         )}
//       </div>
//     </div>
//   );