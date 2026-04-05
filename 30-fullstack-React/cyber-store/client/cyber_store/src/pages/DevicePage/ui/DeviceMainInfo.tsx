import type { JSX } from "react";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import DeviceInfoHeader from "./DeviceInfoHeader.tsx";
import DeviceSpecifications from "./DeviceSpecifications.tsx";
import {ButtonAddToCart} from "../../../features/buttonAddToCart";
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";

interface IDeviceMainInfo {
    device: IDevice;
};

const DeviceMainInfo = ({device}: IDeviceMainInfo): JSX.Element => {
  return (
    <article className={style.container_main_info}>
      <div>
          <DeviceInfoHeader name={device?.name} price={device?.price} />
      </div>
      <div>
          <DeviceSpecifications specifications={device?.info}/>
      </div>
        <ButtonAddToCart className={style.button_add_to_cart} device={device}/>
    </article>
  )
};

export default DeviceMainInfo;
