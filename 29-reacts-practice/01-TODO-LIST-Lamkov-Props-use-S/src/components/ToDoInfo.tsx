import { memo, type JSX } from "react";

interface IToDoInfo {
  onDeleteAllTasks: () => void;
  totalCountTasks: number;
  doneCountTasks: number;
};

const ToDoInfo = ({onDeleteAllTasks, totalCountTasks, doneCountTasks }: IToDoInfo): JSX.Element => {
  console.log("Info");
  const hasTasks = totalCountTasks > 0;

  return (
    <>
      <div className="todo__info">
        <div className="todo__total-tasks">
          Done: {doneCountTasks} from Total: {totalCountTasks}
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

export default memo(ToDoInfo) ;
