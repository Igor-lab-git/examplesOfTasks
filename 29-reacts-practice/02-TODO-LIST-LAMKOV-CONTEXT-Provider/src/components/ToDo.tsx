import { useCallback, useEffect, useMemo, useRef, useState, type JSX } from "react";
import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import ListToDoTask from "./ListToDoTask";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import Button from "./Button";
import { ContextTask } from "../context/ContextTask";

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
  }, []); // опциональная функция для memo с использованием useCallback функция передаётся в комп. и обновляет комп. опционально, если ещё сам комп. куда прилетает функция её импорт обёрнут в useMemo


  const deleteTask = useCallback((taskId: string) => {
    setTasksArray(tasksArray.filter((t) => t.id !== taskId))
  }, [tasksArray]);

  const toggleTaskDone = useCallback((taskId: string, isDone: boolean) => {
    setTasksArray(prevTasksArray => prevTasksArray.map((task) => {  // prevTasksArray не видит на прямую tasksArray, а даёт react актуальное значение тасок изи облости вид. и замыкания
      if(task.id === taskId) {
        return {...task, isDone};
      } else {
        return task;
      };
    })
    )
  }, []); // если данные теже приходят в дочерний комп. то ссылка на массив всё равно меняется, так как set всё равно сетится заново, и поэтому нужно передать в массив зависимостей ссылку на этот массив, что бы он отслеживал её и на этом решал обновлять комп. или нет

  const addTask = useCallback((value: string) => {
    if(value.trim().length > 0) {
      const newTask = {id: crypto?.randomUUID() ?? Date.now().toString(), text: value, isDone: false};

      setTasksArray((prevTasks) => [...prevTasks, newTask]);
      setNewTitleInput("");
      setSearchQuery("");
      inputRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  useEffect(() => {
    if(inputRef.current !== null) {
      inputRef.current.focus();
    };
  }, []);

  const filteredTasks = useMemo(() => {
    const clearQueryString = searchQuery.trim().toLowerCase();
    return clearQueryString.length > 0 ? tasksArray.filter((task) => task.text.toLowerCase().includes(clearQueryString)) : null;
  }, [searchQuery, tasksArray]); //цель useMemo оптимизация вычисляемых данных а не оптимизация функций, searchQuery, tasksArray-сущности которые тригерят лишнее изменение filteredTasks = useMemo, useMemoзапоминает результат вычислений пока данные в массиве зав. не изменились

  return (
    <ContextTask.Provider value={{
      tasksArray,
      filteredTasks,
      firstNoDoneTaskRef,
      firstNoDoneTaskId,
      deleteTask,
      deleteAllTasks,
      toggleTaskDone,
    }}>
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

        <ToDoInfo />

        <Button onClick={() => firstNoDoneTaskRef.current?.scrollIntoView({behavior: "smooth"})}>Show first done task</Button>

        <ListToDoTask />
      </div>
    </ContextTask.Provider>
  );
};

export default ToDo;
// 13