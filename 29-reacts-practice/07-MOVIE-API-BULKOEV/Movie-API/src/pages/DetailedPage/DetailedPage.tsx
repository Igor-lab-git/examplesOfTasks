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
import {type JSX} from "react";

const DetailedPage = (): JSX.Element => {

    const { id } = useParams();
    const movieId = Number(id);

    const filmQuery = useGetMovieByIdQuery({ id: movieId });
    const sequelsQuery = useGetSequelsPrequelsQuery({ id: movieId });
    const personsQuery = useGetPersonByIdQuery({ id: movieId });

    if(filmQuery.isLoading || sequelsQuery.isLoading || personsQuery.isLoading) return <p>Loading...</p>
    if(filmQuery.error || personsQuery.error) return <ErrorMessage/>

    // console.log(personsQuery);
    

  return (
      <ContainerPages>
            <div className={` ${style.homePage} containerMain`}>
                <NavigationPage title={filmQuery.data?.nameRu ? filmQuery.data?.nameRu : filmQuery.data?.nameOriginal}/>
            <div className={style.containerInfo}>
                <DetailedPoster 
                    poster={filmQuery.data?.posterUrl} 
                    nameRu={filmQuery.data?.nameRu }
                    nameOriginal={filmQuery.data?.nameOriginal}/>
            <div className={style.containerInfoBody}>
                <DetailedName nameRu={filmQuery.data?.nameRu} nameOriginal={filmQuery.data?.nameOriginal} year={filmQuery.data?.year}/>
                <DetailedDescription description={filmQuery.data?.description}/>
            <div className={style.containerInfoStaff}>
                <DetailedInfo 
                    year={filmQuery.data?.year} 
                    countriesArr={filmQuery.data?.countries}
                    genresArr={filmQuery.data?.genres}
                    filmLength={filmQuery.data?.filmLength}/>
                <DetailedDirectors staff={personsQuery.data}/>
            </div>
            </div>
            </div>
                <DetailedSourcelink webUrl={filmQuery.data?.webUrl} imdUrl={filmQuery.data?.imdbId}/>
                <VideoPlayer movieId={filmQuery.data?.kinopoiskId}/>
                <div>
                    <DetailedSequels sequels={sequelsQuery?.data}/>
                </div>
            </div>
        </ContainerPages>
  )
};

export default DetailedPage
