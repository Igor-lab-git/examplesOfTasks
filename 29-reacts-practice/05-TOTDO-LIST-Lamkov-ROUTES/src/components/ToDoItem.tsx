import { memo, useContext, type RefObject } from "react";
import { ContextTasks } from "../context/ContextTasks";
import { Link } from "react-router-dom";

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
  color: string;
  isDisappearing: string | null;
  appearing: string | null;
};

export const ToDoItem = ({id, title, isDone}: IToDoItem) => {

  const context = useContext(ContextTasks) as IContextDoItem;
  if (!context) return null;
  const { 
    firstNoDoneTaskId,
    firstNoDoneTaskRef,
    deleteTask,
    toggleTaskDone,
    color,
    isDisappearing,
    appearing } = context;

  return (
    <>
        <li 
          style={{backgroundColor: color}} 
          className={
            `todo__item todo-item ${isDisappearing === id ? "is-disappearing" : ""} 
            ${appearing === id ? "is-appearing" : ""}`
          }
          ref={id === firstNoDoneTaskId ? firstNoDoneTaskRef : null}>
          <input
            className="todo-item__checkbox"
            id={id}
            type="checkbox"
            checked={isDone}
            onChange={(e) => toggleTaskDone(id, e.target.checked)}
          />
          <label
            className="todo-item__label visually-hidden"
            htmlFor={id}
          >
            {title}
          </label>
          <Link to={`/task/${id}`} aria-label="Task detail page">
            {title}
          </Link>
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
