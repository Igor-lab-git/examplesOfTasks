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
        if(a.pinned !== b.pinned) {
            return a.pinned ? -1 : 1;
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

    dragAndDrop(); // dragAndDrop вызывается только после того как отрисовались все карточки
};


function dragAndDrop() { // функционас события старта перетаскивания и окончания перетаскивания с сохранением позиций по index
    const listTasksUI = [...document.querySelectorAll(".task")]; //находим весь список тасок на странице

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
    const arrayTasksLS = getTasToLocalStorage(); // получаем таски из LS
    const listTasksUI = [...document.querySelectorAll(".task")]; // и все таски со страницы UI

    listTasksUI.forEach((task, index) => {
        const getIdTaskAttribute = Number(task.getAttribute("data-tsk-id"));  // значение атрибута всегда строка
        const findIdTask = arrayTasksLS.findIndex((item) => item.id === getIdTaskAttribute); //находим нужную задачу из LS точнее её индекс по сравнению id  из Attribute что бы с ним взаимодействовать

        if(findIdTask !== -1) {
            arrayTasksLS[findIdTask].position = index; // изночально position 1000 от балды, но сейчас задаём нужную позицию, теперь её позиция является index
        }; // тоесть согласно расположению в LS таски и будут являтся нумерации индексов и на странице UI
    });

    setTasToLocalStorage(arrayTasksLS); // обновляем LS 
    updateUIListTasks(); // и страницу 
};


export function initSortableList(e) {
    e.preventDefault(); //Здесь мы говорим браузеру: «не используй стандартные действия, связанные с перетаскиванием».

    const outputElement =  document.querySelector(".output"); // контейнер вывода результата
    const draggingItem = document.querySelector(".dragging"); //элемент, который сейчас перетаскиваем или находим элемен с навешинным классов в  task.addEventListener("dragstart", () => {setTimeout(() => {task.classList.add("dragging")}, 0)});
    let notDraggingTasks = [...document.querySelectorAll(".task:not(.dragging)")]; // остальные элементы, кроме перетаскиваемо, тоесть наоборот находим все таск не с классом dragging

    let dropDownTasks = notDraggingTasks.find((task) => { //Здесь мы проверяем, над какой задачей находится наша мышь в процессе перетаскивания. Если координата Y нашей мыши меньше середины высоты какого-то другого элемента, значит, именно туда мы собираемся поместить наш перетаскиваемый элемент.
        return e.clientY <= task.offsetTop + task.offsetHeight / 2;
    });
    outputElement.insertBefore(draggingItem, dropDownTasks); // вставляем перед найденным местом, перемещаем элемент

};

// .output — куда вставляем перемещаемый элемент,
// .dragging — тот самый элемент, который пользователь двигает прямо сейчас,
// notDraggingTasks — массив всех остальных элементов, которые пока неподвижны.