import type { JSX } from "react";

interface IToDoInfo {
  onDeleteAllTasks: () => void;
  total: number;
  done: number;
};

const ToDoInfo = ({onDeleteAllTasks, total, done }: IToDoInfo): JSX.Element => {

  const hasTasks = total > 0;

  return (
    <>
      <div className="todo__info">
        <div className="todo__total-tasks">
          Done: {done} from Total: {total}
        </div>
        {hasTasks && (
          <button 
          className="todo__delete-all-button" 
          type="button"
          onClick={onDeleteAllTasks}>
            Delete all
          </button>
        )}
      </div>
    </>
  );
};

export default ToDoInfo;
