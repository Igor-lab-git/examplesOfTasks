import type { JSX } from "react";
import iconEmptyCart from "../../../shared/assets/images/basket-page/cart-empty.webp";
import pathRouter from "../../../shared/constants/pathRouter";
import { Link } from "react-router-dom";
import style from "./EmptyCart.module.scss";

const EmptyCart = (): JSX.Element => {
  return (
    <>
      <section className={style.section_empti}>
        <img className={style.section_empti_icon} src={iconEmptyCart} alt="" />
        <h2 className={style.section_empti_title}>В корзине пока пусто</h2>
        <p className={style.section_empti_invitation_text}>
          Загляните на главную — собрали там товары, которые могут вам
          понравиться
        </p>
        <Link className={style.section_empti_link_home} to={pathRouter.HOME_PATH}>перейти на главную</Link>
      </section>
    </>
  );
};

export default EmptyCart;
