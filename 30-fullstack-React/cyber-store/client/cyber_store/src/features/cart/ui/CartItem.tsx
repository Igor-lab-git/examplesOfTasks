import type { JSX } from "react";
import { Link } from "react-router-dom";
import {
  decrementItem,
  incrementItem,
  removeItem,
  type ICartItem,
} from "../../../app/store/redusers/cartSlice";
import pathRouter from "../../../shared/constants/pathRouter";
import { useDispatch } from "react-redux";
import incrementButtonIcon from "../../../shared/assets/icons/basket-page/increment-icon.svg";
import decrementButtonIcon from "../../../shared/assets/icons/basket-page/decrement-icon.svg";
import removeButtonIcon from "../../../shared/assets/icons/basket-page/remove-icon.svg";
import style from "./cart.module.scss";
import "../../../app/styles/main.scss";

interface ICartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: ICartItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(incrementItem({ id: item.id }));
  };

  const decrementtCount = () => {
    dispatch(decrementItem({ id: item.id }));
  };

  const removeDevice = () => {
    dispatch(removeItem({ id: item.id }))
  };

  return (
    <li className={style.item_device}>
      <div className={style.item_device_container}>
        <Link className={style.item_device_link} to={`${pathRouter.DEVICE_PATH}/${item.id}`}>
          <img 
            className={style.item_device_image} 
            src={item.img} 
            alt={`${item.name.split(" ")[0]} ${item.name.split(" ")[1]}`} />
          <h2 className={style.item_device_title}>{item.name}</h2>
        </Link>
        <div className={style.item_container_controls}>

          <div className={style.item_wrapper_btn_controls}>
            <button className={style.item_btn_decrement} onClick={decrementtCount}>
              <img src={decrementButtonIcon} alt="" />
            </button>

            <span className={style.item_count_device}>{item.quantity}</span>

            <button className={style.item_btn_increment} onClick={incrementCount}>
              <img src={incrementButtonIcon} alt="" />
            </button>
          </div>

          <span>₽ {item.price}</span>

          <button onClick={removeDevice} className={style.item_btn_remove_items}>
            <img src={removeButtonIcon} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
