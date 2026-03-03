import { useParams} from "react-router-dom";
import {
    useGetMovieByIdQuery,
    useGetPersonByIdQuery,
    useGetSequelsPrequelsQuery
} from "../../app/store/moviesApi.ts";
import {ErrorMessage} from "../../shared/ui/ErrorMessage";
import VideoPlayer from "../../shared/ui/VideoPlayer/VideoPlayer.tsx";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";
import "../../app/styles/main.scss";
import style from "./DetailedPage.module.scss";
import  DetailedPoster  from "./ui/DetailedPoster.tsx";
import DetailedName from "./ui/DetailedName.tsx";
import DetailedDescription from "./ui/DetailedDescription.tsx";
import DetailedInfo from "./ui/DetailedInfo.tsx";
import DetailedDirectors from "./ui/DetailedStaff.tsx";
import DetailedSourcelink from "./ui/DetailedSourcelink.tsx";
import DetailedSequels from "./ui/DetailedSequels.tsx";
import {useContext, type JSX} from "react";
import Preloader from "../../shared/ui/Preloader/Preloader.tsx";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext.ts";

const DetailedPage = (): JSX.Element => {
    const context = useContext(ThemeModeContext);
    const { id } = useParams();

     if (!context) {
    throw new Error("SwitchingThemes must be used within ThemeProvider");
  };
  
    const { theme } = context;
    const movieId = Number(id);

    const filmQuery = useGetMovieByIdQuery({ id: movieId });
    const sequelsQuery = useGetSequelsPrequelsQuery({ id: movieId });
    const personsQuery = useGetPersonByIdQuery({ id: movieId });

    if(filmQuery.isLoading || sequelsQuery.isLoading || personsQuery.isLoading) return <Preloader />;
    if(filmQuery.error || personsQuery.error) return <ErrorMessage/>;

  return (
      <ContainerPages>
            <div className={` ${style.homePage} ${theme === "dark" ? style.homePageDark : ""} containerMain`}>
                <NavigationPage title={filmQuery.data?.nameRu ? filmQuery.data?.nameRu : filmQuery.data?.nameOriginal}/>
            <div className={style.containerInfo}>
                <DetailedPoster 
                    poster={filmQuery.data?.posterUrl} 
                    nameRu={filmQuery.data?.nameRu }
                    nameOriginal={filmQuery.data?.nameOriginal}/>
            <div className={style.containerInfoBody}>
                <DetailedName 
                    theme={theme}
                    nameRu={filmQuery.data?.nameRu} 
                    nameOriginal={filmQuery.data?.nameOriginal} 
                    year={filmQuery.data?.year}/>
                <DetailedDescription 
                    theme={theme}
                    description={filmQuery.data?.description}/>
            <div className={style.containerInfoStaff}>
                <DetailedInfo
                    theme={theme}
                    year={filmQuery.data?.year} 
                    countriesArr={filmQuery.data?.countries}
                    genresArr={filmQuery.data?.genres}
                    filmLength={filmQuery.data?.filmLength}/>
                <DetailedDirectors 
                    theme={theme}
                    staff={personsQuery.data}/>
            </div>
            </div>
            </div>
                <DetailedSourcelink webUrl={filmQuery.data?.webUrl} imdUrl={filmQuery.data?.imdbId}/>
                <VideoPlayer movieId={filmQuery.data?.kinopoiskId}/>
                <div>
                    <DetailedSequels 
                        theme={theme}
                        sequels={sequelsQuery?.data}/>
                </div>
            </div>
        </ContainerPages>
  )
};

export default DetailedPage
