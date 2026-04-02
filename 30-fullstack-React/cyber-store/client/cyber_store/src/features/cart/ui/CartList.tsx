import type { JSX } from "react";
import { type ICartItem} from "../../../app/store/redusers/cartSlice";
import ClearCartButton from "./ClearCartButton";
import style from "./cart.module.scss";
import CartItem from "./CartItem";
import "../../../app/styles/main.scss";

interface ICartList {
  items: ICartItem[];
};

const CartList = ({ items }: ICartList): JSX.Element => {

  return (
    <div className={style.container_devices_cart}>
      <ul className={`list-reset ${style.container_lists}`}>
        {items &&
          items.map((item: ICartItem) => (
            <CartItem key={item.id} item={item}  />
          ))}
      </ul>
      <ClearCartButton />
    </div>
  );
};

export default CartList;
