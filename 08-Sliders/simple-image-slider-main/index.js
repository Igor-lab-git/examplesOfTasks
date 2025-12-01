const sliderBox = document.querySelector(".slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const pointsList = document.querySelectorAll(".point");
const imageList = document.querySelectorAll(".image");



pointsList[0].classList.add("point-active");
imageList[0].classList.add("image-active");

function showSlider(index) {
    imageList[index].classList.add("image-active");
    pointsList[index].classList.add("point-active");
}

pointsList.forEach((point, index) => {
    point.addEventListener("click", () => showSlider(index))
})






// script>
//     const slides = document.querySelectorAll('.slider-image');
//     const dots = document.querySelectorAll('.slider-dot');

//     function showSlide(index) {
//         slides.forEach(slide => slide.classList.remove('active-image'));
//         dots.forEach(dot => dot.classList.remove('active-dot'));
        
//         slides[index].classList.add('active-image');
//         dots[index].classList.add('active-dot');
//     }

//     dots.forEach((dot, idx) => {
//         dot.onclick = () => {
//             showSlide(idx);
//         };
//     });

//     // Инициализация первой картинки и точки
//     showSlide(0);
// </script>