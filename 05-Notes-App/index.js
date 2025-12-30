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
        <p class="note__title" id="note-title">${title}</p>
        <input data-js-title-input class="hidden" placeholder="Add name task...">
        <div class="note__actions-button">
            <button class="note__button-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="note__button-delete"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    </header>
        <p id="note-description"></p>
        <textarea data-js-title-description class="hidden" placeholder="Description">${text}</textarea>
`
const editButton = noteElemeny.querySelector(".note__button-edit");
// const deleteButton = noteElemeny.querySelector(".note__button-delete");
const noteTitle = noteElemeny.querySelector("#note-title");
const noteDescription = noteElemeny.querySelector("#note-description");
const inputTitle = noteElemeny.querySelector("[data-js-title-input]");
const inputDescription = noteElemeny.querySelector("[data-js-title-description]");

editButton.addEventListener("click", () => {
    noteTitle.classList.toggle("hidden");
    noteDescription.classList.toggle("hidden");
    inputTitle.classList.toggle("hidden");
    inputDescription.classList.toggle("hidden");
});

inputTitle.addEventListener("input", (e) => {
    const text = e.target.value;
    noteTitle.innerText = text;
    
})
inputDescription.addEventListener("input", (e) => {
    const text = e.target.value;
    noteDescription.innerText = text;
    
})

//или вариант с удалением 
// deleteButton.addEventListener("click", () => noteElemeny.remove());

    
return noteElemeny;
} 

function deleteCardNote() {

}

buttonAddNoteElement.addEventListener("click", () => {
    mainElement.appendChild(createCardNote("Заголовок", "Ваш текст"));
})
