import pathRouter from "../../../shared/constants/pathRouter.ts";
import userSignInIcon from "../../../shared/assets/icons/header/user-sign-in-icon.svg";
import {Link} from "react-router-dom";
import style from "./UserActions.module.scss";

interface IAuthLink {
    userName: string;
};

const AuthLink = ({userName}: IAuthLink) => {
    return (
        <>
            <Link
                title={userName}
                className={style.useSignLink}
                to={pathRouter.AUTH_PATH}>
                <img src={userSignInIcon} alt=""/>
                <span className={`${userName ? style.userActive : ""}`}></span>
            </Link>
        </>
    )
};

export default AuthLink;
