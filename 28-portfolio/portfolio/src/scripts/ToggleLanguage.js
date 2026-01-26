// const root = document.body;
//
// console.log(root);
//
//
// function getTextContent(node, result = []) {
//     // Базовый случай: если узел не существует
//     if (!node) return result;
//
//     // Если это текстовый узел
//     if (node.nodeType === 3) { // TEXT_NODE
//         const text = node.textContent.trim();
//         if (text) {
//             result.push(text);
//         }
//     }
//
//     // Рекурсивно обходим только ELEMENT_NODES
//     if (node.nodeType === 1) { // ELEMENT_NODE
//         // Важно: обходим childNodes, а не children
//         for (let child of node.childNodes) {
//             getTextContent(child, result);
//         }
//     }
//
//     return result;
// }
//
// // Использование
// const allText = getTextContent(document.body);
// console.log('Весь текст страницы:', allText);




// Способ №2: Локальная база переводов (словарь)
// Это самый простой и бесплатный способ. Вы создаёте объект с набором слов и соответствующих переводов. Затем получаете нужный перевод через обращение к этому объекту.
//
//     Пример реализации локальной базы переводов:
//
//     javascript
// Копировать
// const translations = {
//     hello: 'привет',
//     goodbye: 'пока',
//     cat: 'кошка',
// };
//
// function translate(word) {
//     return translations[word.toLowerCase()] || word + '? Перевод неизвестен.';
// }
//
// console.log(translate('hello')); // Привет
// console.log(translate('goodbye')); // Пока
// console.log(translate('dog')); // dog? Перевод неизвестен.

import {translations} from "./dataLang.json.js";

console.log(translations);

let currentLang = "ru";

const elements = document.querySelectorAll("[data-lang]");
console.log(elements);

elements.forEach((element) => {
    const key = element.dataset.lang;

    const keys = key.split(".");

    let translation  = translations["en"];
    console.log(translation);
    for(const k of keys) {
        translation = translation ? translation[k] : null;

    }

    // element.textContent = translation;
})