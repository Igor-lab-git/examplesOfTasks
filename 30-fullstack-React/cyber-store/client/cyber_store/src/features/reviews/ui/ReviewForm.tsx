import { useState, type JSX } from "react";
import { generateId } from "../../../shared/lib/generateId";
import type { IComments } from "../../../pages/DevicePage/ui/DeviceReviews";
import style from "./reviews.module.scss";

interface IReviewForm {
    setComments:  React.Dispatch<React.SetStateAction<IComments[]>>;
};

const ReviewForm = ({setComments}: IReviewForm): JSX.Element => {
    const [value, setValue] = useState<string>("");

    const handleAddComment = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            setComments(prev => [...prev, { id: generateId(), date: Date .now(), message: value }]);
            setValue('');
        };
    };

  return (
    <div className={style.wrapper_input}>
      <input 
        className={style.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleAddComment}
        type="text" 
        placeholder="Оставить Коментарий"/>
    </div>
  )
}

export default ReviewForm;
