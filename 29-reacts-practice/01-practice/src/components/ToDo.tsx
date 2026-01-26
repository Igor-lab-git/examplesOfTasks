import type { JSX } from "react";
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

const ToDo = (): JSX.Element => {

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

  const deleteAllTasks = () => {
    console.log("Delete All tasks");
  };

  const deleteTask = (taskId: string) => {
    console.log(`Delete One task with: ${taskId}`);
  };

  const toggleTaskDone = (taskId: string, isDone: boolean) => {
    console.log(`Task with: ${taskId} Done: ${isDone ? "Done" : "not Done"}`);
  };

  const filterTasks = (query: string) => {
    console.log("query string: ", query);
  };

  const addTask = () => {
    console.log("Add new Task");
  }

  return (
    <div className="todo">
      <Header title="To Do List" />
      <AddTaskForm addNewTask={addTask}/>
      <SearchTaskForm onSearchTaskInput={filterTasks}/>
      <ToDoInfo 
        onDeleteAllTasks={deleteAllTasks}
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}/>
      <ListToDoTask onDeleteTask={deleteTask} tasks={tasks} onToggleTakDone={toggleTaskDone}/>
    </div>
  );
};

export default ToDo;
