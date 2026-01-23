import { useState, type JSX } from "react";
import "../index.css";
import type { ITask } from "../types/type";

interface IProps {
  tasksArr: ITask[] | [];
  setTasksArr: (tasksArr: ITask[] | []) => void;
};

const InputTask = ({ tasksArr, setTasksArr }: IProps): JSX.Element => {

    const [inputText, setInputText] = useState("");

    const addTask = () => {
      const  hasText = inputText.trim().length > 0;
      if(hasText) {
        setTasksArr([...tasksArr, {id: Date.now(), text: inputText, isDone: false}]);
        setInputText("");
      };
    };

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add task..."
      />
      <button 
      className="button-input"
      onClick={addTask}>Add</button>
    </div>
  );
};

export default InputTask;
