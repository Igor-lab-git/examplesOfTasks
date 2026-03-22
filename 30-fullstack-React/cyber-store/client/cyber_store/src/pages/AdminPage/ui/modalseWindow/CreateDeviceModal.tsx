import {type JSX, useState} from "react";
import style from "../AdminPage.module.scss";
import {useGetAllBrandsQuery, useGetAllTypesQuery} from "../../../../app/store/redusers/cyberStoreApi";

interface ICreateDeviceModal {
    visibleDevice: boolean;
    toggleDeviceModal: () => void;
};

interface IInfoDevice {
    title: string,
    description: string,
    number: number
}

const CreateDeviceModal = ({visibleDevice, toggleDeviceModal}: ICreateDeviceModal): JSX.Element => {

    const [typeId, setTypeId] = useState<string>("");
    const [brandId, setBrandId] = useState<string>("");
    const [nameDevice, setNameDevice] = useState<string>("");
    const [priceDevice, setPriceDevice] = useState<number>(0);
    const [infoDevice, setInfoDevice] = useState<IInfoDevice[] | []>([]);

    const addInfoDevice = () => {
        setInfoDevice([...infoDevice, {title: "", description: "", number: Date.now()}])
    };

    const deleteInfo = (id: number) => {
        setInfoDevice(infoDevice.filter((info) => info.number !== id))
    };


    const {data: dataType} = useGetAllTypesQuery();
    const {data: dataBrand} = useGetAllBrandsQuery();

    // console.log(dataType);
    // console.log(typeId);
    // console.log(brandId);
    console.log(infoDevice);


    return (
        <div className={`${style.overlay} ${visibleDevice ? style.show : ""}`}>
            <div className={style.modal}>
                <button onClick={() => toggleDeviceModal()}>❌</button>
                <h1>CreateDeviceModal</h1>
                <select
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
                    name="brand"
                    id=""
                    value={brandId}
                    onChange={(e) => setBrandId(e.target.value)}>
                    <option>Выдерети бранд девайса</option>
                    {dataBrand && dataBrand.data.map(({id, name}) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
                <form action="#">
                    <input
                        value={nameDevice}
                        onChange={(e) => setNameDevice(e.target.value)}
                        type="text"
                        placeholder="Название девайса..."/>
                    <input
                        value={priceDevice}
                        onChange={(e) => setPriceDevice(Number(e.target.value))}
                        type="number"
                        placeholder="Цена девайса..."/>
                    <input type="file" placeholder="Главная картинка"/>
                    <input type="file" placeholder="Доп картинка"/>

                    <div>
                        <h2>Добавить характерискику</h2>
                        <button onClick={addInfoDevice}>Добавить</button>
                        {infoDevice.map(info => (
                            <div key={info.number}>
                                <input
                                    value={info.title}
                                    type="text"
                                    placeholder="Введите название"/>
                                <input
                                    value={info.description}
                                    type="text"
                                    placeholder="Введите описание"/>
                                <button onClick={() => deleteInfo(info.number)}>Удалить</button>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDeviceModal;
