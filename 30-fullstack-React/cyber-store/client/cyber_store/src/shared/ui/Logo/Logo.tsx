import {Link} from "react-router-dom";
import {type JSX} from "react";
import pathRouter from "../../constants/pathRouter.ts";
import logo from "../../assets/icons/logo/logo.svg";
import style from "./Logo.module.scss";

const Logo = (): JSX.Element => {
    return (
        <Link className={style.logoLink} to={pathRouter.HOME_PATH}>
            <img src={logo} alt=""/>
        </Link>
    )
};

export default Logo;

