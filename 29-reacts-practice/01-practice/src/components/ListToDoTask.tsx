import ToDoItem from "./ToDoItem";
import type  { ITasks } from "./ToDo";

interface IListToDoTask {
  onDeleteTask: (id: string) => void;
  tasks: ITasks[];
  onToggleTakDone: (taskId: string, isDone: boolean) => void;
}

const ListToDoTask = ({onDeleteTask, tasks, onToggleTakDone }: IListToDoTask) => {

  const hasTask = true;

  if(!hasTask) {
    return <div className="todo__item-message"></div>
  }

  return (
    <>
      <ul className="todo__list">
        {tasks.map(({ id, text, isDone }) => (
          <ToDoItem key={id} id={id} title={text} isDone={isDone}
           onDeleteTask={onDeleteTask}
          onToggleTakDone={onToggleTakDone}/>
        ))}
      </ul>
      {hasTask}
    </>
  );
};

export default ListToDoTask;
