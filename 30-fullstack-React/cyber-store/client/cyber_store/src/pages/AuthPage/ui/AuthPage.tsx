import { useLocation } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter";
import type { JSX } from "react";
import { AuthForm } from "../../../features/AuthForm";
import style from "./AuthPage.module.scss";

const AuthPage = (): JSX.Element => {
  const pathName = useLocation();

  const isAuthPathName = pathName.pathname === pathRouter.AUTH_PATH;

  return (
    <div className={style.container_form_auth}>
      <h1 className={style.title_page_auth}>{isAuthPathName ? "Войти" : "Создать аккаунт"}</h1>
      <div className={style.container_form_element}>
        <AuthForm isAuthPathName={isAuthPathName}/>
      </div>
    </div>
  );
};

export default AuthPage;

