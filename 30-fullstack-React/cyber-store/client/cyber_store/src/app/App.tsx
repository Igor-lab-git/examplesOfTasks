// import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { AppRouter } from "./routing";
import { BrowserRouter } from "react-router-dom";
import {useSetUserToStore} from "./model/useSetUserToStore.ts";
import {useLogOutUserAndClearLocalStorage} from "./model/useLogOutUserAndClearLocalStorage.ts";

const App = () => {

  useSetUserToStore();
  useLogOutUserAndClearLocalStorage();

  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        {/*<Footer />*/}
      </BrowserRouter>
    </>
  );
};

export default App;
