import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import userAdminPanel from "../../../shared/assets/icons/header/user-admin-icon.svg";
import {useUserActions} from "./model/hooks/useUserActions.ts";
import style from "./UserActions.module.scss";


const AdminLink = () => {
    const {role} = useUserActions();
    const isAdmin = role === "ADMIN";

    return (
        <>
            {isAdmin && (
                <Link className={style.useAdminLink} to={pathRouter.ADMIN_PATH}>
                    <img src={userAdminPanel} alt=""/>
                </Link>
            )}
        </>
    )
};

export default AdminLink;
