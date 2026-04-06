import { useState, type JSX } from "react";
import ratingIconStar from "../../../shared/assets/icons/devicep-age/star-rating.svg";
import style from "./DevicePage.module.scss";
import { ReviewForm, ReviewList } from "../../../features/reviews";
import "../../../app/styles/main.scss";

interface IDeviceReviews {
    rating?: number;
};

export interface IComments {
    id: string
    date: number;
    message: string
};

const DeviceReviews = ({rating}: IDeviceReviews): JSX.Element => {
    const [comments, setComments] = useState<IComments[]>([]);
  return (
    <div className={`container-main ${style.rating}`}>
      <h3 className={style.rating_title}>Обзоры</h3>

      <div className={style.container_rating}>
        <div className={style.wrapper_reviews}>
            <span className={style.rating_score}>{rating}</span>
            <span className={style.reviews_count}>из 125 отзывов</span>
            <div className={style.wrapper_starts}>
                {[...new Array(5)].map((_, index) => (
                    <img className={style.icon_starts} key={index} src={ratingIconStar} alt="звезда" />
                ))}
            </div>
        </div>

        <div className={style.wrapper_list_progress}>
            <ul className={`list-reset ${style.list_progress}`}>
                <li className={style.item_progress}>
                    <span className={style.label_progress}>Отлично</span>
                    <div className={style.progress_bar}>
                        <div className={style.progress_fill}></div>
                    </div>
                    <span>100</span>
                </li>

                <li className={style.item_progress}>
                    <span className={style.label_progress}>Хорошо</span>
                    <div className={style.progress_bar}>
                        <div className={style.progress_fill}></div>
                    </div>
                    <span>11</span>
                </li>

                <li className={style.item_progress}>
                    <span className={style.label_progress}>Средний</span>
                    <div className={style.progress_bar}>
                        <div className={style.progress_fill}></div>
                    </div>
                    <span>3</span>
                </li>

                <li className={style.item_progress}>
                    <span className={style.label_progress}>Ниже среднего</span>
                    <div className={style.progress_bar}>
                        <div className={style.progress_fill}></div>
                    </div>
                    <span>8</span>
                </li>

                <li className={style.item_progress}>
                    <span className={style.label_progress}>Бедный</span>
                    <div className={style.progress_bar}>
                        <div className={style.progress_fill}></div>
                    </div>
                    <span>1</span>
                </li>
            </ul>
        </div>
      </div>
        <ReviewForm setComments={setComments}/>
        <ReviewList comments={comments}/>
    </div>
  )
}

export default DeviceReviews
