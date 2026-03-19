import {type JSX} from "react";
import { Route, Routes} from "react-router-dom";
import {HomePage} from "../../../pages/HomePage";
import pathRouter from "../../../shared/constants/pathRouter";
import { DevicePage } from "../../../pages/DevicePage";
import { AdminPage } from "../../../pages/AdminPage";
import { BasketPage } from "../../../pages/BasketPage";
import { AuthPage } from "../../../pages/AuthPage";
// import { RegistrationPage } from "../../../pages/RegistrationPage";



const AppRouter = (): JSX.Element => {
    const isAuth = true;

    return (
        <>
         <Routes>
            {isAuth && (
                <Route path={pathRouter.ADMIN_PATH} element={<AdminPage />} />
            )}
            <Route path={pathRouter.HOME_PATH} element={<HomePage />} />
            <Route path={pathRouter.BASKET_PATH} element={<BasketPage />} />
            <Route path={pathRouter.AUTH_PATH} element={<AuthPage />} />
            {/* <Route path={pathRouter.REGISTRATION_PATH} element={<RegistrationPage />}/> */}
            <Route path={`${pathRouter.DEVICE_PATH}/:id`} element={<DevicePage />} />
        </Routes>
        </>
    )

}

export default AppRouter;