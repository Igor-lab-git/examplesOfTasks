import {Link, useParams} from "react-router-dom";
import {
    useGetMovieByIdQuery,
    useGetPersonByIdQuery,
    useGetSequelsPrequelsQuery
} from "../../app/store/moviesApi.ts";
import {ErrorMessage} from "../../shared/ui/ErrorMessage";
import VideoPlayer from "../../shared/ui/VideoPlayer/VideoPlayer.tsx";
import NavigationPage from "../../shared/ui/NavigationPage/NavigationPage.tsx";

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
    // console.log(personsQuery.data)

    if(filmQuery.isLoading || sequelsQuery.isLoading || personsQuery.isLoading) return <p>Loading...</p>
    if(filmQuery.error || personsQuery.error) return <ErrorMessage/>

  return (
      <div>
        <NavigationPage title={filmQuery.data?.nameRu ? filmQuery.data?.nameRu : filmQuery.data?.nameOriginal}/>
          
          <div>
              <div>
                  <img src={filmQuery.data?.posterUrl} alt=""/>
              </div>
              <div>
                  <h2>Год</h2>
                  {filmQuery.data?.year}
              </div>
              <div>
                  <h2>Страна</h2>
                  {filmQuery.data?.countries.map((countryItem, index) => (
                      <span key={index}>{countryItem.country}</span>
                  ))}
              </div>
              <div>
                  <h2>Жанры</h2>
                  {filmQuery.data?.genres.map((countryItem, index) => (
                      <span key={index}>{countryItem.genre}</span>
                  ))}
              </div>
              <div>
                  <h2>Режисёры</h2>
                  {personsQuery.data?.filter((staff) => staff.professionText === "Режиссеры").map(({nameRu}) => (
                      <span key={nameRu}>{nameRu}</span>
                  ))}
              </div>

              <div>
                  <h2>Продолжительность</h2>
                  <span>{filmQuery.data?.filmLength} мин.</span>
              </div>
              <div>
                  <h2>Описание</h2>
                  <p>{filmQuery.data?.description ? filmQuery.data?.description : "Описание отсутствует"}</p>
              </div>
          </div>

          <div>
              <h2>В главных ролях</h2>
              {personsQuery.data?.filter((staff) => staff.professionText === "Актеры").map(({nameRu}) => (
                  <span key={nameRu}>{nameRu}</span>
              )).slice(1, 15)}
          </div>

          <div>
              webUrl
              <h2>Перейти по ссылке</h2>
              <a href={filmQuery.data?.webUrl} target="_blank" rel="noopener noreferrer">Кинопоиск</a>
              <a href={`https://www.imdb.com/title/${filmQuery.data?.imdbId}`} target="_blank" rel="noopener noreferrer">Imdb</a>
          </div>

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
  )
};

export default DetailedPage
