import { useGetMoviesTopCollectionsQuery } from "../../app/store/moviesApi.ts";
import { useLocation } from "react-router-dom";
import { MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants.ts";
import { useState } from "react";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import { PaginationPages } from "../../shared/ui/PaginationPages/PaginationPages.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import TopRankingsBody from "./ui/TopRankingsBody.tsx";

const TopRankingsPage = () => {
  const params = useLocation();
  const [numberPage, setNumberPage] = useState<number>(1);

  const getTypeTopMovies = MOVIE_TOP_RANKINGS_LIST.find(
    (item) => item.path === params.pathname
  );
  // console.log(getTypeTopMovies);

  const { data, error, isLoading } = useGetMoviesTopCollectionsQuery({
    type: getTypeTopMovies?.type,
    page: numberPage,
  });

  // console.log(data, error, isLoading);

  const totalPages = data?.totalPages || 1;

  const handlePageClick = (event: { selected: number }) => {
    setNumberPage(event.selected + 1); // React Paginate считает с 0
  };

  if (isLoading) return <h2>Загрузка...</h2>;
  if (error) return <h2>Ошибка на сервере, данных о фильмах нет</h2>;

  return (
    <ContainerPages>
      <div>
        <NavigationPage title={getTypeTopMovies?.title} />
          <TopRankingsBody movies={data?.items} />
        <PaginationPages
          onPageChange={handlePageClick}
          numberPage={numberPage}
          totalPages={totalPages}
        />
      </div>
    </ContainerPages>
  );
};

export default TopRankingsPage;
