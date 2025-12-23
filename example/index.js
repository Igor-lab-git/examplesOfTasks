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
// const img = document.querySelector("#img")

const user = {
  id: 1,
  name: "Jenna",
  age: 25,
  isLove: true,
};


const text = document.querySelector("#input");


console.log(text.closest("[data-js-form]"));
console.log(JSON.parse(text.getAttribute('data-js-input')));

console.log(text.classList.contains("is-active"));




