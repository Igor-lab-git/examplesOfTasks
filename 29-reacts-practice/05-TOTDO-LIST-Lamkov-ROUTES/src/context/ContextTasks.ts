import { createContext, type RefObject } from "react";
import type { ITasks } from "../components/ToDo";

export interface ITaskContext {
  tasksArray: ITasks[];
  filteredTasks: ITasks[] | null;
  firstNoDoneTaskRef: RefObject<HTMLLIElement | null>;
  firstNoDoneTaskId: string | undefined;
  newTitleInput: string;
  setNewTitleInput: (newTitleInput: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  inputRef: RefObject<HTMLElement | null>;
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  deleteAllTasks: () => void;
  toggleTaskDone: (taskId: string, isDone: boolean) => void;
  color: string;
  isDisappearing: string | null;
  appearing: string | null;
};

export const ContextTasks = createContext<ITaskContext | null>(null); // Здесь только создаете контекст и объявляете типы для нужных оборачеваемых мне комп.
// Единственная проблема Context что все компоненты потребители переобновляются если хоть один комп. берёт один пропс из контекста value{}