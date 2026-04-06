import type { JSX } from "react";
import type { IComments } from "../../../pages/DevicePage/ui/DeviceReviews";

interface IReviewList {
    comments: IComments[];
}

const ReviewList = ({comments}: IReviewList): JSX.Element => {
  return (
    <div>
      {comments && comments.map(({id, date, message}) => (
          <li key={id}>
            <span >{message}</span>
            <span >{date}</span>
        </li>
      ))}
    </div>
  )
}

export default ReviewList;
