import type { ITasks } from "../components/ToDo";

const useLocalStorageTasks = () => {
    const savedTasks = localStorage.getItem("tasks");

    const saveTaskToLocalStorage = (tasksArray: ITasks[] | []) => {
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
    };

    return {
        savedTasks: savedTasks ? JSON.parse(savedTasks) : [],
        saveTaskToLocalStorage
    };
};

export default useLocalStorageTasks;