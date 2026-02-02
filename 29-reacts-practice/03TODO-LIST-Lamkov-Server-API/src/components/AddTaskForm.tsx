import React, { useContext, useState, type FormEvent, type RefObject } from "react";
import Button from "./Button";
import Field from "./Field";
import { ContextTasks } from "../context/ContextTasks";

interface IAddTaskForm {
  addTask: (title: string) => void;
  newTitleInput: string;
  inputRef: RefObject<HTMLInputElement | null> ;
  setNewTitleInput: (newTitleInput: string) => void;
};

const AddTaskForm = () => {

  const [errorMessage, setErrorMessage] = useState<string>("");

  const context = useContext(ContextTasks) as IAddTaskForm;
  const {addTask, newTitleInput, inputRef, setNewTitleInput} = context;

  if (!context) return null; // на всякий случай если context окажется null ведь в типе он как context || null

  const isEmptiNewTitleInput = newTitleInput.trim().length === 0;

  const onSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    addTask(newTitleInput);
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const clearValueText = value.trim();
    if(value.length > 0 && clearValueText.length === 0) {
      setErrorMessage("Поле ввода не должно быть пустым :(");
    } else {
      setErrorMessage("");
    };
    setNewTitleInput(e.target.value);
  };

  return (
    <>
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
          label="New task title" 
          id="new-task" 
          type="text"
          value={newTitleInput}
          onInput={(e) => onInput(e)}
          ref={inputRef}
          errorMessage={errorMessage}
        />
        <Button 
          type="submit"
          isDisabled={isEmptiNewTitleInput}
          >Add</Button>
      </form>
    </>
  );
};

export default AddTaskForm;
