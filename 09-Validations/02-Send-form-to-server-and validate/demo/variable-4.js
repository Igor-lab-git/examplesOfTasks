// const form = document.forms[0];
// const isCheckedBoxOrRadio = (type) => ['radio', 'checkbox'].includes(type);
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     const {elements} = form;
//     const values = {};
//
//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
//         const {name} = element;
//
//         if(name) {
//             const {value, type, checked} = element;
//             values[name] = isCheckedBoxOrRadio(type) ? checked : value;
//         }
//     }
//     console.log(values);
// })