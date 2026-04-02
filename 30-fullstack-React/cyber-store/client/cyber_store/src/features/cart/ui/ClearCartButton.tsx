import type { JSX } from "react";
import { clearCart} from "../../../app/store/redusers/cartSlice";
import { useDispatch } from "react-redux";
import style from "./cart.module.scss";


const ClearCartButton = (): JSX.Element => {
    const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <button
          className={style.clear_cart_button}
          onClick={handleClearCart}>
          Очистить карзину
      </button>
    </>
  )
}

export default ClearCartButton;
