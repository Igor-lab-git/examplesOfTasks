const sectionelements = document.querySelectorAll("section");
const preloaderElement = document.querySelector(".preloader");



function animateSctions() {
  sectionelements.forEach((element) => {
    element.classList.add("is-visible");
  })
}

animateSctions()


preloaderElement.addEventListener("animationend", (e) => {
  console.log(e);
  
})

