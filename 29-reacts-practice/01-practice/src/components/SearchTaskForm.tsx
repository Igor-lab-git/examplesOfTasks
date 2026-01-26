import type { ChangeEvent } from "react";
import Field from "./Field";

interface ISearchTaskForm {
  onSearchTaskInput: (query: string) => void;
}

const SearchTaskForm = ({onSearchTaskInput}: ISearchTaskForm) => {
  return (
    <>
      <form
       className="todo__form"
       onSubmit={e => e.preventDefault()}>
        <Field
         label="Search task"
          id="search-task"
          type="search"
          onInput={(event: ChangeEvent<HTMLInputElement>) => onSearchTaskInput(event.target.value)}/>
      </form>
    </>
  );
 };

export default SearchTaskForm;
