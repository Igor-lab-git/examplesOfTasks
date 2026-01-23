import type { ITask } from "../types/type";
import ItemTask from "./ItemTask";
import "../index.css";
import type { JSX } from "react";

interface IList {
  filterTask: string;
  tasksArr: ITask[] | [];
  setTasksArr: (tasksArr: ITask[] | []) => void;
}

const ListTasks = ({
  filterTask,
  tasksArr,
  setTasksArr,
}: IList): JSX.Element => {
  const filtredTasks = tasksArr.filter((task) => {
    if (filterTask === "done") {
      return !task.isDone;
    } else if (filterTask === "notDone") {
      return task.isDone;
    } else {
      return true;
    };
  });

  return (
    <ul className="list-item">
      {filtredTasks.map((item) => (
        <ItemTask
          key={item.id}
          item={item}
          tasksArr={tasksArr}
          setTasksArr={setTasksArr}
        />
      ))}
    </ul>
  );
};

export default ListTasks;
