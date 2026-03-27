import { useEffect, type JSX } from "react";
import style from "./NotificationModal.module.scss";

interface IModalWindow {
  isOpenModal: boolean;
  messageModal: string;
  typeMessageModal: "success" | "error";
  handleCloseModal: () => void;
};

const NotificationModal = ({ isOpenModal, messageModal, typeMessageModal, handleCloseModal }: IModalWindow): JSX.Element | null => {
 
    useEffect(() => {
        if (isOpenModal && typeMessageModal === "success") {
            const idTimeOut = setTimeout(() => {
                handleCloseModal();
            }, 4000);
            
            return () => clearTimeout(idTimeOut);
        }
    }, [isOpenModal, typeMessageModal, handleCloseModal]); 

 if(!isOpenModal) return null;
  return (
    <>
    <div className={`${isOpenModal ?  style.toastContainer : ""}`} role="alert">
        <div className={style.toast}>
            <span className={style.message}>
                {messageModal}  
            </span>
            {typeMessageModal === "success" ? (
                <button className={style.button_modal} onClick={handleCloseModal}>Хорошо</button>
            ) :  (
                <button className={style.button_modal} onClick={handleCloseModal}>Закрыть</button>
            )}
        </div>
    </div>
    </>
  );
};

export default NotificationModal;
