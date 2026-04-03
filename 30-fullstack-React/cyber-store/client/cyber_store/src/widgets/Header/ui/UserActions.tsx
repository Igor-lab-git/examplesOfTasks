import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import basketIcon from "../../../shared/assets/icons/header/cart-icon.svg";
import userAdminPanel from "../../../shared/assets/icons/header/user-admin-icon.svg";
import userSignInIcon from "../../../shared/assets/icons/header/user-sign-in-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store/store.ts";
import { logOutUser } from "../../../app/store/redusers/userSlice.ts";
import style from "./Header.module.scss";

const UserActions = () => {
    const dispatch = useDispatch();
    
    const { user } = useSelector((state: RootState) => state.user);
    const {totalItems} = useSelector((state: RootState) => state.cart);
    
    const handleLogOut = () => {
        dispatch(logOutUser());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const userName = user ? user?.email.split("@")[0] : "";
    const hasCartItems = totalItems !== 0;

    return (
        <div className={style.containerUserActions}>
            <Link 
                title={userName}
                className={style.basketLink} 
                to={pathRouter.BASKET_PATH}>
                <img src={basketIcon} alt=""/>

                {hasCartItems && ( 
                    <span className={style.basketCountItems}>
                        {totalItems}
                    </span>
                )}
            </Link>

            <Link 
                title={userName}
                className={style.useSignLink}
                to={pathRouter.AUTH_PATH}>
                    <img src={userSignInIcon} alt=""/>
                    <span className={`${userName ? style.userActive : ""}`}></span>
            </Link>

            {user?.role === "ADMIN" && (
                <Link className={style.useAdminLink} to={pathRouter.ADMIN_PATH}>
                    <img src={userAdminPanel} alt=""/>
                </Link>
            )}

            {userName && (
                <button onClick={handleLogOut}>Выйти</button>
            )}
        </div>
    )
};

export default UserActions