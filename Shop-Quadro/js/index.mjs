import { renderCard } from "./modules/renderCard.mjs";
import products from "./modules/products.mjs";
const productContainer = document.querySelector(".js-products-list")

window.addEventListener("DOMContentLoaded", () => {
  renderCard(products, productContainer);
});
