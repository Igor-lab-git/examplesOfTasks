import {useState} from "react";
import {generateId} from "../../../shared/lib/generateId.ts";
import type {IInfoDevice} from "./adminTypes.ts";

const useInfoDevice = () => {
    const [infoDevice, setInfoDevice] = useState<IInfoDevice[] | []>([]);

    const addInfoDevice = () => {
        setInfoDevice([...infoDevice, {title: "", description: "", id: generateId()}]);
    };

    const changeInfoDevice = (key: string, value: string, id: string) => {
        setInfoDevice(infoDevice.map((info) => info.id === id ? {...info, [key]: value } : info));
    };

    const deleteInfo = (id: string) => {
        setInfoDevice(infoDevice.filter((info) => info.id !== id));
    };

    const resetInfoDevice = () => {
        setInfoDevice([]);
    }

    return {
        addInfoDevice,
        changeInfoDevice,
        deleteInfo,
        resetInfoDevice,
        infoDevice
    };
};

export default useInfoDevice;