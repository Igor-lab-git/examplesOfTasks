import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DetailedPage } from "../../pages/DetailedPage";
import { ActorPage } from "../../pages/ActorPage";

import { ContentPage } from "../../pages/ContentPage";
import { MovieListTop } from "../../pages/MovieListTop";
import { CatigoryPage } from "../../pages/CatigoryPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailedPage/:id" element={<DetailedPage />} />
        <Route path="/actorPage/:id" element={<ActorPage />} />

        <Route path="/top-100" element={<MovieListTop type="top100"/>}/>
        <Route path="/top-250" element={<MovieListTop type="top250"/>}/>

        <Route path="/catigory:slug" element={<CatigoryPage/>}/>

        <Route path="/movie " element={<ContentPage type="movie"/>}/>
        <Route path="/series " element={<ContentPage type="series"/>}/>
        <Route path="/cartoon " element={<ContentPage type="cartoon"/>}/>
        
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
