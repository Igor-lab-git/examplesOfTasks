const sectionsElements = document.querySelectorAll("section");



function animateSection() {
    sectionsElements.forEach((element) => {
        element.classList.add("is-visible");
    })
};

document.addEventListener("preloaderClose", (e) => {
    console.log(e)
    animateSection();
})
