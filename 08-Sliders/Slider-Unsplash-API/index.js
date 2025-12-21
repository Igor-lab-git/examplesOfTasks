const sliders = document.querySelector('#slider');

const API_URL = "https://api.unsplash.com//photos/random";
const KEY_ID = "VNocog_tMBSBn7iF-G21aFlwd8LeFLjdCKOLd03NxLY";

let arrayImages = [];
let currentSlide = null;

async function getRandomImage() {
    try {
        const response = await fetch(`${API_URL}?client_id=${KEY_ID}&count=4&query=food`);
        // console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText, "Картинок нет");
        };
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e.message);
    };
};

const getArrayImages = async () => {
    arrayImages = await getRandomImage();
    currentSlide = arrayImages[0].id; // id первой картинки
    sliders.innerHTML = renderImage(arrayImages);
};
getArrayImages();

function renderImage(arrayImages) {
    if (!arrayImages || !arrayImages.length) return;

    console.log(arrayImages[0])
    return arrayImages.map((objectImage) => {

        const { urls: { regular }, user: { name }, id } = objectImage;
        const isActive = currentSlide === id ? "active" : ""; // проходясь по всем картинкам в map проверяет Если ID этой картинки равен currentSlide, то верни строку 'active', иначе — пустую строку
        return (
            `
            <div class="slide ${isActive}" style="background-image: url(${regular})" data-id="${id}">
                <div class="slide-text">
                    <span>photo by</span>
                    ${name}
                </div>
            </div>
            `
        )
    }).join("");

};

sliders.addEventListener("click", (e) => {
    const currentTarget = e.target;
    const slidersAll = document.querySelectorAll(".slide");

    if (!currentTarget.classList.contains("slide")) return;
    const currentIdSlider = currentTarget.getAttribute("data-id");

    if (currentIdSlider !== currentSlide) {
        slidersAll.forEach(slider => slider.classList.remove("active"));
        currentTarget.classList.add("active");
        currentSlide = currentIdSlider; //Перед сменой активности теперь обновляется значение переменной currentSlide, что обеспечивает правильную идентификацию текущего активного слайда.
    } else { // чтобы дальше проверить если id совпали currentIdSlider !== currentSlide то return
        return; // убераю возможность повторного добавлениия класаа active при клике на туже картинку если id совпадаетс с currentSlide
    };
});


