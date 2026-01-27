import { useEffect, useState, type JSX } from "react";
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

  const [tasksArray, setTasksArray] = useState<ITasks[] | []>(() => {
    const seved = localStorage.getItem("tasks");
    return seved ? JSON.parse(seved) : [];
  });

  const [newTitleInput, setNewTitleInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");


  const deleteAllTasks = () => {
    const isConfirm = confirm("Are you sure you want delete All Tasks?");
    if(isConfirm) {
      setTasksArray([]);
    };
    console.log("Delete All tasks");
  };

  const deleteTask = (taskId: string) => {
    setTasksArray(tasksArray.filter((t) => {
      return t.id !== taskId;
    }));
    console.log(`Delete One task with: ${taskId}`);
  };

  const toggleTaskDone = (taskId: string, isDone: boolean) => {
    setTasksArray(tasksArray.map((task) => {
        if(task.id === taskId) {
          return {...task, isDone};
        } else {
          return task;
        };
      })
    )
    console.log(`Task with: ${taskId} Done: ${isDone ? "Done" : "not Done"}`);
  };

  const addTask = (value: string) => {
    if(value.trim().length > 0) {
      const newTask = {id: crypto?.randomUUID() ?? Date.now().toString(), text: value, isDone: false};

      setTasksArray([...tasksArray, newTask]);
      setNewTitleInput("");
      setSearchQuery("");
    };
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const clearQueryString = searchQuery.trim().toLowerCase();
  const filteredTasks = clearQueryString.length > 0 ? tasksArray.filter((task) => task.text.toLowerCase().includes(clearQueryString)) : null;

  return (
    <div className="todo">
      <Header title="To Do List" />

      <AddTaskForm 
        addTask={addTask}
        newTitleInput={newTitleInput} 
        setNewTitleInput={setNewTitleInput}/>

      <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>

      <ToDoInfo 
        onDeleteAllTasks={deleteAllTasks}
        total={tasksArray.length}
        done={tasksArray.filter((task) => task.isDone).length}/>

      <ListToDoTask 
        filteredTasks={filteredTasks}
        onDeleteTask={deleteTask} 
        tasksArray={tasksArray} 
        toggleTaskDone={toggleTaskDone}/>
    </div>
  );
};

export default ToDo;
