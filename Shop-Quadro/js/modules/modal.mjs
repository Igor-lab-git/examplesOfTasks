const Open_Cart_Button = document.querySelector(".js-cart-btn");
const Cart = document.querySelector(".js-cart");
const Overlay_Element = document.querySelector(".js-overlay");
const Close_Cart_Elements = document.querySelectorAll(".js-close-cart");

const getScrollbarWidth = () => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.append(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollbarWidth;
} // функция содающая временно div element чтобы вичислить ширину скрола что бы добавить его в ширину всего документа при открытии карзины урать скачёк сдвига контента при его открытии


const toggleCart = (isActive) => {
    document.body.style.overflow = isActive ? "hidden" : "";
    document.body.style.marginRight = isActive ? `${getScrollbarWidth()}px` : "";
    Cart.classList.toggle("active", isActive);
    Overlay_Element.classList.toggle("active", isActive);
} // вся логика написанная в обработчиках вынесена в отдельную функцию и на основе булева значения принимает рашание закрыть или открыть карзину

const openCart = () => {
    Open_Cart_Button.addEventListener("click", () => {
        toggleCart(true);
    })
}

const closeCart = () => {
    Close_Cart_Elements.forEach((element) => {
        element.addEventListener("click", () => {
            toggleCart(false);
        })
    })
}

export { openCart, closeCart };