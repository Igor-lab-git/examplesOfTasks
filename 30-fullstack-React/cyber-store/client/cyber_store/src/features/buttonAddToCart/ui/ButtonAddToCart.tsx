import type { JSX } from "react"
import useButtonAddToCart from "../model/useButtonAddToCart";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import style from "./ButtonAddToCart.module.scss";

interface IButtonAddToCart {
    device: IDevice;
    className?: string;
};

const ButtonAddToCart = ({device, className}: IButtonAddToCart): JSX.Element => {
    const { handleAddToCart } = useButtonAddToCart();

  return (
    <>
        <button
            className={`${style.button_add_to_cart} ${className}`}
            onClick={() => handleAddToCart(device)}>
            добавить в карзину
        </button>
    </>
  )
}

export default ButtonAddToCart;
