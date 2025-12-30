const image = document.querySelector(".image");
const button = document.querySelector(".button");

// const URL_String = "https://api.thecatapi.com/v1/images/search";
const URL_String = "https://api.nekosapi.com/v4/images/random";

const getCats = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        
        if(!response.ok) {
            const errorMessage = response.status !== 200 ? "Ошибка сервера" : "Данных нет";
            throw new Error(errorMessage);
        }

        const data = await response.json();

        // if(!Array.isArray(data) || data.length === 0) {
        //     const errorMessage = "Нет изображений в ответе.";
        //     throw new Error(errorMessage);
        // }
        console.log(data);
        const urlImage = data[0].url;
        image.src = urlImage
        
    } catch (error) {
        console.log(error.errorMessage);
        
    }
}

getCats(URL_String)