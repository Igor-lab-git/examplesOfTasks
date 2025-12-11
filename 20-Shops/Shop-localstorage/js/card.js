"use strict"
//==========================================
import { ERROR_SERVER, PRODUCT_INFORMATION_NOT_FOUND } from './constants.js';
import { 
    showErrorMessage,
    checkingRelevanceValueBasket
} from './utils.js';

const wrapper = document.querySelector('.wrapper');
let productsData = [];

getProducts();

async function getProducts() {
    try {
        if(!productsData.length) { // что бы лишний раз не делать запрос на сервер, проверяем существующий массив и его длинну продуктов если он не пустой  функцию не вызывается
            // const res = await fetch("../data/products.json");
            const res = await fetch("./data/products.json");
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            productsData = await res.json();
            
            showProductDetails(productsData);
        }
    } catch (error) {
        showErrorMessage(ERROR_SERVER);
        console.log(error.message);
        
    }
};

function getIdParamsUrl(params) { // функция предназначена для извлечения значения параметра из текущего URL-адреса 
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(params); // передайтся имя извекающего параметра "id"
    
};


function showProductDetails(productsData) {
    if(!productsData || !productsData.length) { // проверка наличия данных с сервера
        showErrorMessage(ERROR_SERVER);
    }

    checkingRelevanceValueBasket(productsData); // опять же проверка наличия товара на сервере

    const urlIdSearchProduct = Number(getIdParamsUrl("id")); // полячаем значение id

    if(!urlIdSearchProduct) { // проверяем наличие id  и при ошибки прерываем функцию
        showErrorMessage(ERROR_SERVER);
        return;
    };

    const findProduct = productsData.find((product) => product.id === urlIdSearchProduct);

    if(!findProduct) { // опять  проверяем наличие найденного продукта  и при ошибки прерываем функцию
        showErrorMessage(ERROR_SERVER);
        return;
    };

    renderInfoProduct(findProduct); // если всё ok то отдайм найденный продукт на отрисовку
}


// Рендер информации о товаре
function renderInfoProduct(product) {
    const { img, title, price, discount, descr } = product;
    const priceDiscount = price - ((price * discount) / 100);
    const productItem = 
        `
        <div class="product">
            <h2 class="product__title">${title}</h2>
            <div class="product__img">
                <img src="./images/${img}" alt="${title}">
            </div>
            <p class="product__descr">${descr}</p>
            <div class="product__inner-price">
                <div class="product__price">
                    <b>Цена:</b>
                    ${price}₽
                </div>
                <div class="product__discount">
                    <b>Цена со скидкой:</b>
                    ${priceDiscount}₽
                </div>
            </div>
        </div>
        `
    wrapper.insertAdjacentHTML('beforeend', productItem);
}