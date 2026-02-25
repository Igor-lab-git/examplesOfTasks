import { ContainerPages } from "../../shared/ui/ContainerPages";
import "../../app/styles/main.scss";
import style from "./ActorPage.module.scss";
import { NavigationPage } from "../../shared/ui/NavigationPage";
import { useGetActorByIdQuery } from "../../app/store/moviesApi";
import { useParams } from "react-router-dom";

const ActorPage = () => {
  const staffIdParms = useParams();
  console.log(staffIdParms);
  console.log('window.location.href:', window.location.href);

  const {data} = useGetActorByIdQuery({id: 66539});

  console.log(data);
  
  return (
    <>
    <ContainerPages>
      <div className={`${style.homePage} containerMain`}>
        <NavigationPage />

      <h1>ActorPage</h1>
      </div>
    </ContainerPages>
    </>
  );
};

export default ActorPage;
