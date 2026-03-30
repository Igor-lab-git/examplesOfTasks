import { useState, type JSX } from 'react';
import CreateTypeModal from './modalseWindow/CreateTypeModal';
import CreateDeviceModal from './modalseWindow/CreateDeviceModal';
import style from "./AdminPage.module.scss";

const AdminPage = (): JSX.Element => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [visibleDeviceModal, setVisibleDeviceModal] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<"type" | "brand">("type");


  const openModal = (type: "type" | "brand") => {
      setTypeModal(type);
       setVisibleModal(!visibleModal);
  };

    const closeModalType = () => {
        setVisibleModal(!visibleModal);
    };

    const closeModal = () => {
        setVisibleDeviceModal(false);
    };

    const openDeviceModal = () => {
        setVisibleDeviceModal(true);
    };

  return (
    <section>
      <h2 className={style.title_admin_page}>Админ панель</h2>

      <div className={style.containerButton}>
        <button className={style.button_brand} onClick={() => openModal("brand")}>Добавить брэнд устройства</button>
        <button className={style.button_type} onClick={() => openModal("type")}>Добавить тип устройства</button>
        <button className={style.button_device} onClick={() => openDeviceModal()}>Добавить устройство</button>
      </div>
      <CreateTypeModal visibleType={visibleModal} closeModalType={closeModalType} typeModal={typeModal}/>
      <CreateDeviceModal visibleDeviceModal={visibleDeviceModal} closeModal={closeModal}/>
    </section>
  )
}

export default AdminPage;
