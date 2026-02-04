import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDo from "./components/ToDo";
import ContextTaskProvaider from "./context/ContextTaskProvaider";
import DetailedTaskPage from "./pages/DetailedTaskPage";
// import TasksPage from "./pages/TasksPage";
import { PageNotFount } from "./pages/PageNotFount";

const App = () => {
  return (
    <BrowserRouter>
      <ContextTaskProvaider>
        <Routes>
          <Route>
            <Route path="/" element={<ToDo />}/>
            <Route path="task/:taskId" element={<DetailedTaskPage />}/>
            <Route path="/*" element={<PageNotFount />}/>
          </Route>
        </Routes>
      </ContextTaskProvaider>
    </BrowserRouter>
  );
};

export default App;
