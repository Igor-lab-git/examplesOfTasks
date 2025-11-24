console.log(window.history);

const backButtonElement = document.querySelector(".back");
const forwardButtonElement = document.querySelector(".back");
const goBack = document.querySelector(".go-back");


backButtonElement.addEventListener("click", () => {
    window.history.back();
})

forwardButtonElement.addEventListener("click", () => {
    window.history.forward();
})
goBack.addEventListener("click", () => {
    window.history.go(-2);
})