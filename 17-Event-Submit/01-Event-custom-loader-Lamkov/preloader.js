const preloaderElement = document.querySelector(".preloader");

preloaderElement.addEventListener("animationend", (e) => {
    console.log(e);
    if (e.animationName === "fade-out") {
        preloaderElement.dispatchEvent(
            new Event("preloaderClose", {bubbles: true}) //Кастомный event для подписания к ниму из других модулей
        );
    }
});

//такой подход хорошь что этот Event ни чего не знает о сторонних модулей, а лишь может уведомить весь остальной код о своём событии так где надо, а тм где нужно добавляел слушитель события для нужного кода