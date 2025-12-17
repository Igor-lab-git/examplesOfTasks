

export class View {
    elements = {
        productListContainer: document.querySelector(".productList"), // получем контейнер для отрисовки
        inputElement: document.querySelector("#filterInput"), // получем input b dct селекты
        selectCategoryElement: document.querySelector("#sortCategory"),
        selectTypeElement: document.querySelector("#sortType"), //
        selectOrderElement: document.querySelector("#sortOrder"),
        formElement: document.querySelector("#form"),
    };

    constructor() {};

    renderProducts(data) {
        if(data) {
            this.elements.productListContainer.innerHTML = '';
            data.forEach((product) => {
                const markup = `
                  <li>
                    <span>${product.subtitle}</span>
                    <h3>${product.name}</h3>
                    <p>Цена: ${product.price} руб.</p>
                    <p>Дата добавления: ${product.date}</p>
                  </li>
                `
                this.elements.productListContainer.insertAdjacentHTML('afterbegin', markup);
            });
        };
    };

    sortingElementsValue() { // функция создания и структурирования значений текущего value у селектов для дёргания из controller сортировать их там
        return {
            sortType: this.elements.selectTypeElement.value, // значения селектов 
            sortCategory: this.elements.selectCategoryElement.value,
            sortOrder: this.elements.selectOrderElement.value,
        };
    };

    sortingElements() { // функция возврата дом элементов для сброса фильтров в другой функции
        return {
            sortType: this.elements.selectTypeElement,
            sortCategory: this.elements.selectCategoryElement,
            sortOrder: this.elements.selectOrderElement,
        };
    };
};