const ButtonsAddToCart = document.querySelectorAll('.item-hero__add-btn');
let countCartElement = document.querySelector('.header__cart-count');
const cartProductCartContainer = document.querySelector('.cart-block-header__items');
const totalPriceCartElement = document.querySelector('.cart-block-header__result-price');

const cart = [];

function updateToCart() {
  countCartElement.textContent = cart.length;
  cartProductCartContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((product) => {
    const productItemElement = document.createElement("div");
    productItemElement.classList.add("cart-block-header__item", "item-cart-header");
    productItemElement.dataset.name = product.name;
    if(product) {
      productItemElement.innerHTML = `
        <a href="${product.href}" class="item-cart-header__image">
            <img src="${product.image}" alt="image product">
        </a>
        <a href="${product.href}" class="item-cart-header__link">
             <h4 class="item-cart-header__title">${product.name}</h4>
        </a>
        <span class="item-cart-header__price">$${product.price}</span>
        <div class="item-cart-header__count">
             <button type="button" class="item-cart-header__btn btn-minus">-</button>
                <span class="item-cart-header__number">${product.quantity}</span>
             <button type="button" class="item-cart-header__btn btn-plus">+</button>
        </div>
        <button type="button" class="item-cart-header__remove btn-remove">
             <i class="fa-solid fa-trash"></i>
        </button>
      `;
      cartProductCartContainer.appendChild(productItemElement);
      totalPrice += product.price * product.quantity;
    }
  })
      totalPriceCartElement.textContent = `$${totalPrice.toFixed(2)}`;
  // console.log(countCartElement);

};



ButtonsAddToCart.forEach((button) => {
  button.addEventListener('click', (e) => {
    const productName = button.getAttribute('data-name');
    const productImage = button.getAttribute('data-image');
    const productHREF = button.getAttribute('data-href');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    const hasProductToCart = cart.find((product) => product.name === productName);

    if(hasProductToCart) {
      hasProductToCart.quantity++;
    } else {
      cart.push(
          {
            name: productName,
            price: productPrice,
            image: productImage,
            href: productHREF,
            quantity: 1,
          }
      );
    };
  updateToCart();
  });

});


document.querySelector('.cart-block-header__items').addEventListener('click', (e) => {
  const button = e.target.closest("button");
  if(!button) return;

  const productContainer = button.closest(".item-cart-header");
  const productName = productContainer?.dataset.name;
  if(!productName) return;


  if(button.classList.contains("btn-plus")) {
    increaseQuantity(productName);
  } else if(button.classList.contains("btn-minus")) {
    decreaseQuantity(productName);
  } else if(button.classList.contains("btn-remove")) {
    removeProduct(productName);
  }
});


function removeProduct(name) {
  const indexProduct = cart.findIndex((product) => product.name === name);
  if(indexProduct !== -1) {
    cart.splice(indexProduct, 1);
  };
  updateToCart();
};

function increaseQuantity(name) {
  const findProduct = cart.find((product) => product.name === name);
  if(findProduct) {
    findProduct.quantity++;
  };
  updateToCart();
};

function decreaseQuantity(name) {
  const findProduct = cart.find((product) => product.name === name);
  if(findProduct && findProduct.quantity > 0) {
    findProduct.quantity--;
  };
  updateToCart();
};
