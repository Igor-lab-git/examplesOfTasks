const root = document.body;

console.log(root);


function getTextContent(node, result = []) {
    // Базовый случай: если узел не существует
    if (!node) return result;

    // Если это текстовый узел
    if (node.nodeType === 3) { // TEXT_NODE
        const text = node.textContent.trim();
        if (text) {
            result.push(text);
        }
    }

    // Рекурсивно обходим только ELEMENT_NODES
    if (node.nodeType === 1) { // ELEMENT_NODE
        // Важно: обходим childNodes, а не children
        for (let child of node.childNodes) {
            getTextContent(child, result);
        }
    }

    return result;
}

// Использование
const allText = getTextContent(document.body);
console.log('Весь текст страницы:', allText);

async function yandexTranslate(text) {
    const key = 'YOUR_YANDEX_TRANSLATE_KEY'; // Реальный ключ сюда
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=en-ru&text=${encodeURIComponent(text)}`;
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data.text.join('');
    } catch(e) {
        console.error(e.message);
    }
}

allText.forEach(wor => yandexTranslate(wor).then(result => console.log(result)))


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