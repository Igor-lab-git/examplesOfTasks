import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import basketIcon from "../../../shared/assets/icons/header/cart-icon.svg";
import userAdminPanel from "../../../shared/assets/icons/header/user-admin-icon.svg";
import userSignInIcon from "../../../shared/assets/icons/header/user-sign-in-icon.svg";
import style from "./Header.module.scss"

const UserActions = () => {
    const isAdmin = false;
    return (
        <div className={style.containerUserActions}>
            <Link className={style.basketLink} to={pathRouter.BASKET_PATH}>
                <img src={basketIcon} alt=""/>
            </Link>

            {isAdmin ? (
                <Link className={style.useAdminLink} to={pathRouter.ADMIN_PATH}>
                    <img src={userAdminPanel} alt=""/>
                </Link>
            ) : (
                <Link className={style.useSignLink} to={pathRouter.AUTH_PATH}>
                    <img src={userSignInIcon} alt=""/>
                </Link>
            )}
        </div>
    )
};

export default UserActions