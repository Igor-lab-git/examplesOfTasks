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
    try {
        const listItems = localStorage.getItem("task-item");
        
        if(!listItems) {
            return [];
        } else {
            return Array.isArray(JSON.parse(listItems)) ? JSON.parse(listItems) : []
        }
    } catch (error) {
        console.log(error);
        return [];
    }
};

function setItemsFromLocalStorage() {
    localStorage.setItem("task-item", state.items);
};

function renderTaskItem() {
    if(!state.items || state.items.length === 0) return;

    elements.totalTasksCount.textContent = state.items.length;
    state.items.forEach((item) => {
        const taskHTML = `
        <li class="todo__item todo-item" data-js-todo-item>
            <input class="todo-item__checkbox" type="checkbox" id="todo-1" data-js-todo-item-checkbox>
            <label class="todo-item__label" for="todo-1" data-js-todo-item-lable>Task 1</label>
            <button class="todo-item__delete-button" type="button" aria-level="delete task" title="delete task" data-js-todo-item-delete-button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>            
            </button>
        </li>
        ` 
    });
}

console.log(elements);
// 1 03