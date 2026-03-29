import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import basketIcon from "../../../shared/assets/icons/header/cart-icon.svg";
import userAdminPanel from "../../../shared/assets/icons/header/user-admin-icon.svg";
import userSignInIcon from "../../../shared/assets/icons/header/user-sign-in-icon.svg";
import style from "./Header.module.scss"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store/store.ts";
import { logOutUser } from "../../../app/store/redusers/userSlice.ts";

const UserActions = () => {
    const dispatch = useDispatch();
    
    const { user } = useSelector((state: RootState) => state.user);

    console.log(user)
    
    const handleLogOut = () => {
        dispatch(logOutUser());
        localStorage.removeItem('token');
            localStorage.removeItem('user');
    }

    return (
        <div className={style.containerUserActions}>
            <Link className={style.basketLink} to={pathRouter.BASKET_PATH}>
                <img src={basketIcon} alt=""/>
                <span>
                    {user ? user.email : ""}
                </span>
            </Link>
            <Link className={style.useSignLink} to={pathRouter.AUTH_PATH}>
                    <img src={userSignInIcon} alt=""/>
                </Link>

            {user?.role === "ADMIN" && (
                <Link className={style.useAdminLink} to={pathRouter.ADMIN_PATH}>
                    <img src={userAdminPanel} alt=""/>
                </Link>
            )}
            <button onClick={handleLogOut}>Выйти</button>
        </div>
    )
};

export default UserActions