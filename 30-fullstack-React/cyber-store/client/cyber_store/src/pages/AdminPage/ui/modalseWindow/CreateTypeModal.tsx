import { type JSX } from "react";
import style from "../AdminPage.module.scss";

interface ICreateTypeModal {
    visibleType: boolean;
    toggleTypeModal: () => void;
}

const CreateTypeModal = ({visibleType, toggleTypeModal}: ICreateTypeModal): JSX.Element => {
  return (
    <div className={`${style.overlay} ${visibleType ? style.show : ""}`}>
      <div className={style.modal}>
        <button onClick={() => toggleTypeModal()}>❌</button>
        <h1>CreateTypeModal</h1>
        <form action="#">
          <input type="text" placeholder="Добавить тип девайса..." />
        </form>
      </div>
    </div>
  );
};

export default CreateTypeModal;
