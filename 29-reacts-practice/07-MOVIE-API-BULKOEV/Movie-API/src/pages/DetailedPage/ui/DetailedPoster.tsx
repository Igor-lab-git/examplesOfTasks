import style from "../DetailedPage.module.scss";

interface IDetailedPoster {
  poster?: string;
  nameRu?: string | null;
  nameOriginal?: string | null;
}

const DetailedPoster = ({ poster, nameRu, nameOriginal }: IDetailedPoster) => {
  return (
    <div className={style.containerPoster}>
      <img className={style.poster} src={poster} alt={nameRu || nameOriginal || "постер"} width={300} height="auto"/>
    </div>
  );
};

export default DetailedPoster;
