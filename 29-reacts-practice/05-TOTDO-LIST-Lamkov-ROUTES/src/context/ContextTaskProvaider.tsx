import React from "react";
import { ContextTasks } from "./ContextTasks";
import useFirstNotDoneScrollTask from "../hooks/useFirstNotDoneScrollTask";
import useTasks from "../hooks/useTasks";
// import type { ITasks } from "../components/ToDo";

interface ITaskProviderChildren {
  children: React.ReactNode;
};

// interface IUseTasks {
//   tasksArray: ITasks[] | [];
//   filteredTasks: ITasks[] | null;
//   firstNoDoneTaskRef: RefObject<HTMLElement | null>;
//   firstNoDoneTaskId: string | undefined;
//   deleteTask: (taskId: string) => void;
//   deleteAllTasks: () => void;
//   toggleTaskDon: (taskId: string, isDone: boolean) => void;
//   newTitleInput: string;
//   setNewTitleInput: (newTitleInput: string) => void;
//   searchQuery: string;
//   setSearchQuery: (newTitleInput: string) => void;
//   inputRef: RefObject<HTMLElement | null>;
//   addTask: (value: string) => void;
// };

const ContextTaskProvaider = (props: ITaskProviderChildren) => { // Родитель для всех детей копонентов в App где ToDo

const { children } = props;

const {
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
} = useTasks();

const {
  firstNoDoneTaskRef,
  firstNoDoneTaskId,
} = useFirstNotDoneScrollTask(tasksArray); // специально отдельный хук относящийся к UX логике а не к логике, такие нужно разделять

  return (
    <ContextTasks.Provider value={{
      tasksArray,
      filteredTasks,
      firstNoDoneTaskRef,
      firstNoDoneTaskId,
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
    }}>
      {children} // Здесь ToDo.tsx из App.tsx

      {/* return (
    <div className="todo">
      <Header title="To Do List" />
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo />
      <Button onClick={() => firstNoDoneTaskRef.current?.scrollIntoView({behavior: "smooth"})}>Show first done task</Button>
      <ListToDoTask />
     </div>
  ); */}
    </ContextTasks.Provider>
  )
};

export default ContextTaskProvaider;