
const newTaskForm = document.querySelector("[data-js-todo-new-task-form]");
const newTaskInput = document.querySelector("[data-js-todo-new-task-input]");
const searchTaskForm = document.querySelector("[data-js-todo-search-task-form]");
const totalTasksCount = document.querySelector("[data-js-todo-total-tasks]");
const deleteButtonAll = document.querySelector("[data-js-todo-delete-all-button]");
const list = document.querySelector("[data-js-todo-list]");
const item = document.querySelector("[data-js-todo-item]");
const itemCheckbox = document.querySelector("[data-js-todo-item-checkbox]");
const itemLable = document.querySelector("[data-js-todo-item-lable]");
const deleteButtonTask = document.querySelector("[data-js-todo-item-delete-button]");
const emptyMessage = document.querySelector("[data-js-todo-empty-message]");

const stateTasks = {
    items: [],
    filtredItems: null,
    searcheText: "",
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

function addTask(text) {
    if(text) {
        stateTasks.items.push({
            id: crypto?.randomUUID() ?? Date.now().toString(),
            text: text,
            isChecked: false,
        });
    };
    console.log(stateTasks.items);
    renderTask();
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

showEmptyMessage();

function renderTask() {
    if(!stateTasks.items && stateTasks.items.length === 0) return;

    totalTasksCount.textContent = stateTasks.items.length;

    deleteButtonAll.classList.toggle("is-visible", stateTasks.items.length > 0);

    const items = stateTasks.items ?? stateTasks.filtredItems;

    if(items) {
        list.innerHTML = items.map(({id, test, isChecked}) => `
            <li class="todo__item todo-item" data-js-todo-item>
                <input class="todo-item__checkbox" type="checkbox" id="${id}" data-js-todo-item-checkbox ${isChecked ? "checked" : ""}>
                <label class="todo-item__label" for="${id}" data-js-todo-item-lable>${test}</label>
                <button class="todo-item__delete-button" type="button" aria-level="delete task" title="delete task" data-js-todo-item-delete-button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>            
                </button>
            </li>
    `).join("");
    
};
showEmptyMessage();
};







// const stateClasses = {
//     isVisible: "is-visible",
//     isDissapearing: "is-dissapearing",
// };

// const state = {
//     items: getItemsFromLocalStorage(),
//     filtredItems: null,
//     searchText: "",
// };

// function setItemsFromLocalStorage() {
//     localStorage.setItem("todo-task", JSON.stringify(state.items));
// };

// function getItemsFromLocalStorage() {
//     const listItems = localStorage.getItem("todo-task");

//     if(!listItems) {
//         return [];
//     }
//     try {
//         const parsedData = JSON.parse(listItems);
//         return Array.isArray(parsedData) ? parsedData : [];
    
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// };


// function renderTaskItem() {
//     if(!state.items || state.items.length === 0) return;

//     elements.totalTasksCount.textContent = state.items.length;

//     elements.deleteButtonAll.classList.toggle(stateClasses.isVisible, state.items.length > 0);

//     const items = state.filtredItems ?? state.items; // проверяем наличие тасок и там ир там 

//     elements.list.innerHTML = items.map(({id, title, isChecked}) => `
//         <li class="todo__item todo-item" data-js-todo-item>
//             <input class="todo-item__checkbox" type="checkbox" id="${id}" data-js-todo-item-checkbox ${isChecked ? "checked" : ""}>
//             <label class="todo-item__label" for="${id}" data-js-todo-item-lable>${title}</label>
//             <button class="todo-item__delete-button" type="button" aria-level="delete task" title="delete task" data-js-todo-item-delete-button>
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>            
//             </button>
//         </li>
//         ` ).join("");

//     const isEmptyFilteredItems = state.filtredItems?.length === 0;
//     const isEmptyItems = state.items.length === 0;

//     elements.emptyMessage.textContent = isEmptyFilteredItems ? "Такой задачи не найдено" : isEmptyItems ? "Список задач пуст" : "";
// }
// // renderTaskItem();

// function addTask(title) {
//         state.items.push({
//             id: crypto?.randomUUID() ?? Date.now().toString(),
//             title,
//             isChecked: false
//         });
//     setItemsFromLocalStorage();
//     renderTaskItem();
// };


// function deleteTask(id) {
//     state.items = state.items.filter((task) => task.id !== id);
//     setItemsFromLocalStorage();
//     renderTaskItem();
// };

// function toggleCheckedTask(id) {
//     state.items = state.items.map((task) => {
//         if(task.id === id) {
//             return {
//                 ...task,
//                 isChecked: !task.isChecked,
//             };
//         };
//         return task;
//     });
//     setItemsFromLocalStorage();
//     renderTaskItem();
// };

// function filtredTasks() {
//     const queryFormatedText = state.searchText.toLowerCase();

//     state.filtredItems = state.items.filter(({title}) => {
//         const formatedTitel = title.toLowerCase();
//         return formatedTitel.includes(queryFormatedText);
//     });
//     renderTaskItem();
// };

//  function resetFiltered() {
//     state.filtredItems = null;
//     state.searchText = "";

//     renderTaskItem();
// };

// elements.newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newTaskTitle = elements.newTaskInput.value;

//     if(newTaskTitle.trim().length > 0) {
//         addTask(newTaskTitle);
//         resetFiltered(); // на всякий случай
//         elements.newTaskInput.value = "";
//         elements.newTaskInput.focus();
//     };
// });

// elements.searchTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
// });

// elements.searchTaskInput.addEventListener("input", ({target}) => {
//     const valueText = target.value.trim();

//     if(valueText.length > 0) {
//         state.searchText = valueText;
//         filtredTasks();
//     } else {
//         resetFiltered();
//     };
// });

// elements.deleteButtonAll.addEventListener("click", () => {
//     const isConfirm = confirm("Вы действительно хотите удалить все задачи?");
//     if(isConfirm) {
//         state.items = [];
//         setItemsFromLocalStorage();
//         renderTaskItem();
//     };
// });

// elements.list.addEventListener("click", ({target}) => {
//     if(target.matches("[data-js-todo-item-delete-button]")) {
//         const item = target.closest("[data-js-todo-item]");
//         const checkboxItem = item.querySelector("[data-js-todo-item-checkbox]");
//         item.classList.add(stateClasses.isDissapearing);

//         setTimeout(() => {
//             deleteTask(checkboxItem.id);
//         }, 500);
//     };
// });

// elements.list.addEventListener("change", ({target}) => {
//     if(target.matches("[data-js-todo-item-checkbox]")) {
//         toggleCheckedTask(target.id);
//     };
// });

// console.log(elements);
// // 1 03

