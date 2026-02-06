import { BrowserRouter } from "react-router-dom";
import { Header } from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer";
import { AppRouter } from "./routing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
