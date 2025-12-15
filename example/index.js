
//
// const form = document.querySelector("[data-js-form]");
// const text = document.querySelector("#text");
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     const task = text.value.trim();
//
//     console.log(task);
//     text.value = ""
// })

const form = document.forms[0]


form.addEventListener("focusin", () => {
    console.log("Jenna")
})
