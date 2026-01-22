import ToDoItem from "./ToDoItem";
import type  { ITasks } from "./ToDo";

interface IProps {
  tasks: ITasks[];
}

const ListToDoTask = ({ tasks }: IProps) => {

  const hasTask = true;

  if(!hasTask) {
    return <div className="todo__item-message"></div>
  }

  return (
    <>
      <ul className="todo__list">
        {tasks.map(({ id, text, isDone }) => (
          <ToDoItem key={id} id={id} title={text} isDone={isDone} />
        ))}
      </ul>
      {hasTask}
    </>
  );
};

export default ListToDoTask;
