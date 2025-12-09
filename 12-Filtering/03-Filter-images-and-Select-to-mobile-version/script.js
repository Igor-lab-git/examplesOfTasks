const navMenuButtons = document.querySelector('.nav__menu');
const ListBoxesElement = document.querySelectorAll('.box');

navMenuButtons.addEventListener('click', (e) => {
    const isTargetButton = e.target.matches("li");

    if(!isTargetButton) {
        return;
    }
    const attributeButton = e.target.getAttribute('data-f');

    ListBoxesElement.forEach((box) => {
        if(!box.classList.contains(attributeButton) && attributeButton !== "all") {
            box.classList.add("hide")
        } else {
            box.classList.remove("hide");
        }
    })
})