import type { JSX } from "@emotion/react/jsx-runtime";
import style from "../ActorPage.module.scss";

interface IActorName {
    nameRu?: string;
    nameEn?: string;
    theme: "light" | "dark";
}


const ActorName = ({nameRu, nameEn, theme}: IActorName): JSX.Element => {
  return (
    <div className={style.wrapperTitle}>
      <h1 className={`${style.title} ${theme === "dark" ? style.titleDark : ""}`}>{nameRu ? nameRu : nameEn}</h1>
      <span className={`${style.titleEnglish} ${theme === "dark" ? style.titleEnglishDark : ""}`}>{nameEn ? nameEn : ""}</span>
    </div>
  )
}

export default ActorName
