import type { ChangeEvent } from "react";

interface IField {
  id: string;
  label: string;
  type: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Field = ({id, label, type, onInput}: IField) => {

  return (
    <div className="todo__field field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  );
};

export default Field;
