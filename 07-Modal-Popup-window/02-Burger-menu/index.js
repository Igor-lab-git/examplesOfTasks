const buttonHamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menuElement = document.querySelector("#menu");

const cloneMenuElement = menuElement.cloneNode(true);

buttonHamb.addEventListener("click", hambHandler);


function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    buttonHamb.classList.toggle("active");
    document.body.classList.toggle("noscroll");
    renderPopup();
};

function renderPopup() {
    popup.appendChild(cloneMenuElement);
};