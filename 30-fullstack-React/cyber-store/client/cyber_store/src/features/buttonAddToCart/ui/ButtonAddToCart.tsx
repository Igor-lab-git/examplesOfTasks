import type { JSX } from "react"
import useButtonAddToCart from "../model/useButtonAddToCart";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";

interface IButtonAddToCart {
    device: IDevice;
};

const ButtonAddToCart = ({device}: IButtonAddToCart): JSX.Element => {
    const { handleAddToCart } =useButtonAddToCart();
  return (
    <>
        <button onClick={() => handleAddToCart(device)}>купить сейчас</button>
    </>
  )
}

export default ButtonAddToCart;
