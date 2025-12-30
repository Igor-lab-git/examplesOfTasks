

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

    highlightFilterValue(name, filterValue) { // подсветка вукв в названиях продуктов при вводе тех букв которые вводим в input в search
        const lowerCaseName = name.toLowerCase(); // приводим к единому регистру
        const lowerCaseFilterValue = filterValue.toLowerCase();

        const startIndex = lowerCaseName.indexOf(lowerCaseFilterValue);

        if(startIndex !== -1) {
            const start = name.substring(0, startIndex);
            const interval = name.substring(startIndex, startIndex + filterValue.length);
            const end = name.substring(startIndex + filterValue.length);

            const highlightName = `${start}<span class="active">${interval}</span>${end}`;

            return highlightName;
        };
        return name;
    };

    renderProducts(data) {
        if(data) {
            this.elements.productListContainer.innerHTML = '';
            data.forEach((product) => {
                const name = this.highlightFilterValue(product.name, this.elements.inputElement.value);
                const markup = `
                  <li>
                    <span>${product.subtitle}</span>
                    <h3>${name}</h3>
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