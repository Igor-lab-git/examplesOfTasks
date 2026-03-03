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
import { useContext } from "react";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext";

const ActorPage = () => {
  const {id} = useParams();
  const context = useContext(ThemeModeContext);
  const numberId = Number(id);
  
  if (!context) {
    throw new Error("SwitchingThemes must be used within ThemeProvider");
  };
  
  const { theme } = context;
  
  const {data, error, isLoading} = useGetActorByIdQuery({id: numberId}, {skip: isNaN(numberId)});

  if(error) return <ErrorMessage />;
  if(isLoading) return <Preloader />;
  
  return (
    <>
    <ContainerPages>
      <div className={`${style.homePage} ${theme === "dark" ? style.homePageDark : ""} containerMain`}>
        <NavigationPage title={data?.nameRu ? data?.nameRu : data?.nameEn}/>
        <div className={style.containerInfo}>
          <ActorPoster poster={data?.posterUrl} nameRu={data?.nameRu} nameEn={data?.nameEn}/>
          <div>
            <ActorName nameRu={data?.nameRu} nameEn={data?.nameEn} theme={theme}/>
            <ActorBiography personData={data} theme={theme}/>
          </div>
        </div>
          <ActorFilmography films={data?.films} theme={theme}/>
      </div>
    </ContainerPages>
    </>
  );
};
// Filmography
export default ActorPage;
