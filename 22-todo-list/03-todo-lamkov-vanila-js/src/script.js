
const newTaskForm = document.querySelector("[data-js-todo-new-task-form]");
const newTaskInput = document.querySelector("[data-js-todo-new-task-input]");
const searchTaskForm = document.querySelector("[data-js-todo-search-task-form]");
const searchInput = document.querySelector("[data-js-todo-search-task-input]");
const totalTasksCount = document.querySelector("[data-js-todo-total-tasks]");
const deleteButtonAll = document.querySelector("[data-js-todo-delete-all-button]");
const list = document.querySelector("[data-js-todo-list]");
const item = document.querySelector("[data-js-todo-item]");
const itemCheckbox = document.querySelector("[data-js-todo-item-checkbox]");
const itemLable = document.querySelector("[data-js-todo-item-lable]");
const deleteButtonTask = document.querySelector("[data-js-todo-item-delete-button]");
const emptyMessage = document.querySelector("[data-js-todo-empty-message]");

const stateTasks = {
    items: getTasksToLocalStorage(),
    filtredItems: null,
    searcheText: "",
};

showEmptyMessage();
renderTask();


function setTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(stateTasks.items));
};

function getTasksToLocalStorage() {
    const tasks = localStorage.getItem("tasks");

    if(!tasks) return [];

    try {
        const parseTasks = JSON.parse(tasks);
        console.log(parseTasks);
        return Array.isArray(parseTasks) ? parseTasks : [];
    } catch (error) {
        console.log(error);
        return [];
    };
};


function addTask(text) {
    if(text) {
        stateTasks.items.push({
            id: crypto?.randomUUID() ?? Date.now().toString(),
            text,
            isChecked: false,
        });
    };
    renderTask();
    setTasksToLocalStorage();
};

function showEmptyMessage() {
    const isEmptyItemFiltred = stateTasks.filtredItems && stateTasks.filtredItems.length === 0;
    const isEmptyItem = stateTasks.items.length === 0;

    if(isEmptyItem) {
        emptyMessage.textContent = "Список задач пуст :)";
    } else if(isEmptyItemFiltred) {
        emptyMessage.textContent = "Похожих задач нет :)";
    } else {
        emptyMessage.textContent = "";
    }
};



function renderTask() {
    if(!stateTasks.items) return;

    totalTasksCount.textContent = stateTasks.items.length;

    deleteButtonAll.classList.toggle("is-visible", stateTasks.items.length > 0);

    const items = stateTasks.filtredItems ?? stateTasks.items;

    list.innerHTML = items.map(({id, text, isChecked}) => `
            <li class="todo__item todo-item" data-js-todo-item>
                <input class="todo-item__checkbox" type="checkbox" id="${id}" data-js-todo-item-checkbox ${isChecked ? "checked" : ""}>
                <label class="todo-item__label" for="${id}" data-js-todo-item-lable>${text}</label>
                <button class="todo-item__delete-button" type="button" aria-level="delete task" title="delete task" data-js-todo-item-delete-button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>            
                </button>
            </li>
    `).join("");
showEmptyMessage();
setTasksToLocalStorage();
};

newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = newTaskInput.value.trim();
    console.log(value);
    
    if(value.length > 0) {
        addTask(value);
        newTaskInput.value = "";
        newTaskInput.focus();
    };
});

deleteButtonAll.addEventListener("click", () => {
    const isConfirm = confirm("Вы дейстиветельно хотите удалить все задачи?");

    if(isConfirm) {
        stateTasks.items = [];  
        setTasksToLocalStorage();
        renderTask();
    };
});

list.addEventListener("click", ({target}) => {
    const deleteButton = target.matches("[data-js-todo-item-delete-button]");
    
    if(deleteButton) {
        const item = target.closest("[data-js-todo-item]");
        if(!item) return;

        const lable = item.querySelector("[data-js-todo-item-checkbox]");
        const id = lable.id;
        item.classList.add("is-dissapearing");

        setTimeout(() => {
            stateTasks.items = stateTasks.items.filter((task) => task.id !== id);
            renderTask();
            setTasksToLocalStorage();
        }, 500)
    };
});

list.addEventListener("click", ({target}) => {
    const targetTask = target.closest("[data-js-todo-item-checkbox]");

    if(!targetTask) return;
    const idTask = targetTask.id;
    const findTask = stateTasks.items.find(task => task.id === idTask);
    if(findTask) findTask.isChecked = !findTask.isChecked;
    renderTask();
    setTasksToLocalStorage();
});

function filtredTasks() {
    const formatedQueryText = stateTasks.searcheText.trim().toLowerCase();

    stateTasks.filtredItems = stateTasks.items.filter(({text}) => {
        const textFotmated = text.toLowerCase();
        return textFotmated.includes(formatedQueryText);
    });
    renderTask();
    setTasksToLocalStorage();
};

function resetFiltredTasks() {
    stateTasks.filtredItems = null;
    stateTasks.searcheText = "";
    renderTask();
    setTasksToLocalStorage();
};


searchTaskForm.addEventListener("submit", (e) => e.preventDefault());

searchInput.addEventListener("input", ({target}) => {
    const value = target.value.trim();
    
    if(value.length > 0) {
        stateTasks.searcheText = value;
        filtredTasks();
        console.log(stateTasks.searcheText);
        console.log(stateTasks.filtredItems);
    } else {
        renderTask();
        resetFiltredTasks();
        setTasksToLocalStorage();
    };
});
