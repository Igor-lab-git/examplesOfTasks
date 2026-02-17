import Carousel from "./Carousel";
import {type JSX} from "react";
import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage.tsx";
import {useHookContentQuery} from "../../features";
import HomeHeaderLink from "./ui/HomeHeaderLink.tsx";
import SectionCard from "./ui/SectionCard.tsx";
import style from "./HomePage.module.scss"
import "../../app/styles/main.scss";
import ContainerPages from "../../shared/ui/ContainerPages/ContainerPages.tsx";

const HomePage = (): JSX.Element => {

const {
    isLoading,
    isError,
    getTopPopularFilms,
    getTopBestFilms,
    getContentFilms,
    getContentSeries,
    getContentCartoon,} = useHookContentQuery();

const carouselFormatedContent = [
  {
    title: "Популярные фильмы",
    url: "/top-100",
    data: getTopPopularFilms.data?.items,
  },
  {
    title: "Лучшие фильмы",
    url: "/top-250",
    data: getTopBestFilms.data?.items,
  },
  {
    title: "Фильмы",
    url: "/movies",
    data: getContentFilms.data?.items,
  },
  {
    title: "Сериалы",
    url: "/series",
    data: getContentSeries.data?.items,
  },
  {
    title: "Мультфильмы",
    url: "/cartoon",
    data: getContentCartoon.data?.items,
  },
];

if(isLoading) return <h2>Загрузка данных с сервера...</h2>;

if(isError) return <ErrorMessage />;

  return (
    <ContainerPages>
        <div className={`${style.homePage} containerMain`} >
          {carouselFormatedContent && carouselFormatedContent.map(({data, title, url}, index) => (
            <section className={style.sectionContent} key={index}>
              <HomeHeaderLink title={title} url={url}/>
              <Carousel> 
                <SectionCard  movies={data}/>
              </Carousel>
            </section>
          ))}
        </div>
    </ContainerPages>
  )
};

export default HomePage
