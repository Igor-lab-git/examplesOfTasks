
import {Footer} from "../widgets/Footer";
import {Header} from "../widgets/Header";
import {AppRouting} from "./routing";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <AppRouting/>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
