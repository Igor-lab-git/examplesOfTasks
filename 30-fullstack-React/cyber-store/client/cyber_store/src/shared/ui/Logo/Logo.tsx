import logo from "../../assets/icons/logo/logo.svg";
import {Link} from "react-router-dom";
import {type JSX} from "react";
import pathRouter from "../../constants/pathRouter.ts";

const Logo = (): JSX.Element => {
    return (
        <Link to={pathRouter.HOME_PATH}>
            <img src={logo} alt=""/>
        </Link>
    )
};

export default Logo;

