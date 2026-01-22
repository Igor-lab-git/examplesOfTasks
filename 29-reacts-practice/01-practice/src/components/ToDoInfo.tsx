const ToDoInfo = ({ total, done }) => {

  const hasTasks = total > 0;

  return (
    <>
      <div className="todo__info">
        <div className="todo__total-tasks">
          Done: {done} from Total: {total}
        </div>
        {hasTasks && (
          <button className="todo__delete-all-button" type="button">
            Delete all
          </button>
        )}
      </div>
    </>
  );
};

export default ToDoInfo;
