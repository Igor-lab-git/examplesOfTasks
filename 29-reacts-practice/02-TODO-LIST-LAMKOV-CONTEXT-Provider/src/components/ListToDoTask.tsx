import ToDoItem from "./ToDoItem";
import type  { ITasks } from "./ToDo";
import { memo, useContext, type JSX } from "react";
import { ContextTask } from "../context/ContextTask";

interface IListToDoTask {
  filteredTasks: ITasks[] | null;
  tasksArray: ITasks[];
}

const ListToDoTask = (): JSX.Element => {

  const context = useContext(ContextTask) as IListToDoTask;
  const { tasksArray = [], filteredTasks } = context;

  const hasTask = tasksArray.length === 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0 || null;

  if(hasTask) {
    return <div className="todo__item-message">There is no task yet</div>
  };

  if(hasTask && isEmptyFilteredTasks) {
    return <div className="todo__item-message">Tasks not Found</div>
  };

  return (
    <>
      <ul className="todo__list">
        {(filteredTasks ?? tasksArray).map(({ id, text, isDone }) => (
          <ToDoItem 
            key={id} 
            id={id} 
            title={text} 
            isDone={isDone}/>
        ))}
      </ul>
    </>
  );
};

export default memo(ListToDoTask) ;
