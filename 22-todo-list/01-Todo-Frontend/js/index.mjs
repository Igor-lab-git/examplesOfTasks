"use strict"

import { createGeneratorId, getTasToLocalStorage, initSortableList, setTasToLocalStorage, updateUIListTasks } from "./utils.mjs";

//==========================================


const formElement = document.querySelector(".form");
const textareaElement = document.querySelector(".form__textarea");
const button_Send =  document.querySelector(".form__send-btn");
const outputElement =  document.querySelector(".output");
const button_Cancel =  document.querySelector(".form__cancel-btn");

let isEditTask = false; // флаг переменная означает что в данный момент происходит редактирование, состояние
let idEditTask = null;


formElement.addEventListener("submit", (e) => addTask(e));
outputElement.addEventListener("click", (e) => buttonsEvents(e));
button_Cancel.addEventListener("click", () => resetFormUI()); // для кнопки отмена редактирования функция отчистки UI внизу
outputElement.addEventListener("dragenter", (e) => e.preventDefault()); //По умолчанию браузер НЕ разрешает бросать элементы куда попало. Нужно явно сказать: "Здесь можно!"
outputElement.addEventListener("dragover", (e) => initSortableList(e)); //Каждые несколько миллисекунд браузер говорит: "О! Опять проносят над мной!" И каждый раз вызывается initSortableList()
updateUIListTasks(); //для первоночального отображения тасок сахранённые в LS

function addTask(e){ // функция не только добавляет таску но и редактирует и поэтому это србытие надо отлавливать для функции saveEditTask
    e.preventDefault();

    const taskText = textareaElement.value.trim().replace(/\s+/g, " ");
    
    if (!taskText || !taskText.length) {
        alert("Введите текст задачи!");
        textareaElement.focus();
        return; // обязательно выходить из всей функции если данных нет, что бы не продолжалась работу функция ниже
    } else {
        textareaElement.value = "";
    };

    if(isEditTask) { // добавление и редактирование происходит от одного и тогоже события и чтобы понимать что функции addTask делать просто добавить нову или изменить старую таску далается проверка флагом isEditTask
        saveEditTask(taskText); // передаём в функцию редактирования поле текста
        return; // и обязательно return что бы ниже код не выполнялся
    };

    const arrayTasksLS = getTasToLocalStorage(); //получаем данные из LS

    if(taskText) { // формируем объект структуру нашей таски
        arrayTasksLS.push({
            id: createGeneratorId(),
            taskText: taskText,
            done: false,
            pinned: false,
            position: 1000,
        });
    };

    setTasToLocalStorage(arrayTasksLS); // сохраняем в LS
    updateUIListTasks(); //для обновления UI
    formElement.reset();
};

// const arrayGetTasksLS = getTasToLocalStorage();

function buttonsEvents(e) { // делегированием находим все кнопки и навешиваем слушатели
    const taskButtonsContainer = e.target.closest(".task__btns");
    if(!taskButtonsContainer) return;

    if(e.target.closest(".task__done")) {
        bindEventDoneBtn(e);
    } else if(e.target.closest(".task__pinnet")) {
        bindEventPinnetBtn(e);
    } else if(e.target.closest(".task__edit")) {
        bindEventEditBtn(e);
    } else if(e.target.closest(".task__del")) {
        bindEventDeleteBtn(e);
    };
};

function bindEventDoneBtn(e) {
    const currentTask = e.target.closest(".task"); // находим всю таску 
    const idCurrentTask = Number(currentTask.getAttribute("data-tsk-id")); //находим нужную таску и сразуже id из аттребута
    const arrayTaskLS = getTasToLocalStorage(); // возмём тски из LocalStorage
    const findedIndexTask = arrayTaskLS.findIndex((task) => task.id === idCurrentTask); // находим индекс задачи из LocalStorage

    if(findedIndexTask === -1) return alert("Данной задачи в писке задачь отсуствует :(");

    if(!arrayTaskLS[findedIndexTask].done && arrayTaskLS[findedIndexTask].pinned) { // идея такая что если текущая таска не выполнена и мы хотим нажать выполнена и в это же время является закреплённой, то при нажатии выполнить открепляем её в закреплённых и ставим как выполненную
        arrayTaskLS[findedIndexTask].pinned = false; // потоу как задача не может быть однавременно и выполненной и закреплённой
    };

    if(arrayTaskLS[findedIndexTask].done) { // ну и этой проверкой смотрим если данная задача по этому индексу выполненна то ставим её в не выполнненые
        arrayTaskLS[findedIndexTask].done = false;
    } else {
        arrayTaskLS[findedIndexTask].done = true; //  и наоборот если не выполнена ставим как выполненная
    };

    setTasToLocalStorage(arrayTaskLS); // и сохраняем новый отфильтрованный масив обратно в LocalStorage
    updateUIListTasks(); //для обновления UI 
};

