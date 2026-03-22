import {Link, useLocation} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import style from "./Header.module.scss";

const NavMenu =() => {

    const location = useLocation();
    console.log(location);

    const isActive = (pathName: string) => {
        const active = location.pathname === pathName;
        console.log(`Проверка: ${pathName} === ${location.pathname} = ${active}`);
        return active;
    }

    return (
        <div className={style.navMenuContainer}>
            <nav>
                <ul className={style.navMenuList}>
                    <li className={`${style.navMenuItem} ${isActive(pathRouter.HOME_PATH) ? style.isActive : ""}`} >
                        <Link to={pathRouter.HOME_PATH}>Главная</Link>
                    </li>
                    <li className={`${style.navMenuItem} ${isActive(pathRouter.ABOUT_PATH) ? style.isActive : ""}`}>
                        <Link to={pathRouter.ABOUT_PATH}>О нас</Link>
                    </li>
                    <li className={`${style.navMenuItem} ${isActive(pathRouter.CONTACT_PATH) ? style.isActive : ""}`}>
                        <Link to={pathRouter.CONTACT_PATH}>Контакты</Link>
                    </li>
                    <li className={`${style.navMenuItem} ${isActive(pathRouter.BLOG_PATH) ? style.isActive : ""}`}>
                        <Link to={pathRouter.BLOG_PATH}>Контакты</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavMenu;
