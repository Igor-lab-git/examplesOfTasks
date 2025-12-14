import { doneSvg, pinnedSvg, editSvg, delSvg } from "./svg";

export function getTasToLocalStorage() { // сохранять в LocalStorage
    const findTask = localStorage.getItem("task");
    return findTask ? JSON.parse(findTask) : [];
};

export function setTasToLocalStorage(task) { // взять из LocalStorage
    if(task) {
        localStorage.setItem("task", JSON.stringify(task));
    };
};

export function createGeneratorId() { //рандомные id для присвоения к новым задачам
    const newDate = new Date();
    const randomNumber = Math.floor(Math.random() * 100000);
    return newDate + randomNumber;
};