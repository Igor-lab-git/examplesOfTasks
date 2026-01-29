import type { FormEvent, RefObject } from "react";
import Button from "./Button";
import Field from "./Field";

interface IAddTaskForm {
  addTask: (title: string) => void;
  newTitleInput: string;
  inputRef: RefObject<HTMLInputElement | null> ;
  setNewTitleInput: (newTitleInput: string) => void;
};

const AddTaskForm = ({addTask, newTitleInput, inputRef, setNewTitleInput }: IAddTaskForm) => {

  const onSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    addTask(newTitleInput);
  };

  return (
    <>
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
          label="New task title" 
          id="new-task" 
          type="text"
          value={newTitleInput}
          onInput={(e) => setNewTitleInput(e.target.value)}
          ref={inputRef}
        />
        <Button  type="submit">Add</Button>
      </form>
    </>
  );
};

export default AddTaskForm;
