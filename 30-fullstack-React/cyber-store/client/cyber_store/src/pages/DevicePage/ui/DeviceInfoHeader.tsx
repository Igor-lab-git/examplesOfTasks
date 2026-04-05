import {type JSX} from "react";
import style from "./DevicePage.module.scss";

interface IDeviceInfoHeader {
    name?: string;
    price?: number;
};

const DeviceInfoHeader = ({name, price}: IDeviceInfoHeader): JSX.Element => {
    return (
        <div className={style.wrapper_info_header}>
            <h2 className={style.title_device}>{name}</h2>
            <span className={style.price_device}>₽ {price}</span>
        </div>
    )
};

export default DeviceInfoHeader;