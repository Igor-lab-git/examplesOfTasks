import {Link, useParams} from "react-router-dom";
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

const DetailedPage = () => {

    const { id } = useParams();
    const movieId = Number(id);
    // console.log("DetailedPage загружен с ID:", id);
    // console.log(id)

    const filmQuery = useGetMovieByIdQuery({ id: movieId });
    const sequelsQuery = useGetSequelsPrequelsQuery({ id: movieId });
    const personsQuery = useGetPersonByIdQuery({ id: movieId });
    console.log(filmQuery.data)
    // console.log(sequelsQuery.data)
    console.log(personsQuery.data, "DetailedPage")

    if(filmQuery.isLoading || sequelsQuery.isLoading || personsQuery.isLoading) return <p>Loading...</p>
    if(filmQuery.error || personsQuery.error) return <ErrorMessage/>

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

          <div>
              {filmQuery.data?.kinopoiskId && <VideoPlayer movieId={filmQuery.data?.kinopoiskId}/>}
          </div>

          <div>
              <h3>Сиквелы, приквелы и ремейки</h3>
              <ul>
                  {sequelsQuery?.data && sequelsQuery?.data.map((sequel) => (
                      <li key={sequel.filmId}>
                          <img src={sequel.posterUrl} alt={sequel.nameEn}/>
                          <a href={`https://www.kinopoisk.ru/film/${sequel.filmId}/`} target="_blank" rel="noopener noreferrer">
                              <span>{sequel.nameRu}</span>
                          </a>
                          <Link to={`/movie/${sequel.filmId}`}>
                              {sequel.nameRu}
                          </Link>
                          <span>{sequel.relationType}</span>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
        </ContainerPages>
  )
};

export default DetailedPage
