import type { JSX } from "react"
import useButtonAddToCart from "../model/useButtonAddToCart";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import style from "./ButtonAddToCart.module.scss";

interface IButtonAddToCart {
    device: IDevice;
};

const ButtonAddToCart = ({device}: IButtonAddToCart): JSX.Element => {
    const { handleAddToCart } =useButtonAddToCart();
  return (
    <>
        <button
            className={style.button_add_to_cart}
            onClick={() => handleAddToCart(device)}>
            купить сейчас
        </button>
    </>
  )
}

export default ButtonAddToCart;
