const listCardElement = document.querySelector('.list-card');
const formElement = document.querySelector("[data-js-form]");
const inputSearchElement = document.querySelector(".header__search");

const API_Key = "b2b7a3d8-7101-4751-9b0f-ef926351f504";
const URL_String = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1";
const URL_String_Search = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

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

        if(movie) {
            cardElement.innerHTML = `
                <div class="card__cover">
                    <img class="card__image" src="${movie.posterUrlPreview}" alt="${movie.nameRu}">
                    <div></div>
                </div>
                <div class="card__info">
                    <h2 class="card__title">${movie.nameRu}</h2>
                    <div class="card__category">${movie.genres.map(genre => `  ${genre.genre}`)}</div>
                    <div class="card__rating card__rating--${setClassByRating(movie.ratingKinopoisk || movie.rating)}">${movie.ratingKinopoisk || movie.rating}</div>
                </div>
            `
        }

        listCardElement.appendChild(cardElement);
    })
}


formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const textInputValue = inputSearchElement.value.trim();
    const apiSearchUrl = `${URL_String_Search}${textInputValue}`;
    
    if(textInputValue) {
         getMovies(apiSearchUrl); 
         with(listCardElement.firstChild) {
            listCardElement.firstChild.remove()
         }
    }
    inputSearchElement.value = "";
});


