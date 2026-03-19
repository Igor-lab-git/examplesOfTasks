
import {Footer} from "../widgets/Footer";
import {Header} from "../widgets/Header";
import {AppRouter} from "./routing";
import {BrowserRouter} from "react-router-dom";

const App = () => {


    return (
        <>
            <BrowserRouter>
                <Header/>
                    <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
