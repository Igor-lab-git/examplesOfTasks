const containerImages = document.querySelector(".gallery");
const listCards = document.querySelectorAll(".gallery__card");
const listImages = document.querySelectorAll(".gallery__img");

const btnPrev = document.querySelector(".slider__btn slider__btn-left");
const btnNext = document.querySelector(".slider__btn slider__btn-right");
const btnClose = document.querySelector(".slider__btn-close");

let currentIndex = 0;

containerImages.addEventListener("click", (e) => {
    const currentCard = e.target.classList.contains("gallery__card");
    console.log(currentCard);
    console.log(e.target);
    
    
    
})

// listCards.forEach((card) => {
//     card.addEventListener("click", (e) => {
//         console.log(e.target);
//     })
// })