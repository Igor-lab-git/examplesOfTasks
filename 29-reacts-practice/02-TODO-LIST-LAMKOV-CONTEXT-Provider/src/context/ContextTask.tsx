import { createContext, type RefObject } from "react";
import type { ITasks } from "../components/ToDo";


export interface ITaskContext {
  tasksArray: ITasks[];
  filteredTasks: ITasks[] | null;
  firstNoDoneTaskRef: RefObject<HTMLLIElement | null>;
  firstNoDoneTaskId: string | undefined;
  deleteTask: (taskId: string) => void;
  deleteAllTasks: () => void;
  toggleTaskDone: (taskId: string, isDone: boolean) => void;
}

export const ContextTask = createContext<ITaskContext | null>(null);