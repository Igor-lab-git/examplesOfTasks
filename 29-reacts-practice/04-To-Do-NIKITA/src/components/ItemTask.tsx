import type { JSX } from "react";
import type { ITask } from "../types/type";
import "../index.css";

interface IItem {
  item: ITask;
  tasksArr: ITask[] | [];
  setTasksArr: (tasksArr: ITask[] | []) => void;
}

const ItemTask = ({ item, tasksArr, setTasksArr }: IItem): JSX.Element => {

    const toggleDone = () => {
        setTasksArr(
            tasksArr.map((task) => {
                return task.id === item.id ? {...task, isDone: !task.isDone} : task;
            })
        );
    };

    const deleteTask = () => {
        setTasksArr(tasksArr.filter((task) => task.id !== item.id));
    };

  return (
    <li className="item-task">
      <input
       type="checkbox" 
       checked={item.isDone}
       onChange={toggleDone}
       />

      <span className="text-item">{item.text}</span>

      <button onClick={deleteTask}
      className="button-delete-item"
      >Удалить</button>
    </li>
  );
};

export default ItemTask;
