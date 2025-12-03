
const cart = document.querySelector(".js-cart");
const cartContainer = document.querySelector(".js-cart-order-container");
const productsList = document.querySelector(".js-products-list");
const cartList = document.querySelector(".js-cart-list");



function cartData() {
    const updateCartItem = () => {
        cart.addEventListener("click", (e) => {

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
            }

            if(e.target.matches(".js-minus")) {
                if(parseInt(currentItems.textContent) > 2) {
                    currentItems.textContent = --currentItems.textContent; // уменьшать можно пока currentItems не меньше 2 тоесть 1 и отключаем кнопку 
                } else {
                    currentItems.textContent = --currentItems.textContent;
                    minusButton.setAttribute("disabled", true);
                    // minusButton.classList.add("disabled") можно ещё вариант с добавлением класса
                }
            }
            
        })
    }

    updateCartItem();

    const productInfo = {}; // при нажатии кнопки добавить в карзину у продукта складывается продукты в объект

    function renderProductInCards(productInfo) {
        const liCardEl = document.createElement("li");
        liCardEl.classList.add("cart-item", "column", "js-cart-item");

        liCardEl.innerHTML = `
         <span class="close"></span>
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

    function addToCart() {
        productsList.addEventListener("click", (e) => {
            if(e.target.classList.contains("js-buy-button")) { // у контейнера проверяем нажата ли кнопка с таким классом
                // console.log("Add to cart");
                const productElement = e.target.closest(".js-product"); // у нежатой кнопки находит родителя с таким классом у каждой кнопки своей карточки возвращает своего родителя

                const imageCard = productElement.querySelector(".js-image-card");
                const modelCard = productElement.querySelector(".js-title-card");
                const priceCard = productElement.querySelector(".js-price-card");
                const linkCard = productElement.querySelector(".js-link-card");

                productInfo.id = linkCard.getAttribute("id");
                productInfo.model =  modelCard.textContent;
                productInfo.price =  priceCard.textContent;
                productInfo.image =  imageCard.src;

                const productInCart = cartList.querySelector(`#${productInfo.id}`);
                console.log(productInCart);
                renderProductInCards(productInfo);
            }
        })
    }
    addToCart();
}


export{ cartData };


console.log(cart.contains(document.querySelector(".js-cart-order-container"))); //e.target.classList.contains есть ли у этого контейнера нажимаемая цель с таким классом
console.log(document.querySelector(".js-cart-order-container").closest(".js-cart")); // ищет родителя у нажатой цели и возвращает этот элемент
console.log(cart.matches(".js-cart")); //соответствует ли селектор на нажатой событии или кнопки то есть проверяет селдетрой у элемента cart




