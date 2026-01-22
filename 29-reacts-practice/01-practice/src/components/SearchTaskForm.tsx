import Field from "./Field";

const SearchTaskForm = () => {
  return (
    <>
      <form className="todo__form">
        <Field label="Search task" id="search-task" type="search"/>
      </form>
    </>
  );
};

export default SearchTaskForm;
