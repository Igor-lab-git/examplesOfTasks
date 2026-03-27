import React, {type JSX, useState} from "react";
import style from "../AdminPage.module.scss";

interface ICreateTypeModal {
    visibleType: boolean;
    toggleTypeModal: () => void;
};

const CreateTypeModal = ({visibleType, toggleTypeModal}: ICreateTypeModal): JSX.Element => {
    const [valueType, setValueType] = useState<string>("");

    // const [login, { isLoading: loginLoad, isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
        setValueType(e.currentTarget.value);
    };

  return (
    <div className={`${style.overlay} ${visibleType ? style.show : ""}`}>
      <div className={style.modal}>
        <div className={style.modal_inner_wrapper}>
            <button 
              type="button" 
              className={style.button_close_modal} 
              onClick={() => toggleTypeModal()}>
                <span className={style.button_close_modal_line} ></span>
                <span className={style.button_close_modal_line} ></span>
            </button>
          <h3 className={style.modal_title}>Добавть тип устройства</h3>
          <form className={style.modal_form} onSubmit={handleSubmit}>
            <input
              className={style.modal_form_input}
                value={valueType}
                onChange={(e) => setValueType(e.target.value)}
                type="text"
                placeholder="Добавить тип девайса..." />
              <button className={style.modal_form_button} type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTypeModal;
