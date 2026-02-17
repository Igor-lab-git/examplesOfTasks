import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DetailedPage } from "../../pages/DetailedPage";
import { ActorPage } from "../../pages/ActorPage";
import { MOVIE_CONTENT_LIST, MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants";
import { TopRankingsPage } from "../../pages/TopRankingsPage";
import { GenresListPage } from "../../pages/GenresListPage";
import { ContentListPage } from "../../pages/ContentListPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailedPage />} />
        <Route path="/actorPage/:id" element={<ActorPage />} />

        {MOVIE_TOP_RANKINGS_LIST && MOVIE_TOP_RANKINGS_LIST.map(({id, path}) => (
          <Route key={id} path={path} element={<TopRankingsPage />}/>
        ))};

        <Route path="/category/:id" element={<GenresListPage/>}/>

        {MOVIE_CONTENT_LIST && MOVIE_CONTENT_LIST.map(({id, path}) => (
          <Route key={id} path={path} element={<ContentListPage />}/>
        ))};
        
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
