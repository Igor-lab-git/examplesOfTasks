import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import UserStore from "./store/userStore";
import { Context } from "./context/Context";
import DeviceStore from "./store/DeviceStore";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
      <BrowserRouter>
      <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>

    </>
  );
}

export default App;
