import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Context } from "./context/Context";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userApi.js";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      check().then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      }).finally(() => setLoading(false));
    }, 1500)

  }, []);

  if(loading) {
    return <Spinner animation={"grow"} />;
  };

  return (
      <>
          <BrowserRouter>
            <NavBar />
            <AppRouter />
          </BrowserRouter>
      </>
  );
});

export default App;
