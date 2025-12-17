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



 const img= document.querySelector("#img");

 img.addEventListener("load", function (e) {
  console.log(e)
  console.log(`${this.offsetWidth} and ${this.offsetHeight}`);
 })