import { useState, type JSX } from "react";
import style from "../AdminPage.module.scss";
import { useGetAllBrandsQuery, useGetAllTypesQuery } from "../../../../app/store/redusers/cyberStoreApi";

interface ICreateDeviceModal {
    visibleDevice: boolean;
    toggleDeviceModal: () => void;
};

const CreateDeviceModal = ({visibleDevice, toggleDeviceModal}: ICreateDeviceModal): JSX.Element => {

  const [ typeId, setTypeId ] = useState<string>("");
  const [ brandId, setBrandId ] = useState<string>("");
  const [ nameDevice, setNameDevice ] = useState<string>("");
  const [ priceDevice, setPriceDevice ] = useState<number>(0);
  const [ infoDevice, setInfoDevice ] = useState([]);

  const addnfoDevice = () => {
    setInfoDevice([...infoDevice, {title: "", description: "", number: Date.now()}])
  }
  

  const {data: dataType} = useGetAllTypesQuery();
  const {data: dataBrand} = useGetAllBrandsQuery();

  console.log(dataType);
  console.log( typeId);
  console.log( brandId);
  

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
            <button onClick={addnfoDevice}>
            Добавить
            </button>
            {addnfoDevice.map(info => (
              <input key={info.number} type="text" />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDeviceModal;
