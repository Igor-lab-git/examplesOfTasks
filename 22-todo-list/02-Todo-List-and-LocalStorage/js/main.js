const form = document.querySelector("#form");
const inputElement = document.querySelector("#taskInput");
const tasksListElement = document.querySelector("#tasksList");
const emptyListElement = document.querySelector("#emptyList");
const confirmModal = document.querySelector("#confirmModal");

form.addEventListener("submit", (e) => addTask(e));

inputElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(e);
  }
});
tasksListElement.addEventListener("click", (e) => findButtonsTaskItem(e));

function addTask(e) {
  e.preventDefault();
  const taskText = inputElement.value.trim().toLowerCase();

  if (taskText !== "") {
    tasksListElement.insertAdjacentHTML("beforeend", insertTaskHTML(taskText));
  }

  inputElement.value = "";
  inputElement.focus();
  if (tasksListElement.children.length > 1) {
    emptyListElement.classList.add("none");
  }
}

function insertTaskHTML(taskText) {
  let taskHTML = "";
  if (taskText) {
    taskHTML = `
        <li class="list-group-item d-flex justify-content-between task-item">
			<span class="task-title">${taskText}</span>
			<div class="task-item__buttons">
				<button type="button" data-action="done" class="btn-action">
					<img src="./img/tick.svg" alt="Done" width="18" height="18">
				</button>
				<button type="button" data-action="delete" class="btn-action">
						<img src="./img/cross.svg" alt="Done" width="18" height="18">
				</button>
			</div>
		</li>
    `;
  }
  return taskHTML;
}

function findButtonsTaskItem(e) {
  const button = e.target.closest("[data-action]");
  const taskItem = e.target.closest(".task-item");
  const taskTitle = taskItem.querySelector(".task-title");

  if (button && button.dataset.action === "delete") {
    deleteTask(taskItem, taskTitle.textContent);
  } else if (button && button.dataset.action === "done") {
    doneTask(taskItem, taskTitle);
  }
}

function deleteTask(taskItem, taskTitle) {
  confirmModal.classList.add("active");
  confirmModal.querySelector("#taskTitle").textContent = taskTitle;

  confirmModal.addEventListener("click", (e) => {
    if (e.target.closest("#confirmBtn")) {
      if (taskItem) {
        taskItem.remove();
      };
      confirmModal.classList.remove("active");

      if ([...tasksListElement.children].length === 1) {
        emptyListElement.classList.remove("none");
      };
    } else if (e.target.closest("#cancelBtn")) {
      confirmModal.classList.remove("active");
    };
    
  });
};


function doneTask(taskItem, taskTitle) {
  if (taskItem) {
    taskTitle.classList.toggle("task-title--done");
  };
};
