const overlay = document.querySelector("#overlay");
const popup = document.querySelector("#popup");
const closePopup = document.querySelector("#close-popup");
const openPopup = document.querySelector("#open-popup");

openPopup.addEventListener("click", () => {
  popup.classList.add("show")
})

closePopup.addEventListener("click", () => {
  popup.classList.remove("show")
})