import type { FormEvent } from "react";
import Button from "./Button";
import Field from "./Field";

interface IAddTaskForm {
  addNewTask: () => void;
}

const AddTaskForm = ({addNewTask}: IAddTaskForm) => {

  const onSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    addNewTask();
  };

  return (
    <>
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
        label="New task title" 
        id="new-task" 
        type="text" 
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default AddTaskForm;
