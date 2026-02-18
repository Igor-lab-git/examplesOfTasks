import GenresBody from "./ui/GenresBody";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage.tsx";
import GenresListPageApi from "./model/GenresListPage.api.ts";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import "../../app/styles/main.scss";
import style from "./GenresListPage.module.scss";
import { PaginationPages } from "../../shared/ui/PaginationPages/PaginationPages.tsx";

const GenresListPage = () => {
  const { data, error, isLoading, numberPage, setNumberPage, getTypeGenres } =
    GenresListPageApi();
  const totalPages = data?.totalPages || 1;

  if (error) return <ErrorMessage />;
  if (isLoading) return <h2>Загрузка данных...</h2>;

  const handlePageClick = (event: { selected: number }) => {
    setNumberPage(event.selected + 1);
  };

  return (
    <ContainerPages>
      <div className={`${style.genresPage} containerMain`}>
        <NavigationPage title={getTypeGenres?.title} />
        <GenresBody movies={data?.items} />
        <PaginationPages
          onPageChange={handlePageClick}
          totalPages={totalPages}
          numberPage={numberPage}
        />
      </div>
    </ContainerPages>
  );
};

export default GenresListPage;
