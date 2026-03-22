import {type JSX} from "react";
import { Route, Routes} from "react-router-dom";
import {HomePage} from "../../../pages/HomePage";
import pathRouter from "../../../shared/constants/pathRouter";
import { DevicePage } from "../../../pages/DevicePage";
import { AdminPage } from "../../../pages/AdminPage";
import { BasketPage } from "../../../pages/BasketPage";
import { AuthPage } from "../../../pages/AuthPage";
import {AboutPage} from "../../../pages/AboutPage";
import {ContactUsPage} from "../../../pages/ContactUsPage";
import {BlogPage} from "../../../pages/BlogPage";
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

            <Route path={pathRouter.ABOUT_PATH} element={<AboutPage />} />
            <Route path={pathRouter.CONTACT_PATH} element={<ContactUsPage />} />
            <Route path={pathRouter.BLOG_PATH} element={<BlogPage />} />


            <Route path={pathRouter.BASKET_PATH} element={<BasketPage />} />
            <Route path={pathRouter.AUTH_PATH} element={<AuthPage />} />
             <Route path={pathRouter.REGISTRATION_PATH} element={<AuthPage />}/>
            <Route path={`${pathRouter.DEVICE_PATH}/:id`} element={<DevicePage />} />
        </Routes>
        </>
    )

}

export default AppRouter;