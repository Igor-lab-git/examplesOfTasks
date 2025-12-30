import { getData, getEverything } from "./api.js";
const contentWrapperElement = document.querySelector("#content-wrapper");
const inputElement = document.querySelector("[data-js-input]");
const messageLoaging = document.querySelector("#message-text");

async function getNews() {
    const newsData = await getData();
    console.log(newsData);
    renderNews(newsData.articles);
}
getNews();


function renderNews(news) {
    console.log(news);

    news.forEach((news) => {
        const { urlToImage, publishedAt, title, description, url, author, content } = news;
        const dateString = '2025-12-26T08:58:52Z';
        const date = new Date(dateString);

        // Форматируем дату в понятный вид для отображения внутри HTML-тега <span>
        const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
        const card = `
         <div class="card">
                <div class="card-image-wrapper">
                    <img src="${urlToImage}" alt="" >
                </div>
                <div class="card-content">
                    <span class="card-date">${formattedDate}</span>
                    <h2 class="card-title">
                        <a href="${url}">${title}</a>
                    </h2>
                    <p class="card-description">
                        ${description ?? ""}
                    </p>
                </div>
            </div>
        `
        contentWrapperElement.insertAdjacentHTML("beforeend", card);
    });
    messageLoaging.style.display = "none";
};

inputElement.addEventListener("keydown", handleSearch);


async function handleSearch(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const value = e.target.value.trim();
        const data = await getEverything(value);
        contentWrapperElement.innerHTML = "";
            renderNews(data.articles);
            inputElement.value = ""
        
    };
};

export function showLoadingText(message) {
    messageLoaging.style.display = "flex";
    messageLoaging.textContent = message;
}

