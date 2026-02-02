import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ITasks } from "../components/ToDo";

const useTasks = () => {


      const [tasksArray, setTasksArray] = useState<ITasks[] | []>([]);
    
      const [newTitleInput, setNewTitleInput] = useState<string>("");
      const [searchQuery, setSearchQuery] = useState<string>("");
    
      const inputRef = useRef<HTMLInputElement | null>(null);

      const deleteAllTasks = useCallback(() => {
        const isConfirm = confirm("Are you sure you want delete All Tasks?");
        if(isConfirm) {
          setTasksArray([]);
        };
      }, []); // опциональная функция для memo с использованием useCallback функция передаётся в комп. и обновляет комп. опционально, если ещё сам комп. куда прилетает функция её импорт обёрнут в useMemo
    
    
      const deleteTask = useCallback((taskId: string) => {
        try {
          fetch(`http://localhost:3001/tasks/${taskId}`, {method: "DELETE"})
          .then(() => setTasksArray(tasksArray.filter((t) => t.id !== taskId)));
        } catch (error) {
          console.log(error);
        };
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
          const newTask = { text: value, isDone: false};

          try {
            fetch("http://localhost:3001/tasks", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newTask),
            })
            .then((response) => response.json())
            .then((addedTasks) => {
              setTasksArray((prevTasks) => [...prevTasks, addedTasks]);
              setNewTitleInput("");
              setSearchQuery("");
              inputRef.current?.focus();
            })
          } catch (error) {
            console.log(error);
          }
    
          
        };
      }, []);
    
      useEffect(() => {
        if(inputRef.current !== null) {
          inputRef.current.focus();
        };

        try {
          fetch("http://localhost:3001/tasks")
          .then((data) => data.json())
          .then((data) => setTasksArray(data))
        } catch (error) {
          console.log(error);
          
        }
      }, []);
    
      const filteredTasks = useMemo(() => {
        const clearQueryString = searchQuery.trim().toLowerCase();
        return clearQueryString.length > 0 ? tasksArray.filter((task) => task.text.toLowerCase().includes(clearQueryString)) : null;
      }, [searchQuery, tasksArray]); //цель useMemo оптимизация вычисляемых данных а не оптимизация функций, searchQuery, tasksArray-сущности которые тригерят лишнее изменение filteredTasks = useMemo, useMemoзапоминает результат вычислений пока данные в массиве зав. не изменились

      return {
      tasksArray,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskDone,
      newTitleInput,
      setNewTitleInput,
      searchQuery,
      setSearchQuery,
      inputRef,
      addTask,
      }
}

export default useTasks;