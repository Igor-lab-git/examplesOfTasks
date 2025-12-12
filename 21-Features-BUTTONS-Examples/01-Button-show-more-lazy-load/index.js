const buttonMore = document.querySelector("[data-js-button-show-more]");
const boxCards = document.querySelector(".container");
const listCards = [...document.querySelectorAll(".card")];

window.addEventListener("resize", (e) => {
  if (e.target.window.innerWidth > 989) media1();
  if (e.target.window.innerWidth <= 989 && e.target.window.innerWidth > 659)
    media2();
  if (e.target.window.innerWidth <= 659) media3();
}); // реагирование экрана на изменение экрана например на мобилке повернул экран и он увиличился шириной resize мнгновенно реагироет и применяет нужную функцию

function openCards() {
  buttonMore.addEventListener("click", () => {
    listCards.forEach((card) => card.classList.remove("hidden"));
    buttonMore.classList.add("hidden");
  });
}

function media1() {
  // если ширина экрана позволяет убраться все карточки то кнопка не нужна и скрывается
  if (window.innerWidth > 989) {
    buttonMore.classList.add("hidden");

    listCards.forEach((card, index) => {
      card.classList.add("hidden");

      if (index <= 8) {
        // если на странице появляестя 9 карточек под это условие то кнопке нечего больше показывать и смысла от неё нет поэтому её скрываем
        card.classList.remove("hidden");
      } else if (index > 8) {
        // а если меньше 8 то появляется кнопка
        buttonMore.classList.remove("hidden");
      }
      openCards(); // и функция добавления карточек и скрывания опять кнопки
    });
  }
}

media1();

function media2() {
  // если ширина экрана позволяет убраться все карточки с соответстующим экрану количеством этих карточек то кнопка не нужна и скрывается
  if (window.innerWidth <= 989 && window.innerWidth > 659) {
    buttonMore.classList.add("hidden");

    listCards.forEach((card, index) => {
        card.classList.add("hidden");
    
        if (index <= 5) {
          card.classList.remove("hidden");
        } else if (index > 5) {
          // а если меньше 6 то появляется кнопка
          buttonMore.classList.remove("hidden");
        }
        openCards(); // и функция добавления карточек и скрывания опять кнопки
      });
  }; // если на странице появляестя 6 карточек под это условие то кнопке нечего больше показывать и смысла от неё нет поэтому её скрываем
};

media2();

function media3() {
  // если ширина экрана позволяет убраться все карточки с соответстующим экрану количеством этих карточек то кнопка не нужна и скрывается
  if (window.innerWidth <= 659) {
    buttonMore.classList.add("hidden");

    listCards.forEach((card, index) => {
        card.classList.add("hidden");
    
        if (index <= 2) {
          card.classList.remove("hidden");
        } else if (index > 2) {
          // а если меньше 3 то появляется кнопка
          buttonMore.classList.remove("hidden");
        }
        openCards(); // и функция добавления карточек и скрывания опять кнопки
      });
  } // если на странице появляестя 3 карточек под это условие то кнопке нечего больше показывать и смысла от неё нет поэтому её скрываем

  
};

media3();
