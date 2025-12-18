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



 const user = {
    id: 1,
    name: "Jenna",
    age: 23,
    isLove: true
 }


const newMap = new Map(Object.entries(user));
console.log(newMap);
console.log(Object.fromEntries(newMap));


 