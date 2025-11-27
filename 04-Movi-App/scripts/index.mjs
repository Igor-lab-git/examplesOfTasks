const listCardElement = document.querySelector('.list-card');
const formElement = document.querySelector("[data-js-form]");
const inputSearchElement = document.querySelector(".header__search");
const modalElement = document.querySelector('.modal');


const API_Key = "b2b7a3d8-7101-4751-9b0f-ef926351f504";
const URL_String = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1";
const URL_String_Search = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const URL_String_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.1/films/";
// const URL_String_DETAILS = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

async function getMovies(url) {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": API_Key,
            }
        });
        if (!response.ok) {
            const errorMessage = `Проблема на сервере, данных нет: ${response.status}` ;
            throw new Error(errorMessage);
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        renderMovies(data);
        return data;
    } catch (e) {
        console.log(e.message)
    }
}

getMovies(URL_String);


const createNodeElement = (tagName, className, content = "") => {
    const nodeElement = document.createElement(tagName);
    nodeElement.classList.add(className);
    if(nodeElement && content !== undefined && content !== null) {
        nodeElement.innerHTML = content;
    }
    return nodeElement;
}

const setClassByRating = (numberRating) => {

    if(Number(numberRating) >= 7) {
        return "green"
    } else if(Number(numberRating) >= 5 && Number(numberRating) < 7) {
        return "orange"
    } else if(Number(numberRating) < 5) {
        return "red"
    }
}

const clearListCard = () => {
    document.querySelector('.list-card').innerHTML = ""
}

function renderMovies(data) {
    const moviesArray = data?.films || data?.items || [];
    clearListCard();
    moviesArray.forEach(movie => {
        const cardElement = createNodeElement("article", "card");

        const movieId = movie.kinopoiskId || movie.filmId;

        if(movie) {
            cardElement.innerHTML = `
                <div class="card__cover">
                    <img class="card__image" src="${movie.posterUrlPreview}" alt="${movie.nameRu}">
                    <div></div>
                </div>
                <div class="card__info">
                    <h2 class="card__title">${movie.nameRu}</h2>
                    <div class="card__category">${movie.genres.map(genre => `  ${genre.genre}`)}</div>
                    <div class="card__rating card__rating--${setClassByRating(movie?.ratingKinopoisk || movie?.rating)}">${movie?.ratingKinopoisk || movie?.rating}</div>
                </div>
            `
        }
        listCardElement.appendChild(cardElement);
        cardElement.addEventListener("click", () => openModalElement(movieId));
    })
}


formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const textInputValue = inputSearchElement.value.trim();
    const apiSearchUrl = `${URL_String_Search}${textInputValue}`;
    
    if(textInputValue) {
         getMovies(apiSearchUrl);
    }
    inputSearchElement.value = "";
});



async  function openModalElement(id) {
    const apiSearchUrl = URL_String_DETAILS + id;
    const filmDetailsResponse = await fetch(apiSearchUrl, {
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": API_Key,
        }
    });

    const filmDetails = await filmDetailsResponse.json();
    console.log("filmDetails.data", filmDetails)

    modalElement.classList.add("modal-show");
    document.body.classList.add("stop__scrolling");

    modalElement.innerHTML = `
    <div class="modal__card">
       <img class="modal__image" src="${filmDetails.data.posterUrl}" alt="">
        <h2>
            <span class="modal__title">${filmDetails.data.nameRu}</span>
             <span class="modal__release-year"> - ${filmDetails.data.year}</span>
        </h2>
             <ul class="modal__info">
              <div class="modal__load"></div>
                 <li class="modal__genre">${filmDetails.data.genres.map((el) => `<span> ${el.genre} </span>`)}</li>
                  <li class="modal__time">${filmDetails.data.filmLength} минут</li>
                  <li>Сайт: <a class="modal__link" href="${filmDetails.data.webUrl}">${filmDetails.data.webUrl}</a></li>
                  <li class="modal__description">Описание: ${filmDetails.data.description}</li>
              </ul>
        <button onclick="closeModalElement()"  class="modal__btn-close" type="button">Закрыть</button>
    </div>
`;
// const buttonClose = document.createElement(".modal__btn-close");
//     buttonClose.addEventListener("click", closeModalElement);
}

function closeModalElement() {
    modalElement.classList.remove("modal-show");
    document.body.classList.remove("stop__scrolling");
}

window.addEventListener("click", (e) => {
    console.log(e.target)
    if(e.target === modalElement) {
        closeModalElement()
    }
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        closeModalElement()
    }
})

