import {Footer} from "../widgets/Footer";
import {Header} from "../widgets/Header";
import {AppRouter} from "./routing";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.ts";

const App = () => {


    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;
