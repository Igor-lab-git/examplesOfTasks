import { useContext, type ChangeEvent, type FormEvent } from "react";
import Field from "./Field";
import { ContextTasks } from "../context/ContextTasks";

interface ISearchTaskForm {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchTaskForm = () => {

  const context = useContext(ContextTasks) as ISearchTaskForm;
  const {searchQuery, setSearchQuery} = context;

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
