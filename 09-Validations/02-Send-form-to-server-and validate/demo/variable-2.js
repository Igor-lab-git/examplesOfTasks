// const form = document.querySelector("form");
// const isCheckedBoxOrRadio = (type) => ['radio', 'checkbox'].includes(type);
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     const fields = document.querySelectorAll("input, select, textarea");
//     const values = {};
//
//     fields.forEach(field => {
//         const { name, value, type, checked } = field;
//         values[name] = isCheckedBoxOrRadio(type) ? checked : value;
//     })
//
//     console.log(values);
// });