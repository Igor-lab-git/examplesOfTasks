const elements = {
    root: document.querySelector("[data-js-todo]"),
    newTaskForm: document.querySelector("[data-js-todo-new-task-form]"),
    newTaskInput: document.querySelector("[data-js-todo-new-task-input]"),
    searchTaskForm: document.querySelector("[data-js-todo-search-task-form]"),
    searchTaskInput: document.querySelector("[data-js-todo-search-task-input]"),
    totalTasksCount: document.querySelector("[data-js-todo-total-tasks]"),
    deleteButtonAll: document.querySelector("[data-js-todo-delete-all-button]"),
    list: document.querySelector("[data-js-todo-list]"),
    item: document.querySelector("[data-js-todo-item]"),
    itemCheckbox: document.querySelector("[data-js-todo-item-checkbox]"),
    itemLable: document.querySelector("[data-js-todo-item-lable]"),
    deleteButtonTask: document.querySelector("[data-js-todo-item-delete-button]"),
    emptyMessage: document.querySelector("[data-js-todo-empty-message]"),
};

const stateClasses = {
    isVisible: "is-visible",
    isDissapearing: "is-dissapearing",
};

const state = {
    items: getItemsFromLocalStorage(),
    filtredItems: null,
    searchText: "",
};

function getItemsFromLocalStorage() {
    const listItems = localStorage.getItem("task-item");

    if(!listItems) {
        return [];
    }
    try {
        const parsedData = JSON.parse(listItems);
        return Array.isArray(parsedData) ? parsedData : [];
        
    } catch (error) {
        console.log(error);
        return [];
    }
};

function setItemsFromLocalStorage() {
    localStorage.setItem("task-item", JSON.stringify(state.items));
};


function renderTaskItem() {
    if(!state.items || state.items.length === 0) return;

    elements.totalTasksCount.textContent = state.items.length;

    elements.deleteButtonAll.classList.toggle(stateClasses.isVisible, state.items.length > 0);

    const items = state.filtredItems ?? state.items; // проверяем наличие тасок и там ир там 

    elements.list.innerHTML = items.map(({id, title, isChecked}) => `
        <li class="todo__item todo-item" data-js-todo-item>
            <input class="todo-item__checkbox" type="checkbox" id="${id}" data-js-todo-item-checkbox ${isChecked ? "checked" : ""}>
            <label class="todo-item__label" for="${id}" data-js-todo-item-lable>${title}</label>
            <button class="todo-item__delete-button" type="button" aria-level="delete task" title="delete task" data-js-todo-item-delete-button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>            
            </button>
        </li>
        ` ).join("");

    const isEmptyFilteredItems = state.filtredItems?.length === 0;
    const isEmptyItems = state.items.length === 0;

    elements.emptyMessage.textContent = isEmptyFilteredItems ? "Такой задачи не найдено" : isEmptyItems ? "Список задач пуст" : "";
}
// renderTaskItem();

function addTask(title) {
        state.items.push({
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title,
            isChecked: false
        });
    setItemsFromLocalStorage();
    renderTaskItem();
};


function deleteTask(id) {
    state.items = state.items.filter((task) => task.id !== id);
    setItemsFromLocalStorage();
    renderTaskItem();
};

function toggleCheckedTask(id) {
    state.items = state.items.map((task) => {
        if(task.id === id) {
            return {
                ...task,
                isChecked: !task.isChecked,
            };
        };
        return task;
    });
    setItemsFromLocalStorage();
    renderTaskItem();
};

function filtredTasks() {
    const queryFormatedText = state.searchText.toLowerCase();

    state.filtredItems = state.items.filter(({title}) => {
        const formatedTitel = title.toLowerCase();
        return formatedTitel.includes(queryFormatedText);
    });
    renderTaskItem();
};

 function resetFiltered() {
    state.filtredItems = null;
    state.searchText = "";

    renderTaskItem();
};

elements.newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTaskTitle = elements.newTaskInput.value;

    if(newTaskTitle.trim().length > 0) {
        addTask(newTaskTitle);
        resetFiltered(); // на всякий случай
        elements.newTaskInput.value = "";
        elements.newTaskInput.focus();
    };
});

elements.searchTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

elements.searchTaskInput.addEventListener("input", ({target}) => {
    const valueText = target.value.trim();

    if(valueText.length > 0) {
        state.searchText = valueText;
        filtredTasks();
    } else {
        resetFiltered();
    };
});

elements.deleteButtonAll.addEventListener("click", () => {
    const isConfirm = confirm("Вы действительно хотите удалить все задачи?");
    if(isConfirm) {
        state.items = [];
        setItemsFromLocalStorage();
        renderTaskItem();
    };
});

elements.list.addEventListener("click", ({target}) => {
    if(target.matches("[data-js-todo-item-delete-button]")) {
        const item = target.closest("[data-js-todo-item]");
        const checkboxItem = item.querySelector("[data-js-todo-item-checkbox]");
        item.classList.add(stateClasses.isDissapearing);

        setTimeout(() => {
            deleteTask(checkboxItem.id);
        }, 500);
    };
});

elements.list.addEventListener("change", ({target}) => {
    if(target.matches("[data-js-todo-item-checkbox]")) {
        toggleCheckedTask(target.id);
    };
});

console.log(elements);
// 1 03
