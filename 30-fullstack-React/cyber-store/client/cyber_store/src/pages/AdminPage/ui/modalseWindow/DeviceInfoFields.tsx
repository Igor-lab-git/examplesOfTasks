import {type JSX} from "react";
import type {IInfoDevice} from "../../model/adminTypes.ts";
import style from "../AdminPage.module.scss";

interface DeviceInfoFields {
    infoDevice: IInfoDevice[] | [];
    changeInfoDevice: (key: string, value: string, id: string) => void;
    deleteInfo: (id: string) => void;
};

const DeviceInfoFields = ({infoDevice, changeInfoDevice, deleteInfo}: DeviceInfoFields): JSX.Element => {
    return (
        <>
            {infoDevice.map((info) => (
                <div
                    className={style.wrapper_info_device}
                    key={info.id}>
                    <input
                        className={style.input_info_device}
                        value={info.title}
                        onChange={(e) => changeInfoDevice("title", e.target.value, info.id)}
                        type="text"
                        placeholder="Введите название"/>
                    <input
                        className={style.input_info_device}
                        value={info.description}
                        onChange={(e) => changeInfoDevice("description", e.target.value, info.id)}
                        type="text"
                        placeholder="Введите описание"/>
                    <button
                        className={style.button_info_device}
                        onClick={() => deleteInfo(info.id)}>
                        Удалить
                    </button>
                </div>
            ))}
        </>
    )
};

export default DeviceInfoFields;