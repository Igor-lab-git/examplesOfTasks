import {textEn} from "./data/dataLang.json.js";
const buttonSwitchLanguage = document.querySelector("[data-js-lang-button]");




buttonSwitchLanguage.addEventListener("click", () => {
    const findImage = buttonSwitchLanguage.querySelector("[data-js-lang-button-icon]");

    const getTitleAttribute = buttonSwitchLanguage.getAttribute("title");


    let image = findImage.getAttribute("src");

    if(image.includes("./public/icons/header/icon-switch-language-english.svg")) {
        findImage.src = "./public/icons/header/icon-switch-language-russia.svg";
        buttonSwitchLanguage.title = "language switch button";
    } else {
        findImage.src = "./public/icons/header/icon-switch-language-english.svg";
        buttonSwitchLanguage.title = getTitleAttribute;
    }
    console.log(image);

});


const toggleTex = (lang) => {
    const getAllElements = document.querySelectorAll("[data-js-lang]");
    // console.log([...getAllElements].forEach(el => el.getAttribute("[data-js-lang]")));
    getAllElements.forEach((el) => {
        const key = el.getAttribute("data-js-lang");
        if(textEn[lang] && textEn[lang][key]) {
            el.textContent = textEn[lang][key];
        }
    })
}
toggleTex("ru")


//

