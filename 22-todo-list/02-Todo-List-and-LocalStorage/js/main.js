//1-10
const form = document.querySelector("#form");
const inputElement = document.querySelector("#taskInput");
const tasksListElement = document.querySelector("#tasksList");
const emptyListElement = document.querySelector("#emptyList");
const confirmModal = document.querySelector("#confirmModal");

let dataTasks = [];

if (localStorage.getItem("task")) {
  dataTasks = JSON.parse(localStorage.getItem("task"));
  renderTask();
};
checkEmptyList();

form.addEventListener("submit", (e) => addTask(e));

inputElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(e);
  }
});

tasksListElement.addEventListener("click", (e) => findButtonsTaskItem(e));

function renderTask() {
  let taskHTML = "";
  tasksListElement.innerHTML = "";
  dataTasks.forEach((task) => {
    taskHTML += `
        <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
			<span class="task-title ${task.done ? 'task-title--done' : ''}" >${task.text}</span>
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
  });
  tasksListElement.insertAdjacentHTML("beforeend", taskHTML);
};

function addTask(e) {
  e.preventDefault();
  const taskText = inputElement.value.trim();

  if (!taskText) return; // Не добавляем пустые задачи

  const newTask = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    text: taskText,
    done: false,
  };

  dataTasks.push(newTask);
  renderTask();
  setTaskLS("task", dataTasks);

  inputElement.value = "";
  inputElement.focus();
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
  const idTask = taskItem.getAttribute("id");

  confirmModal.addEventListener("click", (e) => {
    if (e.target.closest("#confirmBtn")) {
      if (taskItem) {
        taskItem.remove();
        dataTasks = dataTasks.filter((task) => task.id !== Number(idTask));
        checkEmptyList();
        setTaskLS("task", dataTasks);
      }
      confirmModal.classList.remove("active");
    } else if (e.target.closest("#cancelBtn")) {
      confirmModal.classList.remove("active");
    }
  });
}

//========================== Переключение выполненных таксок
function doneTask(taskItem, taskTitle) {
  if (!taskItem || !taskTitle) return;
  const idTask = taskItem.getAttribute("id");
  const findTask = dataTasks.find((task) => task.id === Number(idTask));
  if (taskItem) {
    taskTitle.classList.toggle("task-title--done");
    findTask.done = !findTask.done; // переключаем статус выполненной задачи в массиве
    setTaskLS("task", dataTasks);
}
}
//========================== local-Storage

function setTaskLS(key, arrayTasks) {
  localStorage.setItem(key, JSON.stringify(arrayTasks));
}

function getTaskLS(key) {
  const taskListHTML = localStorage.getItem(key);
  return taskListHTML ? JSON.parse(taskListHTML) : "";
};

//========================== Удаление и вставка сообщения Список дел пуст по условию

function checkEmptyList() {
  if (dataTasks.length === 0) {
    const emptyElementHTML = `
      <li id="emptyList" class="list-group-item empty-list">
          <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
          <div class="empty-list__title">Список дел пуст</div>
      </li> 
    `;
    tasksListElement.insertAdjacentHTML("afterbegin", emptyElementHTML);
  };

  if (dataTasks.length > 0) {
    const emptyElement = document.querySelector("#emptyList");
    emptyElement ? emptyElement.remove() : null;
  };
};
