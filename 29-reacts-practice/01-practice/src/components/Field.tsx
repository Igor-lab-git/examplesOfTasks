interface IProps {
  id: string;
  label: string;
  type: string
}

const Field = (props: IProps) => {

  const {id, label, type} = props;

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
      />
    </div>
  );
};

export default Field;
