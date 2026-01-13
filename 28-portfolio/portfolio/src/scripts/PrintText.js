// const mainTitle = document.querySelector('[data-js-main-title-print]');
// const subTitle = document.querySelector('[data-js-main-subtitle-print]');
//
// const arrayLetterTitle = [...mainTitle.textContent];
// const arrayLetterSubTitle = [...subTitle.textContent];
//
// subTitle.textContent = "";
// mainTitle.textContent = "";
//
// const printText = (arrayTitle) => {
//     let counter = 0;
//     let accumulateText = "";
//     let intervalId = null;
//
//     function addText() {
//         clearInterval(intervalId);
//
//         intervalId = setInterval(() => {
//             accumulateText += arrayTitle[counter];
//             counter++;
//             mainTitle.textContent = accumulateText;
//             if(counter === arrayTitle.length) {
//                 clearInterval(intervalId);
//                 setTimeout(() => {
//                     removeText();
//                 }, 1000);
//             };
//         }, 150)
//     };
//
//     function removeText() {
//         clearInterval(intervalId);
//
//         intervalId = setInterval(() => {
//             accumulateText = accumulateText.slice(0, -1);
//             mainTitle.textContent = accumulateText;
//             counter--;
//             if(accumulateText.length === 0) {
//                 clearInterval(intervalId);
//                 setTimeout(() => {
//                     addText();
//                 }, 2000);
//             }
//         }, 150);
//     };
//
//     addText();
//
//
// };
//
// printText(arrayLetterTitle);


const mainTitle = document.querySelector('[data-js-main-title-print]');
const subTitle = document.querySelector('[data-js-main-subtitle-print]');

const arrayLetterTitle = [...mainTitle.textContent];
const arrayLetterSubTitle = [...subTitle.textContent];

subTitle.textContent = "";
mainTitle.textContent = "";

// Функция для анимации одного текста
function printText(text, element, callback) {
    let counter = 0;
    let accumulateText = "";
    let intervalId = null;

    // Функция добавления букв
    function addText() {
        clearInterval(intervalId);

        intervalId = setInterval(() => {
            accumulateText += text[counter];
            counter++;
            element.textContent = accumulateText;

            // Когда все буквы добавлены
            if (counter === text.length) {
                clearInterval(intervalId);

                // Ждем и начинаем удалять
                setTimeout(() => {
                    removeText();
                }, 1000);
            }
        }, 150);
    }

    // Функция удаления букв
    function removeText() {
        clearInterval(intervalId);

        intervalId = setInterval(() => {
            accumulateText = accumulateText.slice(0, -1);
            element.textContent = accumulateText;
            counter--;

            // Когда все буквы удалены
            if (accumulateText.length === 0) {
                clearInterval(intervalId);

                // Вызываем callback, когда анимация ЗАГЕРШЕНА
                if (callback) {
                    callback();
                }
            }
        }, 150);
    }

    // Начинаем анимацию
    addText();
}

// Запускаем по очереди
printText(arrayLetterTitle, mainTitle, function() {
    // Этот код выполнится ПОСЛЕ того, как заголовок напечатается и сотрется
    printText(arrayLetterSubTitle, subTitle, function() {
        // Этот код выполнится ПОСЛЕ подзаголовка
        console.log("Все анимации завершены!");
    });
});

// printText(arrayLetterTitle, mainTitle, function() {
//     // Этот код выполнится ПОСЛЕ того, как заголовок напечатается и сотрется
//     printText(arrayLetterSubTitle, subTitle, function() {
//         // Этот код выполнится ПОСЛЕ подзаголовка
//         console.log("Все анимации завершены!");
//     });
// });



// export const printText = () => {
//
//
//     text.textContent = '';
//     let count = 0;
//     let newCountText = ""
//
//
//     const addPrintText = () => {
//     let intervalId = null;
//         intervalId = setInterval(() => {
//             newCountText += arrayCharts[count];
//             count++
//             text.textContent = newCountText;
//             if (count === arrayCharts.length) {
//                 clearInterval(intervalId);
//                 setTimeout(() => {
//                     removeText();
//                 }, 1000)
//             }
//         }, 150);
//     };
//
//
//     function removeText() {
//         let intervalId = null;
//         intervalId = setInterval(() => {
//             newCountText = newCountText.slice(0, -1);
//             text.textContent = newCountText;
//             count--
//             console.log(text)
//             if (newCountText.length === 0) {
//                 clearInterval(intervalId);
//                 setTimeout(() => {
//                     addPrintText()
//                 }, 2000);
//             }
//         }, 150);
//     };
//     addPrintText();
//
//
//
// }
//
// printText()