
const cart = document.querySelector(".js-cart"); // вся карзина
// const cartContainer = document.querySelector(".js-cart-order-container");
const productsList = document.querySelector(".js-products-list"); //список продуктов на странице отрисавныые js кодом с пагинацией
const cartList = document.querySelector(".js-cart-list"); // список добавления продуктов в карзину
const cartEmpty = document.querySelector(".js-cart-empty-container"); // div  с текстом пустая корзина
const cartOrder = document.querySelector(".js-cart-order-container"); // div  с текстом заказа и ценой 
const formatter = new Intl.NumberFormat("ru");

"close", "js-close-modal", "js-close-cart"

function cartData() {
    const updateCartItem = () => {
        cart.addEventListener("click", (e) => {

            if(!e.target.matches(".js-minus", ".js-plus")) {

                return;
            } // даже если не кликнули на кнопки в карзине ".js-minus", ".js-plus" Java-script вс ёравно создаёт переменные currentItems, minusButton хоть мы их и не видим 

            let currentItems = null;
            let minusButton;

            if(e.target.matches(".js-minus") || e.target.matches(".js-plus")) {
                // console.log(1);
                const counterContainer = e.target.closest(".js-counter");
                // console.log(counter);
                
                 currentItems = counterContainer.querySelector(".js-current-items"); //нейденный количество товара и присвоена в заранее объявленной переменной
                 minusButton = counterContainer.querySelector(".js-minus"); //получаем кнопку минус именно в этом счётчике чтобы нати именно ту кнопку товара минус на которую нажимаем на конкретном товаре сос своим счётчиком и удалять атрибуд disabled точечно у нужной кнопки
                 
            } //делегирование для того чтобы изменять currentItems нажимая на + и - изменялось только в нужном добавленном товаре

            if(e.target.matches(".js-plus")) {
                currentItems.textContent = ++currentItems.textContent;
                minusButton.removeAttribute("disabled");
                // minusButton.classList.remove("disabled") можно ещё вариант с добавлением класса
                calculateTotalRartValue();
            }

            if(e.target.matches(".js-minus")) {
                if(parseInt(currentItems.textContent) > 2) {
                    currentItems.textContent = --currentItems.textContent; // уменьшать можно пока currentItems не меньше 2 тоесть 1 и отключаем кнопку 
                } else {
                    currentItems.textContent = --currentItems.textContent;
                    minusButton.setAttribute("disabled", true);
                    // minusButton.classList.add("disabled") можно ещё вариант с добавлением класса
                }
                calculateTotalRartValue();
            }
            
        })
    }

    updateCartItem();

    const productInfo = {}; // при нажатии кнопки добавить в карзину у продукта складывается продукты в объект

    
    function addToCart() {
        productsList.addEventListener("click", (e) => {

            if(!e.target.classList.contains("js-buy-button")) {
                return
            }; // тоже если нажали не на ту кнопку событие не создавать

            if(e.target.classList.contains("js-buy-button")) { // у контейнера продукта на странице проверяем нажата ли кнопка с таким классом
                // console.log("Add to cart");
                const productElement = e.target.closest(".js-product"); // у нежатой кнопки находит родителя с таким классом у каждой кнопки своей карточки возвращает своего родителя

                const imageCard = productElement.querySelector(".js-image-card"); // вытягиваем у нужнай карточки всё что нужно для добавления и отрисовки в карзину
                const modelCard = productElement.querySelector(".js-title-card");
                const priceCard = productElement.querySelector(".js-price-card");
                const linkCard = productElement.querySelector(".js-link-card");

                productInfo.id = linkCard.getAttribute("id"); // формируем новые добавленные при нажатии объекты продуктов в отдельный объект
                productInfo.model =  modelCard.textContent;
                productInfo.price =  priceCard.textContent;
                productInfo.image =  imageCard.src;

                const productInCart = cartList.querySelector(`#${productInfo.id}`); //сюда вытягивается объект который используется для проверки наличия конкретного элемента товара в корзине перед добавлением нового элемента. Если элемент найден, значит товар уже присутствует в корзине тоесть проверяем наличие товара до того как добавили в дом если после этого ещё раз нажали на тот же товар то появляется в этой переменной элемент
                // console.log(productInCart);

                if(!productInCart) {
                    renderProductInCards(productInfo); // и отдаём на отрисовку в карзине в списке ul  в функцию если нет такого в карзине 
                } else {
                    const currentItemsProducts = productInCart.querySelector(".js-current-items"); // если есть вытягиваем тукещее значение товара из добавленного объекта парсим в число и вместо дублирования разметки одного и того же товара плюсуем его к текущему в разметке currentItem
                    const btnMinus = productInCart.querySelector(".js-minus");
                    currentItemsProducts.textContent = parseInt(currentItemsProducts.textContent) + 1;
                    btnMinus.removeAttribute("disabled");
                    // console.log(currentItemsProducts);
                }
                toggleCartStatus();
                calculateTotalRartValue();
            }
        })
    }
    addToCart();

    function renderProductInCards(productInfo) {
        const liCardEl = document.createElement("li");
        liCardEl.classList.add("cart-item", "column", "js-cart-item");

        liCardEl.innerHTML = `
         <span class="js-remove"></span>
           <div class="cartline row jcfs aic" id="${productInfo.id}">
             <div class="cart-image-container">
                 <img src="${productInfo.image}" alt="" class="${productInfo.model}">
             </div>
             <div class="column">
             <div class="cart-model row jcfs aic">
                  ${productInfo.model}
             </div>
             <div class="row jcsb aic">
                  <div class="counter row jcc aic js-counter">
                       <button type="button" class="minus control row jcc aic js-minus " disabled>-</button>
                       <div class="current-items row jcc aic js-current-items">1</div>
                       <button type="button" class="plus control row jcc aic js-plus">+</button>
                  </div>
                  <div class="row jcc aic">
                       <span class="cart-price row jcfe" data-price="${productInfo.price}">${productInfo.price}</span>
                       <span class="rouble">₽</span>
                  </div>
             </div>
           </div>
           </div>
        `
        cartList.append(liCardEl);
    }

    function removeProductFromCart() {
        cartList.addEventListener("click", (e) => {

            if(!e.target.classList.contains("js-remove")) {
                return;
            }; // тоже убираем все ненужные события

            if(!e.target.classList.contains("js-remove")) {
                return ;
            };

            if(e.target.classList.contains("js-remove")) { //делегированием находим кнопку крестик удалить 
                const cartItem = e.target.closest(".js-cart-item"); // от этого нажатия находим этот товар на котором нажали крестик
                cartItem.remove(); // и удаляется этот товар
                toggleCartStatus();
                calculateTotalRartValue();
            }
        })
    }

    removeProductFromCart();

    function toggleCartStatus() {  // добавлять и удалять дивы статуса карзина 
        if(cart.querySelector(".js-cart-item")) {
            cartOrder.classList.remove("hidden");
            cartEmpty.classList.add("hidden");
        } else {
            cartOrder.classList.add("hidden");
            cartEmpty.classList.remove("hidden");
        }
    }

    toggleCartStatus();

    function calculateTotalRartValue() {
        const cartItems = document.querySelectorAll(".js-cart-item");
        const cartTotalPrice = document.querySelector(".js-cart-total-price");

        let cartTotalValue = 0;
        
        cartItems.forEach((item) => {
            const itemPrice = item.querySelector(".cart-price");
            const itemCount = item.querySelector(".js-current-items");
            // const itemTotalPrice =  parseInt(itemCount.textContent) * parseInt(itemPrice.textContent.split(" ").join("")); //вариант если рядом с товаром в карзине показывать только стоимость единици не умножая при дублировании товара
            const itemTotalPrice =  parseInt(itemCount.textContent) * parseInt(itemPrice.dataset.price.split(" ").join("")); // а здесь после calculateTotalRartValue() перерасчёта itemPrice.textContent в itemPrice.dataset.price берётся литеральная сумма оригинальная data-price хранит неизменяемую цену за единицу товара textContent обновляется и показывает текущую общую стоимость
            console.log(itemTotalPrice);
            
            cartTotalValue += itemTotalPrice;
            itemPrice.textContent = formatter.format(itemTotalPrice); // formatter.forma форматирование вида цены
        })
        cartTotalPrice.textContent = formatter.format(cartTotalValue);
    }

    calculateTotalRartValue();

}


export{ cartData };


console.log(cart.contains(document.querySelector(".js-cart-order-container"))); //позволяет проверить наличие класса у элемента у которого проверяем
console.log(document.querySelector(".js-cart-order-container").closest(".js-cart")); // ищет родителя у нажатой цели и возвращает этот элемент
console.log(cart.matches(".js-cart")); //соответствует ли селектор на нажатом событии или кнопки то есть проверяет селдетрой у элемента cart
// console.log(e.target.closest(".js-cart"));  // метод в JavaScript, который возвращает ближайшего предка, соответствующего селектору




