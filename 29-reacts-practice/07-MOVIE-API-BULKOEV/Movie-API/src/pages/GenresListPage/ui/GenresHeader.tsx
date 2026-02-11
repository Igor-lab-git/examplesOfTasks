import { useNavigate } from "react-router-dom";
import type { IMOVIE_CONTENT_LIST } from "../../../typse/types";

interface IGenresHeader {
    getTypeGenres?: IMOVIE_CONTENT_LIST
}

 const GenresHeader = ({getTypeGenres}: IGenresHeader) => {

    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate("/")}>на главную</button>
        <button onClick={() => navigate(-1)}>назад</button>
        <span>{getTypeGenres?.title}</span>
    </div>
  )
};

export default GenresHeader;
