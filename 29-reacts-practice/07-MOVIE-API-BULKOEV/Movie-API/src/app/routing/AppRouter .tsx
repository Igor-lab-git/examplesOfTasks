import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { DetailedPage } from "../../pages/DetailedPage";
import { ActorPage } from "../../pages/ActorPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailedPage/:id" element={<DetailedPage />} />
        <Route path="/actorPage/:id" element={<ActorPage />} />
        <Route />
      </Routes>
    </>
  );
};

export default AppRouter;
