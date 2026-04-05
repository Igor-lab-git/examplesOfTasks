import {type JSX} from "react";
import type {IInfoDevice} from "../../../app/store/redusers/cyberStoreApi.ts";
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";

interface IDeviceSpecifications {
    specifications?: IInfoDevice[]
}

const DeviceSpecifications = ({specifications}: IDeviceSpecifications): JSX.Element => {
    return (
        <ul className={`list-reset ${style.specifications_list}`}>
            {specifications?.map((item) => (
                <li className={style.specifications_item}>
                    <span className={style.specifications_title}>{item.title}:</span>
                    <span className={style.specifications_description}>{item.description}</span>
                </li>
            )).slice(0, 5)}
        </ul>
    )
};

export default DeviceSpecifications;