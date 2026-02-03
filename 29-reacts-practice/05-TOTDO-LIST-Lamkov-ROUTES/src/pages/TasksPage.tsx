import type { JSX } from "react"
import ToDo from "../components/ToDo";


const TasksPage = (): JSX.Element => {
  return (
    <div>
        <h2>List Todo</h2>
        <ToDo />
    </div>
  )
};

export default TasksPage;
