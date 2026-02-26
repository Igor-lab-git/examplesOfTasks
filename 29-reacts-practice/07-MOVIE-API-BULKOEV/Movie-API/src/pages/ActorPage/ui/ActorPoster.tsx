import style from "../ActorPage.module.scss";

interface IActorPoster {
  poster?: string;
  nameRu?: string;
  nameEn?: string;
};

const ActorPoster = ({ poster, nameRu, nameEn }: IActorPoster) => {
  return (
    <div className={style.wrapperPoster}>
      <img 
        className={style.poster}
        src={poster && poster}
        alt={`${nameRu} ? ${nameRu} ? ${nameEn} : "постер актёра"`}
      />
    </div>
  );
};

export default ActorPoster;
