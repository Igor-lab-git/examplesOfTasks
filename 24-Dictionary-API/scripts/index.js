const formElement = document.querySelector('[data-js-form]');
const inputElement = document.querySelector('#word-input');
const containerWord = document.querySelector('.results-word');
const buttonSound = document.querySelector('.results-sound');


const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let state = {
    word: "",
}

//EVENT
formElement.addEventListener('submit', handleSubmit);
inputElement.addEventListener("keyup",  handleKeyUp);

function handleKeyUp(e) {
    const value = e.target.value;
    state.word = value;
};

async function handleSubmit(e) {
    e.preventDefault();

    if (!state.word.trim()) return;
    try {
        const response = await fetch(`${URL}${state.word}`);
        console.log(response);

        if (!response.ok) {
            throw new Error("Error to Server :(")
        };
        const data = await response.json();
        // insertWord()
        console.log(data);
    } catch (error) {
        console.log(error);
    };
};

// function insertWord() {
//     containerWord.innerText = state.word || "";
// }