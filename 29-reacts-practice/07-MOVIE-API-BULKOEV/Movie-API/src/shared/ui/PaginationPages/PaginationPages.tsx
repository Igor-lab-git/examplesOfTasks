import style from "./PaginationPages.module.scss";
import ReactPaginate from "react-paginate";
import "../../../app/styles/main.scss";

interface IPaginationPages {
  onPageChange: (event: { selected: number }) => void;
  totalPages: number;
  numberPage: number;
}

export const PaginationPages = ({
  onPageChange,
  totalPages,
  numberPage,
}: IPaginationPages) => {
  return (
    <>
      <ReactPaginate
        className={`${style.paginationList} list-reset`}  
        breakLabel="..."
        nextLabel=""
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel=""
        renderOnZeroPageCount={null}
        forcePage={numberPage - 1}

        disabledClassName="pagination-disabled"
        activeClassName={style.paginationActive}
        containerClassName={style.pagination}
        pageClassName={style.paginationPage}
        previousClassName={style.prevButton}
        nextClassName={style.nextButton}
        breakClassName="pagination-break"
        previousAriaLabel="Предыдущая страница"
        nextAriaLabel="Следующая страница"
        ariaLabelBuilder={(page) => `Страница${page}`}
        extraAriaContext="Пагинация фильмов"
      />
    </>
  );
};
