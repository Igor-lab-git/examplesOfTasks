const containerImages = document.querySelector(".gallery");
const listCards = document.querySelectorAll(".gallery__card");
const listImages = document.querySelectorAll(".gallery__img");
const sliderContainer = document.querySelector(".slider");

const btnPrev = document.querySelector(".slider__btn-left");
const btnNext = document.querySelector(".slider__btn-right");
const btnClose = document.querySelector(".slider__btn-close");

let currentIndex = 0; // глабальную переменную заводим что бы была доступна во всех переменных
let fullImage = null;
let newImage = null;

btnClose.addEventListener("click", () => removeImage());
btnPrev.addEventListener("click", () => chageImage("left"));
btnNext.addEventListener("click", () => chageImage("right"));

containerImages.addEventListener("click", (e) => {
    if (e.target.closest(".gallery__card")) {
        const card = e.target.closest(".gallery__card");
        currentIndex = [...listCards].findIndex(item => item === card); // нати индекс нажатой карточки в массиве карточек 
        showImage();
    };
});


function showImage() {
    fullImage = listImages[currentIndex].cloneNode(); //обращаясь к массиву картинок и вычисляя индексом нужную картинку клонируем её
    fullImage.style.width = "100%";
    sliderContainer.append(fullImage);
    sliderContainer.classList.remove("hidden");
};


function chageImage(dir) {
    if (dir === "left") {
        currentIndex > 0 ? currentIndex-- : currentIndex = listCards.length - 1;
    } else if (dir === "right") {
        currentIndex < listCards.length - 1 ? currentIndex++ : currentIndex = 0;
    } else {
        return;
    };

    newImage = listImages[currentIndex].cloneNode(); // обновляем картинку переключенную индексом обновляем её и добавляем 
    newImage.style.width = "100%";
    fullImage.replaceWith(newImage); // не дублирую картинки в контейнере переписываем в fullImage newImage
    fullImage = newImage;
};

function removeImage() {
    if (fullImage) { //если есть fullImage удаляем
        fullImage.remove();
    };
    if (newImage) {  //если есть newImage удаляем
        newImage.remove();
    };

    sliderContainer.classList.add("hidden");
};
