const cart = document.querySelector(".js-cart");
const cartContainer = document.querySelector(".js-cart-order-container");


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
}

export{ cartData };

console.log(cart.contains(cartContainer));
console.log(cart.contains(document.querySelector(".js-cart-order-container")));
console.log(document.querySelector(".js-cart-order-container").closest(".js-cart"));
console.log(cart.matches(".js-cart"));

// cart.setAttribute()
// cart.removeAttribute()


