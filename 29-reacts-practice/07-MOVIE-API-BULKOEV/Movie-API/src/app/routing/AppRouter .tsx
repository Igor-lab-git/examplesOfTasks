import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DetailedPage } from "../../pages/DetailedPage";
import { ActorPage } from "../../pages/ActorPage";

// import { ContentPage } from "../../pages/ContentPage";
// import { MovieListTop } from "../../pages/MovieListTop";
// import { CategoryPage } from "../../pages/CategoryPage";
import { MOVIE_LIST, TOP_LIST } from "../../shared/lib/constants";
import { TopListMovies } from "../../pages/test/TopListMovies";
import { MovieListPage } from "../../pages/test/MovieListPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailedPage/:id" element={<DetailedPage />} />
        <Route path="/actorPage/:id" element={<ActorPage />} />

        {/* <Route path="/top-100" element={<MovieListTop type="top100"/>}/>
        <Route path="/top-250" element={<MovieListTop type="top250"/>}/>

        <Route path="/category/:slug" element={<CategoryPage/>}/>

        <Route path="/movies" element={<ContentPage type="movies"/>}/>
        <Route path="/series" element={<ContentPage type="series"/>}/>
        <Route path="/cartoon" element={<ContentPage type="cartoon"/>}/> */}

        {TOP_LIST.map((item) => (
          <Route key={item.id} path={item.url} element={<TopListMovies/>}/>
        ))}

        {MOVIE_LIST.map((item) => (
          <Route key={item.id} path={item.url} element={<MovieListPage/>}/>
        ))}
        
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
