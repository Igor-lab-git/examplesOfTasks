import { memo, useContext, type RefObject } from "react";
import { ContextTasks } from "../context/ContextTasks";

interface IToDoItem {
    id: string;
    title: string;
    isDone: boolean;
    ref?: RefObject<HTMLLIElement | null>;
};

interface IContextDoItem {
  firstNoDoneTaskId: string | null;
  firstNoDoneTaskRef: RefObject<HTMLLIElement | null>;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string, isDone: boolean) => void;
};

export const ToDoItem = ({id, title, isDone}: IToDoItem) => {

  const context = useContext(ContextTasks) as IContextDoItem;
  const { firstNoDoneTaskId, firstNoDoneTaskRef, deleteTask, toggleTaskDone } = context;

  return (
    <>
        <li className="todo__item todo-item" ref={id === firstNoDoneTaskId ? firstNoDoneTaskRef : null}>
          <input
            className="todo-item__checkbox"
            id={id}
            type="checkbox"
            checked={isDone}
            onChange={(e) => toggleTaskDone(id, e.target.checked)}
          />
          <label
            className="todo-item__label"
            htmlFor={id}
          >
            {title}
          </label>
          <button
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
            onClick={() => deleteTask(id)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
    </>
  )
};

export default memo(ToDoItem);
