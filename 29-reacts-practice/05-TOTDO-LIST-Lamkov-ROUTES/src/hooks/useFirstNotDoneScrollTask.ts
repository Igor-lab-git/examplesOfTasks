import { useRef } from "react";
import type { ITasks } from "../components/ToDo";

const useFirstNotDoneScrollTask = (tasksArray: ITasks[] | []) => {
     const firstNoDoneTaskRef = useRef<HTMLLIElement  | null>(null);
     const firstNoDoneTaskId:string | undefined = tasksArray.find(({isDone}) => !isDone)?.id;

     return {
        firstNoDoneTaskRef,
        firstNoDoneTaskId
     }
}

export default useFirstNotDoneScrollTask;