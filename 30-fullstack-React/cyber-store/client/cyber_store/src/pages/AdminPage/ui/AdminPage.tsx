import { useState, type JSX } from 'react';
// import CreateBrandModal from './modalseWindow/CreateBrandModal';
import CreateTypeModal from './modalseWindow/CreateTypeModal';
import CreateDeviceModal from './modalseWindow/CreateDeviceModal';
import style from "./AdminPage.module.scss";

const AdminPage = (): JSX.Element => {

  // const [visibleType, setVisibleType] = useState<boolean>(true);
  // const [visibleBrand, setVisibleBrand] = useState<boolean>(true);
  const [visibleModal, setVisibleModal] = useState<boolean>(true);
  const [visibleDevice, setVisibleDevice] = useState<boolean>(true);

  // const toggleTypeModal = () => {
  //   setVisibleType(!visibleType);
  // };

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  // const toggleBrandModal = () => {
  //   setVisibleBrand(!visibleBrand);
  // };

  const toggleDeviceModal = () => {
    setVisibleDevice(!visibleDevice);
  };

  return (
    <div>
      <h1>Админ панель</h1>

      <div className={style.containerButton}>
        <button className={style.button_brand} onClick={() => toggleModal()}>Добавить брэнд устройства</button>
        <button className={style.button_type} onClick={() => toggleModal()}>Добавить тип устройства</button>
        <button className={style.button_device} onClick={() => toggleDeviceModal()}>Добавить устройство</button>
      </div>
      <CreateTypeModal visibleType={visibleModal} toggleTypeModal={toggleModal}/>
      {/* <CreateBrandModal visibleBrand={visibleBrand} toggleBrandModal={toggleModal}/> */}
      <CreateDeviceModal visibleDevice={visibleDevice} toggleDeviceModal={toggleDeviceModal}/>
    </div>
  )
}

export default AdminPage;
