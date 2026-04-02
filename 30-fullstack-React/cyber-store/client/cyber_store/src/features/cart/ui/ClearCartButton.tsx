import type { JSX } from "react";
import { clearCart} from "../../../app/store/redusers/cartSlice";
import { useDispatch } from "react-redux";


const ClearCartButton = (): JSX.Element => {
    const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <button onClick={handleClearCart}>Очистить карзину</button>
    </div>
  )
}

export default ClearCartButton;
