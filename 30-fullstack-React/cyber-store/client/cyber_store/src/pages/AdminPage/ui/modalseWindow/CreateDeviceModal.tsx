import React, {type JSX, useState} from "react";
import {
    useCreateDeviceMutation,
    useGetAllBrandsQuery,
    useGetAllTypesQuery
} from "../../../../app/store/redusers/cyberStoreApi";
import useInfoDevice from "../../model/useInfoDevice.ts";
import useSelectFile from "../../model/useSelectFile.ts";
import style from "../AdminPage.module.scss";
import DeviceInfoFields from "./DeviceInfoFields.tsx";
import {CloseButton} from "../../../../shared/ui/CloseButton";

interface ICreateDeviceModal {
    visibleDeviceModal: boolean;
    closeModal: () => void;
};

const CreateDeviceModal = ({visibleDeviceModal, closeModal}: ICreateDeviceModal): JSX.Element => {
    const [typeId, setTypeId] = useState<string>("");
    const [brandId, setBrandId] = useState<string>("");
    const [nameDevice, setNameDevice] = useState<string>("");
    const [priceDevice, setPriceDevice] = useState<number>(0);

    const {addInfoDevice, changeInfoDevice, deleteInfo, resetInfoDevice, infoDevice} = useInfoDevice();
    const {selectFiles, selectFile, file, fileList, resetFile} = useSelectFile();

    const {data: dataType} = useGetAllTypesQuery();
    const {data: dataBrand} = useGetAllBrandsQuery();
    const [createDevice, {data}] = useCreateDeviceMutation();
    console.log(closeModal, "CreateDeviceModal")

    const resetForm = () => {
        setTypeId("");
        setBrandId("");
        setNameDevice("");
        setPriceDevice(0);
        resetInfoDevice();
        resetFile();

    };

    const addDevice = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("brandId", brandId);
        formData.append("typeId", typeId);
        formData.append("name", nameDevice);
        formData.append("price", `${priceDevice}`);

        if (file) {
            formData.append("img", file);
        };

        fileList.forEach(file => {
            if (file) formData.append("images", file);
        });

        formData.append("info", JSON.stringify(infoDevice));

        await createDevice(formData).unwrap();
        resetForm();
    };
    console.log(data, "data CREATEDEVICE");

    return (
        <div className={`${style.overlay} ${!visibleDeviceModal ? style.show : ""}`}>
            <div className={style.modal}>
                <CloseButton onClose={closeModal}/>
                <span className={style.modal_title}>Добавить новое устройсто</span>
                <form className={style.form} action="#">
                    <div className={style.wrapper_select_elements}>
                        <select
                            className={style.select_elements}
                            name="type"
                            id=""
                            value={typeId}
                            onChange={(e) => setTypeId(e.target.value)}
                            required>
                            <option>Выдерети тип девайса</option>
                            {dataType && dataType.data.map(({id, name}) => (
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </select>

                        <select
                            className={style.select_elements}
                            name="brand"
                            id=""
                            value={brandId}
                            onChange={(e) => setBrandId(e.target.value)}>
                            <option>Выдерети бранд девайса</option>
                            {dataBrand && dataBrand.data.map(({id, name}) => (
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={style.wrapper_input_fields}>
                        <div className={style.input_field}>
                            <input
                                className={style.input_name}
                                value={nameDevice}
                                onChange={(e) => setNameDevice(e.target.value)}
                                type="text"
                                placeholder="Название девайса..."/>
                        </div>

                        <div className={style.input_field}>
                            <input
                                className={style.input_price}
                                value={priceDevice}
                                onChange={(e) => setPriceDevice(Number(e.target.value))}
                                type="number"
                                placeholder="Цена устройства..."/>
                        </div>
                    </div>

                    <div className={style.wrapper_input_files}>
                        <input
                            className={style.input_file}
                            type="file"
                            onChange={selectFile}/>

                        <input
                            className={style.input_file}
                            type="file"
                            multiple
                            onChange={selectFiles}/>
                    </div>

                    <div className={style.wrapper_description}>
                        <button
                            className={style.button_add_description}
                            type="button"
                            onClick={addInfoDevice}>
                            Добавить свойство
                        </button>
                        <DeviceInfoFields infoDevice={infoDevice} changeInfoDevice={changeInfoDevice}
                                          deleteInfo={deleteInfo}/>
                    </div>
                    <button
                        className={style.button_submit_form}
                        onClick={addDevice}
                        type="submit">
                        Добавить новый девайс
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDeviceModal;
