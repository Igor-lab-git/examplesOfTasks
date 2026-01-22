import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import ListToDoTask from "./ListToDoTask";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";

export interface ITasks {
  id: string;
  text: string;
  isDone: boolean;
}

const ToDo = () => {

  const tasks: ITasks[] = [
    {
      id: "task-1",
      text: "Jenna",
      isDone: false,
    },
    {
      id: "task-2",
      text: "Igor",
      isDone: true,
    },
    {
      id: "task-3",
      text: "John",
      isDone: false,
    },
  ];

  return (
    <div className="todo">
      <Header title="To Do List" />
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo total={tasks.length} done={tasks.filter((task) => task.isDone).length}/>
      <ListToDoTask tasks={tasks} />
    </div>
  );
};

export default ToDo;
