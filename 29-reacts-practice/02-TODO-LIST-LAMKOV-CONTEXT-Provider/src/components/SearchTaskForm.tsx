import type { ChangeEvent, FormEvent } from "react";
import Field from "./Field";

interface ISearchTaskForm {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchTaskForm = ({searchQuery, setSearchQuery}: ISearchTaskForm) => {
  return (
    <>
      <form
          className="todo__form"
          onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <Field
          label="Search task"
          id="search-task"
          type="search"
          value={searchQuery}
          onInput={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}/>
      </form>
    </>
  );
 };

export default SearchTaskForm;
