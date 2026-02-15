import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer";
import { AppRouter } from "./routing";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
