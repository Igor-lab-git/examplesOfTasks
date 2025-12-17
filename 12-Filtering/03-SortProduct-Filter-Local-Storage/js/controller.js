import {Model} from "./model.js";
import {View} from "./view.js";


const modal = new Model();
const view = new View();

init();

async function init() { // функция при загрузки страници initioState, и так как внутри её вызываем асинхронную функцию, то её тоже делаем ассинцронной
    await modal.loadingData(); //вызов сдесь fetch функ. благодаря этому всё что будет ниже будет отробатовать строго после того как отработает await
    const sortingDomElements = view.sortingElements(); // DOM элементы селектов для функ. updateFromURL
    modal.updateFromSaveURL(sortingDomElements); // функция для обновления и сохранения URL строки с данными сортинка товаров на странице
    sortProduct(); // заменили за место просто рендера продуктов на страници так как здесь ещё будем по мимо рендера предусматривать всю сортировку
    addEventListeners(); //функция прослушиватель событий запускаться тоже будет при инициализации страницы?, тоесть сначало будем брать все заявки и потом запескать функции прослушивателей
};

function addEventListeners() {
    view.elements.selectTypeElement.addEventListener("change", sortProduct); // находим селекты и вышаем слушатели и доём им один обработчик
    view.elements.selectCategoryElement.addEventListener("change", sortProduct);
    view.elements.selectOrderElement.addEventListener("change", sortProduct);
    view.elements.inputElement.addEventListener("input", inputFilterProducts);
    view.elements.formElement.addEventListener("submit", formSubmit);
};

function sortProduct() {
    const sortingValue = view.sortingElementsValue(); // функция создания и структурирования значений текущего value у селектов для дёргания из controller сортировать их там
    const sortingData = modal.sortingProducts(sortingValue); // в modal делаем логигу сортировки поэтом передаём туда объект текущих селектов, и отсортированные данные тоесть массивы согласно отсортированным случиям записываем в переменную

    view.renderProducts(sortingData); // и рендерим новые сортированные массивы

    modal.updateURL(sortingValue); // обновление и сохранение фильтров селектов в URL ссылки, сразу после сортировки этих селектов
};

function inputFilterProducts(e) {
    // const valueText = e.target.value; или такой вариант
    const valueText = this.value.toLowerCase(); // значение из input
    modal.filterSearchInput(valueText);
    // console.log(valueText);
    sortProduct(); // и для перерисовки введённых в input текста вызываем выше стоящую функцмю 
    // и привводе не возвращает страницу в исходный рендер при удалении текста, связано с тем что мы мутируем наш массив this.data
};

function formSubmit(e) {
    e.preventDefault();
    const sortingDomElements = view.sortingElements(); // массыв дом элементов сортировок
    modal.resetFilterUIElements(sortingDomElements); // для обнуления слектов
    sortProduct(); // и после сброса фильтров страницу обновляем поточу-что товары остаются не пересованными после изменения селектов value
};



