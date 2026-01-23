import "./index.css";
import Header from "./components/Header";
import { useState } from "react";
import type { ITask } from "./types/type";
import InputTask from "./components/InputTask";
import FilterTasks from "./components/FilterTasks";
import ListTasks from "./components/ListTasks";

const App = () => {

  const [tasksArr, setTasksArr] = useState<ITask[] | []>([]);
  const [filterTask, setFilterTask] = useState<string>("all");
  // console.log(tasksArr, "tasksArr", "App");
  console.log(filterTask, "filterTask", "App");

  return (
    <div className="app">
      <Header title="To Do List"/>
      <InputTask tasksArr={tasksArr} setTasksArr={setTasksArr}/>
      <FilterTasks filterTask={filterTask} setFilterTask={setFilterTask}/>
      <ListTasks filterTask={filterTask} tasksArr={tasksArr} setTasksArr={setTasksArr}/>
    </div>
  );
};

export default App;
