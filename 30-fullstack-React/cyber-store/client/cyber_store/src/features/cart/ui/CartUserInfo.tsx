import { type RootState } from "../../../app/store/store.ts";
import { Link } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import { useSelector } from "react-redux";

const CartUserInfo = () => {
    const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <div>
        <h3>Способ оплаты</h3>
        {!user || user === null ? (
          <>
            <Link to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
            <span>чтобы выбрать способ оплаты</span>
          </>
        ) : (
          <div>
            <a href="#">Способ оплаты</a>
          </div>
        )}
      </div>
      
      <div>
        <h3>Мои данные</h3>
        {!user || user === null ? (
          <>
            <Link to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
            <span>чтобы оформить заказ</span>
          </>
        ) : (
          <div>
            <img src="" alt="" />
            <span>{user.email.split("@")[0]}</span>
            <span>{user.email}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CartUserInfo;