function bindEventPinnetBtn(e) {
    const currentTask = e.target.closest(".task");
    const idCurrentTask = Number(currentTask.getAttribute("data-tsk-id"));
    const arraytasksLS = getTasToLocalStorage();
    const findedIndexTask = arraytasksLS.findIndex((task) => task.id === idCurrentTask);

    if(findedIndexTask === -1) return 

    if(!arraytasksLS[findedIndexTask].pinned && arraytasksLS[findedIndexTask].done) { // если задача выполнена и не закрепленна нет нежды её закреплять и просто выходим из функции
        return alert("Чтобы закрепить текущую задаче переключите её из выполненые в не выполненные");;
    }

    if(arraytasksLS[findedIndexTask].pinned) { // если задача закрепленна то убераем флаг и стили на не закреплённую 
        arraytasksLS[findedIndexTask].pinned = false;
    } else {
        arraytasksLS[findedIndexTask].pinned = true; // и наоборот ставим как закреплённую
    };

    setTasToLocalStorage(arraytasksLS); // и сохраняем новый отфильтрованный масив обратно в LocalStorage
    updateUIListTasks(); //для обновления UI 
};

function bindEventEditBtn(e) {
    const currentTask = e.target.closest(".task");
    const taskText = currentTask.querySelector(".task__text");
    idEditTask = Number(currentTask.getAttribute("data-tsk-id"))
    const arrayTsaksLS = getTasToLocalStorage();

   textareaElement.value = taskText.textContent;  //при нажатии на кнопку edit вставляем найденный текст из таски в поле textarea для дальнейшего редактирования
   isEditTask = true;
   button_Send.textContent = "Редактировать"; // меняем текст кнопки Добавить на Редактировать
   button_Cancel.classList.remove("none");  //реанимируем кнопку Cancel показываю её в UI
   formElement.scrollIntoView();  // позволяет программно прокрутить окно браузера до определённого элемента. Метод прокручивает контейнер родителя элемента так, чтобы элемент

    setTasToLocalStorage(arrayTsaksLS); // и сохраняем новый отфильтрованный масив обратно в LocalStorage
    updateUIListTasks(); //для обновления UI 
};

function bindEventDeleteBtn(e) {
    const idCurrentTask = e.target.closest(".task").getAttribute("data-tsk-id"); //находим нужную таску и сразуже id из аттребута
    const arrayTaskLS = getTasToLocalStorage(); // возмём тски из LocalStorage
    const newFiltredTaskArray = arrayTaskLS.filter((task) => Number(task.id ) !== Number(idCurrentTask)); // удалим нту таску по id путём фильтрации, фильтрует так, возвращает массив всех тасок с id не равые idCurrentTask(тоесть все кроме этой)

    setTasToLocalStorage(newFiltredTaskArray); // и сохраняем новый отфильтрованный масив обратно в LocalStorage
    updateUIListTasks(); //для обновления UI
};

function saveEditTask(task) {
    const arrayTasksLS = getTasToLocalStorage();
    const findIndexTaskLS = arrayTasksLS.findIndex((task) => task.id === idEditTask); //idEditTask вынессена отдельно переменная для обновления таски находим индекс таски

    if(findIndexTaskLS !== -1) { // проверяем найденный id есть ли он
        arrayTasksLS[findIndexTaskLS].taskText = task; // и вычисляя найденным id из массива тасок в LS и заменяем её на тзменённую
        setTasToLocalStorage(arrayTasksLS); // фиксируем изменения в LS
        updateUIListTasks(); // обновляем UI
    } else {
        return alert("Такая задача не найдена");
    };

    resetFormUI();
};

function resetFormUI() {  // отдельная функция очистки UI
    idEditTask = null;
    isEditTask = false;
    button_Send.textContent = "Добавить";
    button_Cancel.classList.add("none");
    formElement.reset();
};







