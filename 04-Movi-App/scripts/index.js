const listCardElement = document.querySelector('.list-card');

const API_Key = "b2b7a3d8-7101-4751-9b0f-ef926351f504";
const URL_String = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1";

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
        return data;
    } catch (e) {
        console.log(e.message)
    }
}

const renderMovies = async () => {
    const data = await getMovies(URL_String);
    console.log(data.items);
    data.items.forEach(movie => {
        const cardElement = document.createElement("article");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <div class="card__cover">
                <img class="card__image" src=${movie.posterUrlPreview} alt=${movie.nameRu}>
                <div></div>
            </div>
            <div class="card__info">
                <h2 class="card__title">${movie.nameRu}</h2>
                <div class="card__category">${movie.genres.map(genre => `  ${genre.genre}`)}</div>
                <div class="card__rating card__rating--green">9</div>
            </div>
        `
        listCardElement.appendChild(cardElement);
    })

}
renderMovies()

