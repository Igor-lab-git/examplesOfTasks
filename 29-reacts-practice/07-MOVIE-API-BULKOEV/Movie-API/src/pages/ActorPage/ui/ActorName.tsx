import type { JSX } from "@emotion/react/jsx-runtime";
import style from "../ActorPage.module.scss";

interface IActorName {
    nameRu?: string;
    nameEn?: string;
}


const ActorName = ({nameRu, nameEn}: IActorName): JSX.Element => {
  return (
    <div className={style.wrapperTitle}>
      <h1 className={style.title}>{nameRu ? nameRu : nameEn}</h1>
      <span className={style.titleEnglish}>{nameEn ? nameEn : ""}</span>
    </div>
  )
}

export default ActorName
