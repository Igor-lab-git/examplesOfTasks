const Button__Prev = document.querySelector("[data-js-btn-prev]");
const Button__Next = document.querySelector("[data-js-btn-next]");
const Slider__Box__Element = document.querySelector("[data-js-slider-line]");

let offset = 0;

Button__Prev.addEventListener("click" , () => {
    offset -= 256;
    if(offset < 0) {
        offset = 768;
    }
    Slider__Box__Element.style.right = `${offset}px`;
})

Button__Next.addEventListener("click" , () => {
    offset += 256;
    if(offset > 768) {
        offset = 0
    }
    Slider__Box__Element.style.right = `${offset}px`;
})
