const input = document.querySelector("#text");

// document.addEventListener("keydown", (e) => {
//   const { code, key } = e;
//   if (!e.target.matches("input")) {
//     return;
//   }

//   if (/\d/.test(key)) {
//     e.preventDefault();
//     alert("Не корректный символ");
//   }
// });


const box = document.createElement("p");

input.addEventListener("change", (e) => {
  const text = e.target.value;
const invalid = text.length < 5;

input.classList.toggle("is-invalid", invalid)
 box.textContent = invalid ? "Не валидный ввод" : "";
 document.body.appendChild(box)
})
