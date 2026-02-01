import {textEn} from "./data/dataLang.json.js";
const buttonSwitchLanguage = document.querySelector("[data-js-lang-button]");
const rootButton = document.querySelector("[data-js-lang-switcher]");


const root = document.body.querySelectorAll('*');

const getElementsText = () => {

    const textObj = {};
    const newArr = [...root].map((el) => el.textContent?.trim()).filter((text) => text && text.length > 0 && !text.includes("\n"));

    newArr.forEach((el, index) => {
        textObj[index] = el;
    })

    return textObj

}
const getText = getElementsText();

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

for(let key in getText) {
    getText[key] = textEn[key];
    // console.log(getText[key]);
}

const findImage = buttonSwitchLanguage.querySelector("[data-js-lang-button-icon]");

console.log(findImage.src)