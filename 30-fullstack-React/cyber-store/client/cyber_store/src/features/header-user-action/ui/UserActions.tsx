import { useDispatch } from "react-redux";
import { logOutUser } from "../../../app/store/redusers/userSlice.ts";
import BasketLink from "./BasketLink.tsx";
import AuthLink from "./AuthLink.tsx";
import AdminLink from "./AdminLink.tsx";
import {useUserActions} from "./model/hooks/useUserActions.ts";
import ButtonLogOut from "./ButtonLogOut.tsx";
import style from "./UserActions.module.scss";

const UserActions = () => {
    const dispatch = useDispatch();

    const { user } = useUserActions();

    const handleLogOut = () => {
        dispatch(logOutUser());
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const userName = user ? user?.email.split("@")[0] : "";

    return (
        <div className={style.containerUserActions}>
            <BasketLink
                userName={userName}/>

            <AuthLink
                userName={userName}/>

            <AdminLink />

            {userName && (
                <ButtonLogOut
                    handleLogOut={handleLogOut}>
                    {"Выйти"}
                </ButtonLogOut>
            )}
        </div>
    )
};

export default UserActions;