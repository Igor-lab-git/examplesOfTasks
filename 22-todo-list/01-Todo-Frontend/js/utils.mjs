import { doneSvg, pinnedSvg, editSvg, delSvg } from "./svg.mjs";
const outputUIElement = document.querySelector(".output")

export function getTasToLocalStorage() { // взять из LocalStorage 
    const findTask = localStorage.getItem("task");
    return findTask ? JSON.parse(findTask) : [];
};

export function setTasToLocalStorage(task) { // сохранять в LocalStorage
    if(task) {
        localStorage.setItem("task", JSON.stringify(task));
    };
};

export function createGeneratorId() { //рандомные id для присвоения к новым задачам
    const newDate = Date.now();
    const randomNumber = Math.floor(Math.random() * 100000);
    return newDate + randomNumber;
};

export function updateUIListTasks() {
    outputUIElement.textContent = "";
    const arrayTasksLS = getTasToLocalStorage();
    renderTasksUI(arrayTasksLS);
}; // функция обновления и обнуления UI перед рендером или перерендером задач

function renderTasksUI(arrayTasks) {
    if(!arrayTasks || !arrayTasks.length) return; // проверка не пустой массив

    arrayTasks.sort((a, b) => {
        if(a.done !== b.done) {
            return a.done ? 1 : -1;
        };
        if(a.pinnet !== b.pinnet) {
            return a.pinnet ? -1 : 1;
        };

        return a.position - b.position;
    }).forEach((taskItem, index) => {
        const { id, taskText, done, pinned } = taskItem;

        const item = `
         <div class="task ${done ? "done" : ""} ${pinned ? "pinned" : ""}" data-tsk-id="${id}" draggable="true">
                <p class="task__text">${taskText}</p>
                <span class="task__index ${done ? "done" : ""}">${index + 1}</span> 
                <div class="task__btns">
                    <button class="task__done ${done ? 'active' : ""}">${doneSvg}</button>
                    <button class="task__pinnet ${pinned ? 'active' : ""}">${pinnedSvg}</button>
                    <button class="task__edit">${editSvg}</button>
                    <button class="task__del">${delSvg}</button>
                </div>
            </div>
        `
        outputUIElement.insertAdjacentHTML("beforeend", item);
    });
};


function dragAndDrop() {
    const listTasksUI = [...document.querySelector(".task")]; //находим весь список тасок на странице

    listTasksUI.forEach((task) => { // Когда начинаем перетаскивать элемент, срабатывает событие dragstart и добавляем класс опасити
        task.addEventListener("dragstart", () => {
            setTimeout(() => {task.classList.add("dragging")}, 0)
        });

        task.addEventListener("dragend", () => { //Когда пользователь отпускает элемент, срабатывает событие dragend. Мы удаляем временный класс dragging и проверяем количество задач в списке:
            task.classList.remove("dragging");
            if(listTasksUI > 1) { //Если в списке больше одной задачи, запускается функция обновления положения задач updatePositionTask()
                updatePositionTask();
            };
        });
    });
};

function updatePositionTask() {

}

// 1-3
