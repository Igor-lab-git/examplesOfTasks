import { useState, type JSX } from 'react';
import style from "./AdminPage.module.scss"
import CreateBrandModal from './modalseWindow/CreateBrandModal';
import CreateTypeModal from './modalseWindow/CreateTypeModal';
import CreateDeviceModal from './modalseWindow/CreateDeviceModal';

const AdminPage = (): JSX.Element => {

  const [visibleType, setVisibleType] = useState<boolean>(true);
  const [visibleBrand, setVisibleBrand] = useState<boolean>(true);
  const [visibleDevice, setVisibleDevice] = useState<boolean>(true);

  const toggleTypeModal = () => {
    setVisibleType(!visibleType)
  }

  const toggleBrandModal = () => {
    setVisibleBrand(!visibleBrand)
  };

  const toggleDeviceModal = () => {
    setVisibleDevice(!visibleDevice)
  }

  return (
    <div>
      <h1>Admin Panel</h1>

      <div className={style.containerButton}>
        <button onClick={() => toggleTypeModal()}>Добавить тип устройства</button>
        <button onClick={() => toggleBrandModal()}>Добавить брэнд устройства</button>
        <button onClick={() => toggleDeviceModal()}>Добавить устройство</button>
      </div>
      <CreateTypeModal visibleType={visibleType} toggleTypeModal={toggleTypeModal}/>
      <CreateBrandModal visibleBrand={visibleBrand} toggleBrandModal={toggleBrandModal}/>
      <CreateDeviceModal visibleDevice={visibleDevice} toggleDeviceModal={toggleDeviceModal}/>
    </div>
  )
}

export default AdminPage;
