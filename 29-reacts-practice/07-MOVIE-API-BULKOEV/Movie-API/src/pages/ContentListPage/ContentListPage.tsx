import { useSelector } from "react-redux";
import { useGetFilteredContentQuery } from "../../app/store/ui/moviesApi";
import { selectFilters } from "../../app/store/ui/moviesSlice";
import { MOVIE_CONTENT_LIST } from "../../shared/lib/constants";
import { useLocation } from "react-router-dom";
import { ErrorMessage } from "../../shared/ui/ErrorMessage";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./ContentListPage.module.scss";
import { FilterSelectContent } from "../../features/FilterSelectContent/ui";


const ContentListPage = () => {
const location = useLocation();
const [numberPage, setNumberPage] = useState<number>(1);


  const {country, order, year, genre: selectedGenres} = useSelector(selectFilters);

  const contentType = MOVIE_CONTENT_LIST.find(el => el.path === location.pathname);
  // console.log(contentType?.type);
  
  const genreParams = selectedGenres || contentType?.genres

  const {data, error, isLoading} = useGetFilteredContentQuery({country, genre: genreParams, order, type: contentType?.type, year, page: numberPage});
// console.log(data);

if(isLoading) return <h2>Загрузка данных...</h2>
if(error) return <ErrorMessage />

const totalPages = data?.totalPages || 1;

const handlePageClick = (event: { selected: number }) => {
    setNumberPage(event.selected + 1); // React Paginate считает с 0
};

console.log('URL params:', {
  countries: country,
  genres: genreParams,
  order: order,
  type: contentType?.type,
  year: year,
  page: numberPage
});
  return (
    <div>
      <h2>ContentListPage</h2>
      
      <FilterSelectContent country={country} order={order} year={year} genre={selectedGenres}/>

      {data && data.items.map((movie) => (
        <li key={movie.kinopoiskId}>
          <img src={movie.posterUrlPreview} alt="" />
        </li>
      ))}

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

export default ContentListPage;
