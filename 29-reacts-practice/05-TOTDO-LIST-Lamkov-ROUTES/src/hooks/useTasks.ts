import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ITasks } from "../components/ToDo";
import tasksApi from "../api/tasksAPI";

const useTasks = () => {


      const [tasksArray, setTasksArray] = useState<ITasks[] | []>([]);
    
      const [newTitleInput, setNewTitleInput] = useState<string>("");
      const [searchQuery, setSearchQuery] = useState<string>("");
      const [isDisappearing, setIsDisappearing] = useState<string | null>(null); // для синхронизации удаления таски с сервера, если сервер тормозит, то не сразу удаляем таску со страницы, а после ответа сервера
      const [appearing, setAppearing] = useState<string | null>(null); // для синхронизации добавления таски с сервера, если сервер тормозит, то не сразу добавит таску со страницы, а после ответа сервера
    
      const inputRef = useRef<HTMLInputElement | null>(null);
      const [color, setColor] = useState<string>("white");
      const colors = useMemo(() => [ 
        '#FFE6E6', '#E6FFE6', '#E6E6FF', '#FFFFE6', 
        '#FFE6FF', '#E6FFFF', '#F0E6FF', '#FFF0E6', 
        '#E6FFF0', '#FFFAE6' 
      ], []); // ✅ Мемоизированный массив
      
      const setRandomColor = useCallback(() => {
        const randomColor = Math.floor(Math.random() * colors.length);
        setColor(colors[randomColor]);
      }, [colors]);

      const deleteAllTasks = useCallback(() => {
        const isConfirm = confirm("Are you sure you want delete All Tasks?");
        if (isConfirm) {
          // Получаем текущие задачи через setState
          // tasksApi.deleteAll(setTasksArray)
          setTasksArray(currentTasks => {
            // currentTasks - всегда актуальный tasksArray
            tasksApi.deleteAll(currentTasks).catch(error => {
              console.error("Ошибка при удалении:", error);
              // Можно показать уведомление пользователю
            });
            
            return []; // Возвращаем пустой массив
          });
        }
      }, []); // ✅ Пустой массив зависимостей
      // опциональная функция для memo с использованием useCallback функция передаётся в комп. и обновляет комп. опционально, если ещё сам комп. куда прилетает функция её импорт обёрнут в useMemo
    // Нужно что бы Promise вернул статус ok и только после return [] обнулять UI и показывать пустые таски на странице, а то может, на сервере не удалиться одна, а на странице уже пусто

    
      const deleteTask = useCallback((taskId: string) => {
        try {
          tasksApi.delete(taskId)
          .then(() => {
            setIsDisappearing(taskId); // после успешного ответа от сервера после удаления таски

            setTimeout(() => {
              setTasksArray(tasksArray.filter((t) => t.id !== taskId));
              setIsDisappearing(null); //обнуляем изначальное состояние
            }, 400)
          });
        } catch (error) {
          console.log(error);
        };
      }, [tasksArray]);
    

      const toggleTaskDone = useCallback((taskId: string, isDone: boolean) => {
        tasksApi.toggleDone(taskId, isDone).then(() => {
        setTasksArray(prevTasksArray => prevTasksArray.map((task) => {  // prevTasksArray не видит на прямую tasksArray, а даёт react актуальное значение тасок из облости вид. и замыкания
          if(task.id === taskId) {
            return {...task, isDone};
          } else {
            return task;
          };
        })
        )
      });
      }, []); // если данные теже приходят в дочерний комп. то ссылка на массив всё равно меняется, так как set всё равно сетится заново, и поэтому нужно передать в массив зависимостей ссылку на этот массив, что бы он отслеживал её и на этом решал обновлять комп. или нет
    
      const addTask = useCallback((value: string) => {
        if(value.trim().length > 0) {
          const newTask = { text: value, isDone: false};

          try {
            tasksApi.add(newTask)
            .then((addedTasks) => {
              setTasksArray((prevTasks) => [...prevTasks, addedTasks]);
              setRandomColor();
              setNewTitleInput("");
              setSearchQuery("");
              inputRef.current?.focus();
              setAppearing(addedTasks.id);

              setTimeout(() => setAppearing(null), 400);
            })
          } catch (error) {
            console.log(error);
          }
        };
      }, [setRandomColor]);
    
      useEffect(() => {
        if(inputRef.current !== null) {
          inputRef.current.focus();
        };
        try {
          tasksApi.getAll().then((data) => setTasksArray(data));
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
      color,
      isDisappearing,
      appearing,
      }
}

export default useTasks;