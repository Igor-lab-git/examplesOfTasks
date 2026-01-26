const mainTitle = document.querySelector('[data-js-main-title-print]');
const subTitle = document.querySelector('[data-js-main-subtitle-print]');

const arrayLetterTitle = [...mainTitle.textContent];
const arrayLetterSubTitle = [...subTitle.textContent];


subTitle.textContent = "";
mainTitle.textContent = "";

const colors = ["7fffd4", "e52b50", "6a5acd", "c1876b", "1e5945", "f984e5", "957b8d"];
let currentIndexColor = 0;

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
            element.style.color = `#${colors[currentIndexColor]}`;

            // Когда все буквы добавлены
            if (counter === text.length) {
                clearInterval(intervalId);

                // Ждем и начинаем удалять
                setTimeout(() => {
                    removeText();
                }, 2000);
            }
        }, 100);
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
                setTimeout(() => {
                    callback();
                }, 1000);
            }
        }, 100);
    }

    // Начинаем анимацию
    addText();
}

// Функция для запуска цикла
function startAnimationCycle() {
    // Сначала заголовок
    printText(arrayLetterTitle, mainTitle, function() {
        // Когда заголовок завершился → подзаголовок
        printText(arrayLetterSubTitle, subTitle, function() {
            // Когда подзаголовок завершился → СНОВА заголовок (рекурсия)
            currentIndexColor++;
            if(currentIndexColor === colors.length) {
                currentIndexColor = 0;
            }
            startAnimationCycle();
        });
    });
}

// Начинаем цикл
startAnimationCycle();

const title = document.querySelector('[data-js-title]');



