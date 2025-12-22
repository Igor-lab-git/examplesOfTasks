const form = document.querySelector("#form");
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");

squareInput.addEventListener("input", () => {
    // squareInput.value = squareRange.value;
    console.log(squareInput.value);
    
});

// squareRange.addEventListener("input", () => {
//     squareRange.value = squareInput.value;
// })

// form.addEventListener("input", (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);

//     const data = Object.fromEntries(formData);

//     console.log(data);
    
// })