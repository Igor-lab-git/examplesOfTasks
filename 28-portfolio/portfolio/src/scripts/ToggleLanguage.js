import {translatorObject} from "./data/dataLang.json.js";
const buttonSwitchLanguage = document.querySelector("[data-js-lang-button]");


document.addEventListener("DOMContentLoaded", () => {
    if(buttonSwitchLanguage) {
        buttonSwitchLanguage.addEventListener("click", () => handleSwitchText())
    }
})


const configUpdateButton = {
    "ru": {
        icon: "./public/icons/header/icon-switch-language-english.svg",
        title: "Переключить не русский язык",
        altTitle: "Русский язык",
        lang: "ru"
    },
    "en": {
        icon: "./public/icons/header/icon-switch-language-russia.svg",
        title: "Language switch button",
        altTitle: "English language",
        lang: "en"
    }
}

let currentLang = "en"


function toggleText(lang, config) {
    const { icon, title, altTitle } = config[lang];
    const imageButtonElement = buttonSwitchLanguage.firstElementChild;

        currentLang = lang === "ru" ? "en" : "ru";

    if(currentLang === "en") {
        imageButtonElement.src = config[currentLang].icon;

        buttonSwitchLanguage.title = config[currentLang].title;
    } else if(currentLang === "ru") {
        imageButtonElement.src = config[currentLang].icon;

        buttonSwitchLanguage.title = config[currentLang].title;
    }
    const getElementsWithText = document.querySelectorAll("[data-js-lang]");

    getElementsWithText.forEach((element) => {
        const getAttributeElement = element.getAttribute("data-js-lang");
        const text = translatorObject[lang][getAttributeElement];
        element.textContent = text;

    });

};



function handleSwitchText() {
    const getLang = configUpdateButton[currentLang].lang
    toggleText(getLang, configUpdateButton);
}


// ПСЕВДОКОД - ОЧЕНЬ ПРОСТО
/*
1. Есть объект с переводами на два языка
2. Есть переменная currentLang = 'ru'
3. Есть элементы с data-lang атрибутами
4. При клике на кнопку:
   - Меняем язык на противоположный
   - Берем все элементы с data-lang
   - Для каждого элемента:
        * Берем ключ из data-lang
        * Берем текст из объекта переводов
        * Вставляем текст в элемент
5. Меняем иконку кнопки
*/


