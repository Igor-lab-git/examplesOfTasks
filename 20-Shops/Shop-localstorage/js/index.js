"use strict"
//==========================================
import { 
    showErrorMessage,
    setBasketLocalStorage,
    getBasketLocalStorage,
    checkingRelevanceValueBasket
} from './utils.js';

import { 
    COUNT_SHOW_CARDS_CLICK, 
    ERROR_SERVER,
    NO_PRODUCTS_IN_THIS_CATEGORY
} from './constants.js';

const cards = document.querySelector('.cards');
const btnShowCards = document.querySelector('.show-cards');
let shownCards = COUNT_SHOW_CARDS_CLICK; //изначальное значение shownCards
let countClickBtnShowCards = 1; // изначальное отображение первые 5 карточек
let productsData = [];

getProducts();

async function getProducts() {
    try {
        if(!productsData.length) { // что бы лишний раз не делать запрос на сервер, проверяем существующий массив и его длинну продуктов если он не пустой  функцию не вызывается
            // const res = await fetch("../data/products.json");
            const res = await fetch("data/products.json");;

            if(!res.ok) {
                throw new Error(res.statusText);
            }
            productsData = await res.json(); 
             
            if((productsData.length > COUNT_SHOW_CARDS_CLICK) && btnShowCards.classList.contains("none")) { //если товара в массиве больше 5 то показываем кнопку показать ещё
                btnShowCards.classList.remove("none");
            }
            renderStartPage(productsData);
        }
    } catch (error) {
        showErrorMessage(ERROR_SERVER);
        console.log(error.message);
        
    }
};

function renderStartPage(data) {
    
    if(!data || !data.length) { // ещё раз проверяем наличие данных в массиве перед началом функции 
        showErrorMessage(NO_PRODUCTS_IN_THIS_CATEGORY);
        return; // и обязательно return что-бы функцияя дальше не выполнялась
    };

    const arrCards = data.slice(0, COUNT_SHOW_CARDS_CLICK); // режим нашь массив что-бы ренлдерить порциями до 5
    createCards(arrCards);

    checkingRelevanceValueBasket(data); // для проверки длительного не посещения сайта, на случай если товара уже нет в продаже тоесть в базе данной и основании этого вывода удаляет или обновляет id товара в локальном хранилище

    const basket = getBasketLocalStorage(); // если есть в LocalStorage добавленные id товаров
    checkingActiveButton(basket) // то проверяется функцией состояние кнопки и рендеридся первая страница с актуальными изменениями
};

// Рендер карточки
function createCards(arrCards) {
    arrCards.forEach((cart) => {
        const { id, title, price, discount, img } = cart;
        const priceDiscount = price - ((price * discount) / 100);
        const cardElement = `
                <div class="card" data-product-id="${id}">
                    <div class="card__top">
                        <a href="card.html?id=${id}" class="card__image">
                            <img
                                src="./images/${img}"
                                alt="${title}"
                            />
                        </a>
                        <div class="card__label">-${discount}%</div>
                    </div>
                    <div class="card__bottom">
                        <div class="card__prices">
                            <div class="card__price card__price--discount">${priceDiscount}</div>
                            <div class="card__price card__price--common">${price}</div>
                        </div>
                        <a href="card.html?id=${id}" class="card__title">${title}</a>
                        <button class="card__add">В корзину</button>
                    </div>
                </div>        
        `
        cards.insertAdjacentHTML("beforeend", cardElement);
    });
};
//Интернет-магазин на JavaScript. Кнопка показать еще. Карточка товара. Корзина. Local Storage.20-00

function sliceArrayCards() {
    if(shownCards >= productsData.length) return; //если отображено всё то дальше функция прерывается

    countClickBtnShowCards++; // прибовляется до 2 изначально в ней 1 тоесть 5 карточек
    const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards; // прибавляется каддый раз по 5 карточек

    const arrCards = productsData.slice(shownCards, countShowCards); // shownCards показывает сколько карточек сейчас на странице и отрезает ещё countShowCards партию
    createCards(arrCards);
    shownCards = cards.children.length; // при клике проверяет количество карточек на странице

    if(shownCards >= productsData.length) {
        btnShowCards.classList.add("none"); // проверка количества карточек на странице и в массиве если закончились то кнопка пропадает
    }
}

btnShowCards.addEventListener("click", () => sliceArrayCards());
cards.addEventListener("click", (e) => addToCart(e));

function addToCart(e) {

   const targeButtonAdd = e.target.closest(".card__add");
   if(!targeButtonAdd) return;

   const currentCard = targeButtonAdd.closest(".card");
   
     const currentIdCard = currentCard.getAttribute("data-product-id");

     const basked = getBasketLocalStorage(); // получаем карточки из LocalStorage для получения от туда если они там есть

     if(basked.includes(currentIdCard)) return; // и проверяем если карточка есть прерываем остальной код

     basked.push(currentIdCard); // иначе пушим новую карточку
     setBasketLocalStorage(basked); // и добавляем basked с новым id  в LocalStorage
     checkingActiveButton(basked); // проверка карточек которые уже находятся LocalStorage
};

function checkingActiveButton(basked) {
    const buttonsAddCard = document.querySelectorAll(".card__add");

    buttonsAddCard.forEach((button) => {
        const findCardButton = button.closest(".card");
        const idCard = findCardButton.getAttribute("data-product-id");
      
        const isInBasked = basked.includes(idCard); // проверяем есть ли такой id в LocalStorage

        button.disable = isInBasked; // в isInBasked булевое значение делает кнопку кликабельной или нет
        button.classList.toggle("active", isInBasked); // и на основе булевое значение добавляет класс
        button.textContent = isInBasked ? "В корзине" : "В корзину";
    }); 
};

//Интернет-магазин на JavaScript. Кнопка показать еще. Карточка товара. Корзина. Local Storage. 41

