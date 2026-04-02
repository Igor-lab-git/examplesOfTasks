import {type JSX} from "react";
import style from "./cart.module.scss";

const OrderButton = (): JSX.Element => {
    return (
        <>
            <button className={style.order_button}>Заказать</button>
        </>
    )
};

export default OrderButton;