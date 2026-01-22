import Button from "./Button";
import Field from "./Field";

const AddTaskForm = () => {
  return (
    <>
      <form className="todo__form">
        <Field label="New task title" id="new-task" type="text"/>
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default AddTaskForm;
