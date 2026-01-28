import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import ListToDoTask from "./ListToDoTask";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import Button from "./Button";

export interface ITasks {
  id: string;
  text: string;
  isDone: boolean;
}

const ToDo = (): JSX.Element => {
  console.log("ToDo");
  const [tasksArray, setTasksArray] = useState<ITasks[] | []>(() => {
    const seved = localStorage.getItem("tasks");
    return seved ? JSON.parse(seved) : [];
  });

  const [newTitleInput, setNewTitleInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const firstNoDoneTaskRef = useRef<HTMLLIElement  | null>(null);


  const firstNoDoneTaskId:string | undefined = tasksArray.find(({isDone}) => !isDone)?.id;


  const deleteAllTasks = useCallback(() => {
    const isConfirm = confirm("Are you sure you want delete All Tasks?");
    if(isConfirm) {
      setTasksArray([]);
    };
  }, []); // опциональная функция для memo с использованием useCallback функция передаётся в комп. и обновляет комп. опционально, если ещё сам комп. куда прилетает функция уё импорт обёрнут в useMemo


  const deleteTask = useCallback((taskId: string) => {
    setTasksArray(tasksArray.filter((t) => t.id !== taskId))
  }, [tasksArray]);

  const toggleTaskDone = useCallback((taskId: string, isDone: boolean) => {
    setTasksArray(tasksArray.map((task) => {
        if(task.id === taskId) {
          return {...task, isDone};
        } else {
          return task;
        };
      })
    )
  }, [tasksArray]);

  const addTask = (value: string) => {
    if(value.trim().length > 0) {
      const newTask = {id: crypto?.randomUUID() ?? Date.now().toString(), text: value, isDone: false};

      setTasksArray([...tasksArray, newTask]);
      setNewTitleInput("");
      setSearchQuery("");
      inputRef.current?.focus();
    };
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  useEffect(() => {
    if(inputRef.current !== null) {
      inputRef.current.focus();
    };
  }, []);

  const clearQueryString = searchQuery.trim().toLowerCase();
  const filteredTasks = clearQueryString.length > 0 ? tasksArray.filter((task) => task.text.toLowerCase().includes(clearQueryString)) : null;

  return (
    <div className="todo">
      <Header title="To Do List" />

      <AddTaskForm 
        addTask={addTask}
        newTitleInput={newTitleInput} 
        inputRef={inputRef}
        setNewTitleInput={setNewTitleInput}/>

      <SearchTaskForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>

      <ToDoInfo 
        onDeleteAllTasks={deleteAllTasks}
        total={tasksArray.length}
        done={tasksArray.filter((task) => task.isDone).length}/>

      <Button onClick={() => firstNoDoneTaskRef.current?.scrollIntoView({behavior: "smooth"})}>Show first done task</Button>

      <ListToDoTask 
        filteredTasks={filteredTasks}
        onDeleteTask={deleteTask} 
        tasksArray={tasksArray} 
        toggleTaskDone={toggleTaskDone}
        firstNoDoneTaskRef={firstNoDoneTaskRef}
        firstNoDoneTaskId={firstNoDoneTaskId}/>
    </div>
  );
};

export default ToDo;
// 13