import { type JSX } from "react";
import style from "../AdminPage.module.scss";

interface ICreateBrandModal {
    visibleBrand: boolean;
    toggleBrandModal: () => void;
}

const CreateBrandModal = ({visibleBrand, toggleBrandModal}: ICreateBrandModal): JSX.Element => {
  return (
    <div className={`${style.overlay} ${visibleBrand ? style.show : ""}`}>
      <div className={style.modal}>
        <button onClick={() => toggleBrandModal()}>❌</button>
        <h1>CreateBrandModal</h1>
        <form action="#">
          <input type="text" placeholder="Добавить бренд девайса..." />
        </form>
      </div>
    </div>
  );
};

export default CreateBrandModal;
