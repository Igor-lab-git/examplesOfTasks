import {type JSX} from "react";
import type {IInfoDevice} from "../../../app/store/redusers/cyberStoreApi.ts";
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";

interface IDeviceDescription {
    description?: IInfoDevice[]
};

const DeviceDescription = ({description}: IDeviceDescription): JSX.Element => {
    return (
        <section className={style.description_section}>
            <div className={`container-main ${style.wrapper_inner}`}>
                <h3 className={style.description_title}>Подробности</h3>
                <ul className={`list-reset ${style.description_list}`}>
                    {description && description.map(({title, description}) => (
                        <li className={style.description_item}>
                            <h4 className={style.description_title}>{title}</h4>
                            <span className={style.description_details}>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default DeviceDescription;