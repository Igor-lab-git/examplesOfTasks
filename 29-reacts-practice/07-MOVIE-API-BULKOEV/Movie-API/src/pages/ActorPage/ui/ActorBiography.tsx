import type { JSX } from "@emotion/react/jsx-runtime";
import type { IActorById } from "../../../app/store/moviesApi";
import style from "../ActorPage.module.scss";
import { memo, useMemo } from "react";

interface IActorBiography {
    personData?: IActorById;
    theme: "light" | "dark";
};

const ActorBiography = ({personData, theme}: IActorBiography): JSX.Element => {

    const getBirthdayYear = useMemo(() => {
        if(!personData?.birthday) return;
        const getYear = new Date().getFullYear();

        if(personData?.birthday) {
            return getYear - Number(personData?.birthday.split("-")[0]);
        } else {
            return "";
        };
    }, [personData?.birthday]);

  return (
    <div className={style.containerBiography}>
      <h2 className={`${style.titleBiography} ${theme === "dark" ? style.titleBiographyDark : ""}`}>О персоне</h2>
      <div className={style.wrapperInfoDetailed}>
        <div className={style.wrapperInfoItem}>
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Карьера</span>
            <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`}>{personData?.profession}</p>
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Рост</span>
            {personData?.growth && (
                <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`}>{(personData?.growth / 100).toFixed(1)} <span>м</span></p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Дата рождения</span>
            {personData?.birthday && (
                <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`}>{personData?.birthday} <span>( {getBirthdayYear} лет )</span></p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Место рождения</span>
            {personData?.birthplace && (
                <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`}>{personData?.birthplace}</p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Всего фильмов</span>
            {personData?.films && (
                <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`}>{personData?.films.length}</p>
            )}
        </div>

         <div >
            <span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>Факты</span>
            {personData?.facts && personData?.facts.map((fact, index) => (
                <p className={`${style.itemValue} ${theme === "dark" ? style.itemValueDark : ""}`} key={index}><span className={`${style.itemTitle} ${theme === "dark" ? style.itemTitleDark : ""}`}>{index + 1}. </span>{fact}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default memo(ActorBiography)
