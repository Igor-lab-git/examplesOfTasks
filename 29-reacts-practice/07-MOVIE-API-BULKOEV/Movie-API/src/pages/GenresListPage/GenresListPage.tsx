import GenresFooter from "./ui/GenresFooter";
import GenresBody from "./ui/GenresBody";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage.tsx";
import GenresListPageApi from "./model/GenresListPage.api.ts";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import "../../app/styles/main.scss";
import style from "./GenresListPage.module.scss";

const GenresListPage = () => {
  const { data, error, isLoading, numberPage, setNumberPage, getTypeGenres } = GenresListPageApi();

  if (error) return <ErrorMessage />;
  if (isLoading) return <h2>Загрузка данных...</h2>;

  return (
    <ContainerPages>
      <div className={`${style.genresPage} containerMain`}>
        <NavigationPage title={getTypeGenres?.title} />
        <GenresBody movies={data?.items} />
        <GenresFooter
          totalPages={data?.totalPages}
          quantityMovies={data?.items}
          numberPage={numberPage}
          setNumberPage={setNumberPage}
        />
      </div>
    </ContainerPages>
  );
};

export default GenresListPage;
