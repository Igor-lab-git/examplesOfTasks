import type { JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store/store";
import style from "./cart.module.scss";

const CartSummary = (): JSX.Element => {
    const { totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  return (
    <div className={style.container_summary}>
      <h3 className={style.summary_title}>Итоги заказа</h3>
      <div>

        <form className={style.summary_form} action="#">
            <div className={style.summary_field}>
                <label className={style.summary_flabel} htmlFor="promo-input">Код скидки / промо-код</label>
                <input className={style.summary_input} type="text" id="promo-input" placeholder="Код" />
            </div>

            <div className={style.summary_field}>
                <label className={style.summary_label} htmlFor="bonus-input">Номер вашей бонусной карты</label>
                <input className={style.summary_input} type="text" id="bonus-input" placeholder="Введите номер карты" />
            </div>
        </form>
        
        <div>
            <div>
            <span>Предполагаемый налог</span>
            <span>0</span>
            </div>

            <div>
            <span>Общее количество товаров</span>
            <span>{totalItems}</span>
            </div>

            <div>
            <span>Итого</span>
            <span>{totalPrice}</span>
            </div>
        </div>


      </div>
    </div>
  );
};

export default CartSummary;
