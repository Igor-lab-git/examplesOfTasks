import {useGetMoviesTopCollectionsQuery} from "../../app/store/moviesApi.ts";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {MOVIE_TOP_RANKINGS_LIST} from "../../shared/lib/constants.ts";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import style from "./TopRankingsPage.module.scss";


const TopRankingsPage = () => {

    const params = useLocation();
    const [numberPage, setNumberPage] = useState<number>(1);
    const navigate = useNavigate();


    const getTypeTopMovies = MOVIE_TOP_RANKINGS_LIST.find((item) => item.path === params.pathname);
    // console.log(getTypeTopMovies);

    const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({type: getTypeTopMovies?.type, page: numberPage});

    // console.log(data, error, isLoading);

    const totalPages = data?.totalPages || 1;

    const handlePageClick = (event: { selected: number }) => {
        setNumberPage(event.selected + 1); // React Paginate считает с 0
    };

    if(isLoading) return <h2>Загрузка...</h2>;
    if(error) return <h2>Ошибка на сервере, данных о фильмах нет</h2>;

  return (
    <div>
        <div>
            <button onClick={() => navigate("/")}>на главную</button>
            <button onClick={() => navigate(-1)}>назад</button>
            <span>{getTypeTopMovies?.title}</span>
        </div>

        <div>
            <ul>
                {data && data.items.map((movie) => (
                    <li key={movie.kinopoiskId}>
                        <Link to={`/movie/${movie.kinopoiskId}`}>
                            <img
                                src={movie.posterUrlPreview}
                                alt={movie.nameRu ? movie.nameRu : "постер фильма"}
                                loading="lazy"
                            />
                            <span>{movie.nameRu ? movie.nameRu : movie.nameEn}</span>
                            <span>IMDB {movie.ratingImdb ? movie.ratingImdb : "0"}</span>
                            <span>Kinopoisk {movie.ratingKinopoisk ? movie.ratingKinopoisk : "0"}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className={style.paginationWrapper}>
            <ReactPaginate className={style.paginationList}
                breakLabel="..."
                nextLabel="Вперед →"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}    // сколько кнопок показывать
                marginPagesDisplayed={2}  // сколько по краям
                pageCount={totalPages}
                previousLabel="← Назад"
                renderOnZeroPageCount={null}
                forcePage={numberPage - 1}

                disabledClassName="pagination-disabled"
                activeClassName={style.paginationActive}
                containerClassName={style.pagination}
                pageClassName={style.paginationPage}
                previousClassName="pagination-prev"
                nextClassName="pagination-next"
                breakClassName="pagination-break"
            />
        </div>
    </div>
  )
};

export default TopRankingsPage;
