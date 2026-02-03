import { forwardRef, type ChangeEvent } from "react";

interface IField {
  id: string;
  label: string;
  type: string;
  value?: string;
  errorMessage: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Field = forwardRef<HTMLInputElement, IField>(({ id, label, type, onInput, value, errorMessage }, ref) => { 
  
    return (
      <div className="todo__field field">
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          className={`field__input ${errorMessage ? "is-invalid" : ""}`}
          id={id}
          placeholder=" "
          autoComplete="off"
          type={type}
          value={value}
          onInput={onInput}
        />
        {errorMessage && (
          <span className="field__error-message">{errorMessage}</span>
        )}
      </div>
    );
  }
);
export default Field; // глупый компонет, только отображает данные и пропсы, а состояние и логика либо в родительском комп. или в context

