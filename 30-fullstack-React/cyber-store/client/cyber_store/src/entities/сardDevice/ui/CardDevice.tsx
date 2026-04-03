import { type JSX } from "react";
import { Link } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import useCardDevice from "../model/useCardDevice";
import { ButtonAddToCart } from "../../../features/buttonAddToCart";
import style from "./CardDevice.module.scss";

interface ICardDevice {
    device: IDevice
};

const CardDevice = ({device}: ICardDevice): JSX.Element => {
    const {isFavorite,  setIsFavorite,} = useCardDevice();

    // console.log(device.img, "CardDevice");
    
    
  return (
    <>
      <article className={style.card_element}>
        <div>
          <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <Link 
            className={style.card_link}
            to={`${pathRouter.DEVICE_PATH}/${device.id}`}>
          <img 
            className={style.card_image}
            src={device.img} 
            alt={`картинка ${device.name}`} />
          <div className={style.card_wrapper_body}>
            <h3 className={style.card_title}>{device.name}</h3>
            <div className={style.card_wrapper_price}>
              <span>₽</span>
              <span>{device.price}</span>
            </div>
          </div>
        </Link>
        <ButtonAddToCart device={device}/>
      </article>
    </>
  );
};

export default CardDevice;
