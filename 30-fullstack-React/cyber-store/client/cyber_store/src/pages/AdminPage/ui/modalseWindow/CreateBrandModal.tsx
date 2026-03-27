import { useState, type JSX } from "react";
import style from "../AdminPage.module.scss";

interface ICreateBrandModal {
    visibleBrand: boolean;
    toggleBrandModal: () => void;
}

const CreateBrandModal = ({visibleBrand, toggleBrandModal}: ICreateBrandModal): JSX.Element => {
  const [valueBrand, setValueBrand] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(e.target);
          setValueBrand(e.currentTarget.value);
      };

  return (
   <div className={`${style.overlay} ${visibleBrand ? style.show : ""}`}>
      <div className={style.modal}>
        <div className={style.modal_inner_wrapper}>
            <button 
              type="button" 
              className={style.button_close_modal} 
              onClick={() => toggleBrandModal()}>
                <span className={style.button_close_modal_line} ></span>
                <span className={style.button_close_modal_line} ></span>
            </button>
          <h3 className={style.modal_title}>Добавть тип устройства</h3>
          <form className={style.modal_form} onSubmit={handleSubmit}>
            <input
              className={style.modal_form_input}
                value={valueBrand}
                onChange={(e) => setValueBrand(e.target.value)}
                type="text"
                placeholder="Добавить тип девайса..." />
              <button className={style.modal_form_button} type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBrandModal;
