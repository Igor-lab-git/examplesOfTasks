import {Footer} from "../widgets/Footer";
import {Header} from "../widgets/Header";
import {AppRouter} from "./routing";
import {BrowserRouter} from "react-router-dom";
import { useEffect } from "react";
import { useCheckAuthQuery } from "./store/redusers/cyberStoreApi.ts";
import { useDispatch } from "react-redux";
import { logOutUser, setUser } from "./store/redusers/userSlice.ts";

const App = () => {
    const dispatch = useDispatch();

    const {data, error} = useCheckAuthQuery();

    if (data) {
        console.log('✅ Пользователь:', data.user);
    };
    
        useEffect(() => {
            if (data?.user) {
                dispatch(setUser(data.user));  // ✅ правильно
            }
        }, [data, dispatch]);

     useEffect(() => {
        if (error && 'status' in error && error.status === 401) {
            // Чистим localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(logOutUser());
        }
    }, [error, dispatch]);
    
    // if (isLoading) {
    //     return <div>Загрузка...</div>;
    // }

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
