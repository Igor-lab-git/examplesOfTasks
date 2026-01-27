import ToDoItem from "./ToDoItem";
import type  { ITasks } from "./ToDo";

interface IListToDoTask {
  filteredTasks: ITasks[] | null;
  onDeleteTask: (id: string) => void;
  tasksArray: ITasks[];
  toggleTaskDone: (taskId: string, isDone: boolean) => void;
}

const ListToDoTask = ({filteredTasks, onDeleteTask, tasksArray, toggleTaskDone }: IListToDoTask) => {

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
          <ToDoItem key={id} id={id} title={text} isDone={isDone}
           onDeleteTask={onDeleteTask}
           toggleTaskDone={toggleTaskDone}/>
        ))}
      </ul>
      {hasTask}
    </>
  );
};

export default ListToDoTask;
