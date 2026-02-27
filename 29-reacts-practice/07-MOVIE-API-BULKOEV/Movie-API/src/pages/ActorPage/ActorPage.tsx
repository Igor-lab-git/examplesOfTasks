import { ContainerPages } from "../../shared/ui/ContainerPages";
import "../../app/styles/main.scss";
import style from "./ActorPage.module.scss";
import { NavigationPage } from "../../shared/ui/NavigationPage";
import { useGetActorByIdQuery } from "../../app/store/moviesApi";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../shared/ui/ErrorMessage";
import ActorPoster from "./ui/ActorPoster";
import ActorName from "./ui/ActorName";
import ActorBiography from "./ui/ActorBiography";
import ActorFilmography from "./ui/ActorFilmography";
import Preloader from "../../shared/ui/Preloader/Preloader";

const ActorPage = () => {
  const {id} = useParams();
  const numberId = Number(id);

  const {data, error, isLoading} = useGetActorByIdQuery({id: numberId}, {skip: isNaN(numberId)});

  if(error) return <ErrorMessage />;
  if(isLoading) return <Preloader />;
  
  return (
    <>
    <ContainerPages>
      <div className={`${style.homePage} containerMain`}>
        <NavigationPage title={data?.nameRu ? data?.nameRu : data?.nameEn}/>
        <div className={style.containerInfo}>
          <ActorPoster poster={data?.posterUrl} nameRu={data?.nameRu} nameEn={data?.nameEn}/>
          <div>
            <ActorName nameRu={data?.nameRu} nameEn={data?.nameEn}/>
            <ActorBiography personData={data}/>
          </div>
        </div>
          <ActorFilmography films={data?.films}/>
      </div>
    </ContainerPages>
    </>
  );
};
// Filmography
export default ActorPage;
