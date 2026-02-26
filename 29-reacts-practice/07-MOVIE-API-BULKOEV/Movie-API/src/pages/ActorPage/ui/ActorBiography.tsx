import type { JSX } from "@emotion/react/jsx-runtime";
import type { IActorById } from "../../../app/store/moviesApi";
import style from "../ActorPage.module.scss";
import { memo, useMemo } from "react";

interface IActorBiography {
    personData?: IActorById
};

const ActorBiography = ({personData}: IActorBiography): JSX.Element => {

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
      <h2 className={style.titleBiography}>О персоне</h2>
      <div className={style.wrapperInfoDetailed}>
        <div className={style.wrapperInfoItem}>
            <span className={style.itemTitle}>Карьера</span>
            <p className={style.itemValue}>{personData?.profession}</p>
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={style.itemTitle}>Рост</span>
            {personData?.growth && (
                <p className={style.itemValue}>{(personData?.growth / 100).toFixed(1)} <span>м</span></p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={style.itemTitle}>Дата рождения</span>
            {personData?.birthday && (
                <p className={style.itemValue}>{personData?.birthday} <span>( {getBirthdayYear} лет )</span></p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={style.itemTitle}>Место рождения</span>
            {personData?.birthplace && (
                <p className={style.itemValue}>{personData?.birthplace}</p>
            )}
        </div>

        <div className={style.wrapperInfoItem}>
            <span className={style.itemTitle}>Всего фильмов</span>
            {personData?.films && (
                <p className={style.itemValue}>{personData?.films.length}</p>
            )}
        </div>

         <div >
            <span className={style.itemTitle}>Факты</span>
            {personData?.facts && personData?.facts.map((fact, index) => (
                <p className={style.itemValue} key={index}><span className={style.itemTitle}>{index + 1}. </span>{fact}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default memo(ActorBiography)
