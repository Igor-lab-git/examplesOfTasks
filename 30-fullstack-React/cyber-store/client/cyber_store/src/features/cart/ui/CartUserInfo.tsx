import { type RootState } from "../../../app/store/store.ts";
import { Link } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import { useSelector } from "react-redux";
import style from "./cart.module.scss";
import personIcon from "../../../shared/assets/icons/basket-page/person_icon.svg";

const CartUserInfo = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const isAuthenticated  = !!user;

    const userProfile = user?.email.split("@")[0] || "Пользователь";

  return (
    <div   className={style.container_user_info}>
      <div className={style.container_user_info_payment}>
        <h3>Способ оплаты</h3>
        {!isAuthenticated ? (
          <div className={style.wrapper_login_user}>
            <Link className={style.login_link_hint} to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
            <span> чтобы выбрать способ оплаты</span>
          </div>
        ) : (
          <div>
            <a href="#">Способ оплаты</a>
          </div>
        )}
      </div>
      
      <div className={style.container_user_info_profile}>
        <h3>Мои данные</h3>
        {!isAuthenticated ? (
          <div className={style.wrapper_login_user}>
            <Link className={style.login_link_hint} to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
            <span> чтобы оформить заказ</span>
          </div>
        ) : (
          <div className={style.wrapper_person}>
            <img src={personIcon} alt="" />
            <span>{userProfile.toUpperCase()}</span>
            <span>{user?.email}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartUserInfo;
