import React, {type JSX, useCallback, useState} from "react";
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
import { NotificationModal } from "../../../../shared/ui/index.ts";
import validateDeviceForm from "../../lib/validateDeviceForm.ts";

interface ICreateDeviceModal {
    visibleDeviceModal: boolean;
    closeModal: () => void;
};

const CreateDeviceModal = ({visibleDeviceModal, closeModal}: ICreateDeviceModal): JSX.Element => {
    const [typeId, setTypeId] = useState<string>("");
    const [brandId, setBrandId] = useState<string>("");
    const [nameDevice, setNameDevice] = useState<string>("");
    const [priceDevice, setPriceDevice] = useState<number>(0);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [messageModal, setMessageModal] = useState<string>("");
    const [typeMessageModal, setTypeMessageModal] = useState<"success" | "error">("success");

    const {addInfoDevice, changeInfoDevice, deleteInfo, resetInfoDevice, infoDevice} = useInfoDevice();
    const {selectFiles, selectFile, file, fileList, resetFile} = useSelectFile();

    const {data: dataType} = useGetAllTypesQuery();
    const {data: dataBrand} = useGetAllBrandsQuery();
    const [createDevice, {data}] = useCreateDeviceMutation();

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

        const errors = validateDeviceForm({typeId, brandId, nameDevice, priceDevice});

        if(errors && errors.length > 0) {
            setMessageModal(errors.join(", "));
            setIsOpenModal(true);
            setTypeMessageModal("error");
            return;
        };

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

        // formData.append("info", JSON.stringify(infoDevice));

        // Убираем id из характеристик
        const infoWithoutId = infoDevice.map(item => ({
            title: item.title,
            description: item.description
        }));

        formData.append("info", JSON.stringify(infoWithoutId));

        try {
            await createDevice(formData).unwrap();
            setMessageModal(`Девайс ${nameDevice} был успешно создан и добавлен в базу данных 😊`);
            setIsOpenModal(true);
            setTypeMessageModal("success");
            resetForm();
            return;
        } catch(error) {
            console.log(error);
            setMessageModal(`Ошибка ${error} 🤔`);
            setIsOpenModal(true);
            setTypeMessageModal("error");
        } finally {
            console.log(data, "data CREATEDEVICE");
        };

        resetForm();
    };

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    return (
        <>
        <NotificationModal 
              isOpenModal={isOpenModal}
              messageModal={messageModal}
              typeMessageModal={typeMessageModal}
              handleCloseModal={handleCloseModal}/>
            <div className={`${style.overlay} ${!visibleDeviceModal ? style.show : ""}`}>
                <div className={style.modal}>
                    <CloseButton onClose={closeModal}/>
                    <span className={style.modal_title}>Добавить новое устройсто</span>
                    <form className={style.form} action="#" onSubmit={addDevice}>
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
                            <label 
                                className={style.input_file_lable}
                                htmlFor="main-file">
                                <span>Главное изображение</span>
                            <input
                                id="main-file"
                                className={style.input_file}
                                type="file"
                                onChange={selectFile}/>
                            </label>

                            <label
                                className={style.input_file_lable}
                                htmlFor="additional-files">
                                    <span>Дополнительные изображения</span>
                            <input
                                id="additional-files"
                                className={style.input_file}
                                type="file"
                                multiple
                                onChange={selectFiles}/>
                            </label>
                        </div>

                        <div className={style.wrapper_description}>
                            <button
                                className={style.button_add_description}
                                type="button"
                                onClick={addInfoDevice}>
                                Добавить свойство
                            </button>
                            <DeviceInfoFields 
                                infoDevice={infoDevice} 
                                changeInfoDevice={changeInfoDevice}
                                deleteInfo={deleteInfo}/>
                        </div>
                        <button
                            className={style.button_submit_form}
                            type="submit">
                            Добавить новый девайс
                        </button>
                        <input
                            className={style.input_button_reset}
                            type="reset"
                            value="Очистить форму">
                        </input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateDeviceModal;
