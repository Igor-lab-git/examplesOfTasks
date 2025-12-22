const sliders = document.querySelector("#slider");
const form = document.querySelector("[data-js-form]");
const searchInput = document.querySelector("#img-search");

const API_URL = "https://api.unsplash.com//photos/random";
const KEY_ID = "VNocog_tMBSBn7iF-G21aFlwd8LeFLjdCKOLd03NxLY";

let arrayImages = [];
let currentSlide = null;

async function getRandomImage(query) {
  try {
    const response = await fetch(
      `${API_URL}?client_id=${KEY_ID}&count=4${query ? `&query=${query}` : ""}`
    );
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

const getArrayImages = async (query) => {
  arrayImages = await getRandomImage(query);
  currentSlide = arrayImages[0]?.id ?? null; // id первой картинки
  sliders.innerHTML = renderImage(arrayImages);
};
getArrayImages();

function renderImage(arrayImages) {
  if (!arrayImages || !arrayImages.length) return;
console.log(arrayImages);

  return arrayImages
    .map((objectImage) => {
      const { urls: { regular }, user: { name }, id, } = objectImage;
      const isActive = currentSlide === id ? "active" : ""; // проходясь по всем картинкам в map проверяет Если ID этой картинки равен currentSlide, то верни строку 'active', иначе — пустую строку
      return `
            <div class="slide ${isActive}" style="background-image: url(${regular})" data-id="${id}">
                <div class="slide-text">
                    <span>photo by</span>
                    ${name}
                </div>
            </div>
            `;
            
    }).join("");
};

sliders.addEventListener("click", (e) => {
  const currentTarget = e.target;
  const slidersAll = document.querySelectorAll(".slide");

  if (!currentTarget.classList.contains("slide")) return;
  const currentIdSlider = currentTarget.getAttribute("data-id");

  if (currentIdSlider !== currentSlide) {
    slidersAll.forEach((slider) => slider.classList.remove("active"));
    currentTarget.classList.add("active");
    currentSlide = currentIdSlider; //Перед сменой активности теперь обновляется значение переменной currentSlide, что обеспечивает правильную идентификацию текущего активного слайда.
  } else {
    // чтобы дальше проверить если id совпали currentIdSlider !== currentSlide то return
    return; // убераю возможность повторного добавлениия класаа active при клике на туже картинку если id совпадаетс с currentSlide
  }
});

form.addEventListener("keydown", async (e) => {
  if (e.target.classList.contains("input-search") && e.key === "Enter") {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (query) {
      await getArrayImages(query);
    }
    searchInput.value = "";
  }
});
