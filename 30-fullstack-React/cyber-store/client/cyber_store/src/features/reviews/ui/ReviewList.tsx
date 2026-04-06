import type { JSX } from "react";
import type { IComments } from "../../../pages/DevicePage/ui/DeviceReviews";
import ratingIconStar from "../../../shared/assets/icons/devicep-age/star-rating.svg";
import style from "../../../pages/DevicePage/ui/DevicePage.module.scss";
import "../../../app/styles/main.scss";
import formatedDate from "../../../shared/lib/formatedDate.ts";

interface IReviewList {
    comments: IComments[];
};

const ReviewList = ({comments}: IReviewList): JSX.Element => {

  return (
    <div className={style.container_comments}>
        <ul className={`list-reset ${style.list_comments}`}>
          {comments && comments.map(({id, date, message}) => (
              <li className={style.comments_item} key={id}>
                  <img className={style.comments_avatar} src="" alt=""/>
                  <div className={style.comments_body}>
                      <header className={style.comments_header}>
                          <span className={style.name_person}>Grace Carey</span>
                          <span className={style.date}>{formatedDate(date)}</span>
                      </header>
                      <div  className={style.wrapper_starts}>
                          {[...new Array(5)].map((_, index) => (
                              <img className={style.icon_starts} key={index} src={ratingIconStar} alt="звезда"/>
                          ))}
                      </div>
                      <p className={style.comment_meassage}>{message}</p>
                  </div>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default ReviewList;
