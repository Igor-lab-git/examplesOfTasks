"use strict"
//==========================================
import { ERROR_SERVER, NO_ITEMS_CART } from './constants.js';
import { 
    showErrorMessage,
    setBasketLocalStorage,
    getBasketLocalStorage,
    checkingRelevanceValueBasket
} from './utils.js';

const cart = document.querySelector('.cart');
let productsData = [];

getProducts();

cart.addEventListener("click", deleteProductBasket);

async function getProducts() {
    try {
        const res = await fetch("./data/products.json");
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            productsData = await res.json();
            console.log(productsData);
            
            showProductBasket(productsData);
    } catch (error) {
        showErrorMessage(ERROR_SERVER);
        console.log(error.message);
        
    }
};

function showProductBasket(productsData) {
    cart.textContent = ""; // при вызове функции обнулять страницу

    if(!productsData || !productsData.length) { //проверка на наличие данных
        showErrorMessage(ERROR_SERVER);
        return;
    };

    checkingRelevanceValueBasket(productsData); // проверка актуальности товара на сервере прежде чем брать из LocalStorage и что то сними делать
    const basketProducts = getBasketLocalStorage(); // получаем всё что есть в карзине 

    if(!basketProducts || !basketProducts.length) { //проверка на наличие данных и останавливаем функцию
        showErrorMessage(ERROR_SERVER);
        return;
    };

    const findProductsToLocStor = productsData.filter((product) => basketProducts.includes(String(product.id)));// в LocalStorage хранятся только id товаров и что бы их отобразить в карзине нужно их сравнить с товарами в базе данных и на основе это отрисовать в карзине такие же товары
   
    if(!findProductsToLocStor.length) { //проверка на наличие массива данных  который возвращает filter поэтому такая проверка  !findProductsToLocStor.length и останавливаем функцию если fakse
        showErrorMessage(ERROR_SERVER);
        return;
    };
   
    renderProductsBasket(findProductsToLocStor)
}


// Рендер товаров в корзине
function renderProductsBasket(arr) {
    arr.forEach(card => {
        const { id, img, title, price, discount } = card;
        const priceDiscount = price - ((price * discount) / 100);

        const cardItem = 
        `
        <div class="cart__product" data-product-id="${id}">
            <div class="cart__img">
                <img src="./images/${img}" alt="${title}">
            </div>
            <div class="cart__title">${title}</div>
            <div class="cart__block-btns">
                <div class="cart__minus">-</div>
                <div class="cart__count">1</div>
                <div class="cart__plus">+</div>
            </div>
            <div class="cart__price">
                <span>${price}</span>₽
            </div>
            <div class="cart__price-discount">
                <span>${priceDiscount}</span>₽
            </div>
            <div class="cart__del-card">X</div>
        </div>
        `;

        cart.insertAdjacentHTML('beforeend', cardItem);
    });
};

function deleteProductBasket(e) {
    const buttonDelete = e.target.closest(".cart__del-card"); // отслеживаем кнопку удалить
    
    if(!buttonDelete) {
        return;
    };
    
    const cardProduct = e.target.closest(".cart__product"); // отслеживаем родителя этой кнопки
    const idProductBasket = cardProduct.getAttribute("data-product-id"); // и отслеживаем id продукта
    const basket = getBasketLocalStorage(); // достаём id в карзине

    const updateBasket = basket.filter((item) => item !== idProductBasket); // и удаляем не нужный item-в нём хранятся только id товара
    // этот filter говорит буквально то что выдай нам весь массив не содержащий этот id, без этого товара
    setBasketLocalStorage(updateBasket); // обновить id товаров в LocalStorage
    getProducts(); // и ещё раз перерендерить с транице вызвав getProducts, потому что сама по себе страница не обновится
};