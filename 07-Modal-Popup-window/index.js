const buttonOpenModal = document.querySelector("[data-js-btn-open-modal]");
const buttonCloseModal = document.querySelector("[data-js-btn-close-modal]");
const modalBoxElement = document.querySelector("[data-js-modal-element]");


buttonOpenModal.addEventListener("click", () => {
    modalBoxElement.classList.add("open");
})

buttonCloseModal.addEventListener("click", () => {
    modalBoxElement.classList.remove("open");
})

modalBoxElement.addEventListener("click", (e) => { 
    if(!e.target.closest(".modal__box")) {
        modalBoxElement.classList.remove("open");
    }
})

window.addEventListener("keydown", (e) => {
    if(e.keyCode === 27) {
        modalBoxElement.classList.remove("open");
    }
})
