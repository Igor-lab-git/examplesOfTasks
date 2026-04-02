import type {JSX} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../../../app/store/store";
import style from "./cart.module.scss";
import OrderButton from "./OrderButton.tsx";

const CartSummary = (): JSX.Element => {
    const {totalItems, totalPrice} = useSelector((state: RootState) => state.cart);
    return (
        <div className={style.container_summary}>
            <h3 className={style.summary_title}>Итоги заказа</h3>
            <div className={style.wrapper_body}>

                <form className={style.summary_form} action="#">
                    <div className={style.summary_field}>
                        <label className={style.summary_label} htmlFor="promo-input">Код скидки / промо-код</label>
                        <input className={style.summary_input} type="text" id="promo-input" placeholder="Код"/>
                    </div>

                    <div className={style.summary_field}>
                        <label className={style.summary_label} htmlFor="bonus-input">Номер вашей бонусной карты</label>
                        <input className={style.summary_input} type="text" id="bonus-input"
                               placeholder="Введите номер карты"/>
                    </div>
                </form>

                <div className={style.summary_container_calculation}>
                    <div className={style.summary_calculation_row}>
                        <span className={style.summary_row_label}>Предполагаемый налог</span>
                        <span className={style.summary_row_value}>0</span>
                    </div>

                    <div className={style.summary_calculation_row}>
                        <span className={style.summary_row_label}>Общее количество товаров</span>
                        <span className={style.summary_row_value}>{totalItems}</span>
                    </div>

                    <div className={style.summary_calculation_row}>
                        <span className={style.summary_row_label}>Итого</span>
                        <span className={style.summary_row_value}>₽ {totalPrice}</span>
                    </div>
                </div>

                <OrderButton />

            </div>
        </div>
    );
};

export default CartSummary;
