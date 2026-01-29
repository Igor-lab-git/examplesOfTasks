import { forwardRef, type ChangeEvent } from "react";

interface IField {
  id: string;
  label: string;
  type: string;
  value?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Field = forwardRef<HTMLInputElement, IField>(({ id, label, type, onInput, value }, ref) => { 
  
    return (
      <div className="todo__field field">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          className="field__input"
          id={id}
          placeholder=" "
          autoComplete="off"
          type={type}
          value={value}
          onInput={onInput}
        />
      </div>
    );
  }
);
export default Field;
