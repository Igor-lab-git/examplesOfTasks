import { memo, useContext, useMemo, type JSX } from "react";
import type { ITasks } from "./ToDo";
import { ContextTasks } from "../context/ContextTasks";

interface IToDoInfo {
  tasksArray: ITasks[] |[];
  deleteAllTasks: () => void;
};

const ToDoInfo = (): JSX.Element => {

const context = useContext(ContextTasks) as IToDoInfo;
const { tasksArray = [], deleteAllTasks } = context;


  const totalCountTasks = tasksArray.length;
  const hasTasks = totalCountTasks > 0;

   const doneCountTasks = useMemo(() => {
      return tasksArray.filter((task) => task.isDone).length;
    }, [tasksArray]);

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
          onClick={deleteAllTasks}>
            Delete all
          </button>
        )}
      </div>
    </>
  );
};

export default memo(ToDoInfo) ;
