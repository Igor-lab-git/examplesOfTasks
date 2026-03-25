import React, {type JSX, useState} from "react";
import style from "../AdminPage.module.scss";

interface ICreateTypeModal {
    visibleType: boolean;
    toggleTypeModal: () => void;
};

const CreateTypeModal = ({visibleType, toggleTypeModal}: ICreateTypeModal): JSX.Element => {
    const [valueType, setValueType] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
        setValueType(e.currentTarget.value);
    }

  return (
    <div className={`${style.overlay} ${visibleType ? style.show : ""}`}>
      <div className={style.modal}>
        <button onClick={() => toggleTypeModal()}>❌</button>
        <h1>CreateTypeModal</h1>
        <form action="#" onSubmit={handleSubmit}>
          <input
              value={valueType}
              type="text"
              placeholder="Добавить тип девайса..." />
            <button>Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTypeModal;
