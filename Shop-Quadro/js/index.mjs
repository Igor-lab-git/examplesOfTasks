import { cartData } from "./modules/cartData.mjs";
import { closeCart, openCart } from "./modules/modal.mjs";
import { pagination } from "./modules/pagination.mjs";
import products from "./modules/products.mjs";
import { renderProductCards } from "./modules/renderCard.mjs";
const productContainer = document.querySelector(".js-products-list");

window.addEventListener("DOMContentLoaded", () => {
  // renderProductCards(products, productContainer);
  pagination(products);
});

openCart();
closeCart();
cartData();
