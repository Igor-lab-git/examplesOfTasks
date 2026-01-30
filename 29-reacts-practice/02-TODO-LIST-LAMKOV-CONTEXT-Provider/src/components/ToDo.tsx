import { useContext, type JSX, type RefObject } from "react";
import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import ListToDoTask from "./ListToDoTask";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import Button from "./Button";
import { ContextTasks } from "../context/ContextTasks";

export interface ITasks {
  id: string;
  text: string;
  isDone: boolean;
};

interface IContextTask {
  firstNoDoneTaskRef: RefObject<HTMLLIElement | null>;
};

const ToDo = (): JSX.Element => {

const { firstNoDoneTaskRef } = useContext(ContextTasks) as IContextTask;
 
  return (
    <div className="todo">
      <Header title="To Do List" />
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo />
      <Button onClick={() => firstNoDoneTaskRef.current?.scrollIntoView({behavior: "smooth"})}>Show first done task</Button>
      <ListToDoTask />
     </div>
  );
};

export default ToDo;