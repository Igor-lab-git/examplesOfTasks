import ToDoItem from "./ToDoItem";
import type  { ITasks } from "./ToDo";
import { memo, type JSX, type RefObject } from "react";


interface IListToDoTask {
  filteredTasks: ITasks[] | null;
  onDeleteTask: (id: string) => void;
  tasksArray: ITasks[];
  toggleTaskDone: (taskId: string, isDone: boolean) => void;
  firstNoDoneTaskRef: RefObject<HTMLLIElement | null>;
  firstNoDoneTaskId: string | undefined;
}

const ListToDoTask = ({filteredTasks, onDeleteTask, tasksArray, toggleTaskDone, firstNoDoneTaskRef, firstNoDoneTaskId }: IListToDoTask): JSX.Element => {
console.log("List");

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
            isDone={isDone}
            onDeleteTask={onDeleteTask}
            toggleTaskDone={toggleTaskDone}
            ref={firstNoDoneTaskId === id ? firstNoDoneTaskRef : undefined}/>
        ))}
      </ul>
    </>
  );
};

export default memo(ListToDoTask) ;
