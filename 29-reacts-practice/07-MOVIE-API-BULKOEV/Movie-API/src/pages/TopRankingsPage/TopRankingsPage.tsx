import {ErrorMessage} from "../../shared/ui/ErrorMessage";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import { PaginationPages } from "../../shared/ui/PaginationPages/PaginationPages.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import TopRankingsBody from "./ui/TopRankingsBody.tsx";
import "../../app/styles/main.scss";
import style from "./TopRankingsPage.module.scss";
import TopRankingsPageApi from "./model/TopRankingsPageApi.ts";
import Preloader from "../../shared/ui/Preloader/Preloader.tsx";
import { useContext } from "react";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext.ts";
import type { JSX } from "@emotion/react/jsx-runtime";

const TopRankingsPage = (): JSX.Element => {
   const context = useContext(ThemeModeContext);
          
      if (!context) {
        throw new Error("SwitchingThemes must be used within ThemeProvider");
      };
          
      const { theme } = context;

  const {
    getTypeTopMovies,
    data,
    error,
    isLoading,
    numberPage,
    setNumberPage
  } = TopRankingsPageApi();

  const totalPages = data?.totalPages || 1;

  const handlePageClick = (event: { selected: number }) => {
    setNumberPage(event.selected + 1);
  };

  if (isLoading) return <Preloader />;
  if (error) return <ErrorMessage />;

  return (
    <ContainerPages>
      <div className={`${style.topRankingsPage} ${theme === "dark" ? style.topRankingsPageDark : ""} containerMain`}>
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
