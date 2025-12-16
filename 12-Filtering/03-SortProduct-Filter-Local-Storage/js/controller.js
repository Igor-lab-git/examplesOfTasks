import {Model} from "./model.js";
import {View} from "./view.js";


const modal = new Model();
const view = new View();

init();

async  function init() { // функция при загрузки страници initioState, и так как внутри её вызываем асинхронную функцию, то её тоже делаем ассинцронной
     await modal.loadingData(); // благодаря этому всё что будет ниже будет отробатовать строго после того как отработает await
    // console.log(modal.data);
    view.renderProducts(modal.data); // вызываю рендер функции здесь передаём в неё массив продуктов
    addEventListeners(); //функция прослушиватель событий запускаться тоже будет при инициализации страницы?, тоесть сначало будем брать все заявки и потом запескать функции прослушивателей
};

function addEventListeners() {
    view.elements.selectTypeElement.addEventListener("change",  sortProduct); // находим селекты и вышаем слушатели и доём им один обработчик
    view.elements.selectCategoryElement.addEventListener("change",  sortProduct);
    view.elements.selectOrderElement.addEventListener("change",  sortProduct);
};

function sortProduct(e) {
   const sortingValue =  view.sortingElementsValue();
    modal.sortingProducts(sortingValue); // в modal делаем логигу сортировки поэтом передаём туда объект текущих селектов
};




