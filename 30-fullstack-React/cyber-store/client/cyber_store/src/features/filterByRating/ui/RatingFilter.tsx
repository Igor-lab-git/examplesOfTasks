import type { JSX } from "react";
import arrowDowByRating from "../../../shared/assets/icons/category-page/arrow-down-by-rating.svg";
import style from "./RatingFilter.module.scss";

const RatingFilter = (): JSX.Element => {
  return (
    <>
      <div className={style.container_rating_filter}>
        <span className={style.title_rating_filter}>По райтенгу</span>
        <img className={style.icon_rating_filter} src={arrowDowByRating} alt="" />
      </div>
    </>
  );
};

export default RatingFilter;
