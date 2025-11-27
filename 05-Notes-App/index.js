const mainElement = document.querySelector(".main");
const buttonAddNoteElement = document.querySelector("[data-js-btn-add-note]");

const createNodeElement = (tagName, className, content = "") => {
    const element = document.createElement(tagName);
    element.classList.add(className);

    if(element && content !== undefined && content != null) {
      element.innerHTML = content;
    }
    return element;
}

document.addEventListener("click", (e) => {
    if(e.target.closest(".note__button-delete")) {
        e.target.closest(".note").remove()
    }
}) //delete noteElemeny вариант делегированием

const createCardNote = (title, text) => {
    const noteElemeny = createNodeElement("article", "note");

    noteElemeny.innerHTML = `
   <header class="note__header">
        <p class="note__title">${title}</p>
        <div class="note__actions-button">
            <button class="note__button-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="note__button-delete"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    </header>
        <p id="note__description">${text}</p>
`
const editButton = noteElemeny.querySelector(".note__button-edit");
const deleteButton = noteElemeny.querySelector(".note__button-delete");

//или вариант с удалением 
// deleteButton.addEventListener("click", () => noteElemeny.remove());

    
return noteElemeny;
} 

function deleteCardNote() {

}

buttonAddNoteElement.addEventListener("click", () => {

    mainElement.appendChild(createCardNote("Jenna", "defoalt text"));
})
