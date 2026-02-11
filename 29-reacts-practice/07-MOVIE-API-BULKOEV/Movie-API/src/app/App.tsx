import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer";
import { AppRouter } from "./routing";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<div>Загрузка...</div>} persistor={persistStore}> */}

      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
  {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
