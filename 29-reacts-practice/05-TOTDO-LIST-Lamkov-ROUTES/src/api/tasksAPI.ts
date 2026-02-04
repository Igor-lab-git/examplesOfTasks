import type { ITasks } from "../components/ToDo";

const URL_STRING = `http://localhost:3001/tasks`;

const headers = {
    "Content-Type": "application/json"
  };

  interface INewTask {
    text: string;
    isDone: boolean;
  };

  const tasksApi =  {
    getAll: () => {
        return fetch(URL_STRING).then((data) => data.json());
    },

    add: (newTask: INewTask) => {
       return fetch(URL_STRING, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newTask),
          })
          .then((response) => response.json())
    },

    getTaskById: (id: string) => {
      return fetch(`${URL_STRING}/${id}`).then((task) => task.json());
    },

    delete: (taskId: string) => {
        return fetch(`${URL_STRING}/${taskId}`, {method: "DELETE"});
    },

    deleteAll: (currentTasks: ITasks[] | []) => {
        return Promise.all(
            currentTasks.map(({id}) => 
                fetch(`${URL_STRING}/${id}`, {method: "DELETE"})
            )
          )
    },

    toggleDone: (taskId: string, isDone: boolean) => {
        return fetch(`${URL_STRING}/${taskId}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({isDone}),
      })
    },
  };

  export default tasksApi;