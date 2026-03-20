import type { JSX } from "react";
import { Link } from "react-router-dom";
import logo from "../../../shared/assets/icons/logo/logo.svg";
import "../../../app/styles/main.scss";
import pathRouter from "../../../shared/constants/pathRouter";

const Header = (): JSX.Element => {


  return (
    <div className={`container-main`}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Link to={pathRouter.ADMIN_PATH}>Админ панель</Link>
      <Link to={pathRouter.AUTH_PATH}>Войти</Link>
      
    </div>
  );
};

export default Header;
