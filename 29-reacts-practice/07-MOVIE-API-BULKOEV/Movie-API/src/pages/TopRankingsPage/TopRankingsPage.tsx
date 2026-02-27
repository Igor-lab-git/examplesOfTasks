import {ErrorMessage} from "../../shared/ui/ErrorMessage";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import { PaginationPages } from "../../shared/ui/PaginationPages/PaginationPages.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import TopRankingsBody from "./ui/TopRankingsBody.tsx";
import "../../app/styles/main.scss";
import style from "./TopRankingsPage.module.scss";
import TopRankingsPageApi from "./model/TopRankingsPageApi.ts";
import Preloader from "../../shared/ui/Preloader/Preloader.tsx";

const TopRankingsPage = () => {

  const {
    getTypeTopMovies,
    data,
    error,
    isLoading,
    numberPage,
    setNumberPage} = TopRankingsPageApi();

  const totalPages = data?.totalPages || 1;

  const handlePageClick = (event: { selected: number }) => {
    setNumberPage(event.selected + 1);
  };

  if (isLoading) return <Preloader />;
  if (error) return <ErrorMessage />;

  return (
    <ContainerPages>
      <div className={`${style.topRankingsPage} containerMain`}>
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
