import type { JSX } from "react";

interface IFilter {
  filterTask: string;
  setFilterTask: (filterTask: string) => void;
}

const FilterTasks = ({ filterTask, setFilterTask }: IFilter): JSX.Element => {
  return (
    <div className="wrapper-buttons">
      <button
        className={`button ${filterTask === "all" ? "active" : ""}`}
        onClick={() => setFilterTask("all")}
      >
        Все
      </button>

      <button
        className={`button ${filterTask === "done" ? "active" : ""}`}
        onClick={() => setFilterTask("done")}
      >
        Выполненные
      </button>

      <button
        className={`button ${filterTask === "notDone" ? "active" : ""}`}
        onClick={() => setFilterTask("notDone")}
      >
        Не выполненные
      </button>
    </div>
  );
};

export default FilterTasks;
