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

async function getSomthing() {
  return "Hy Jenna";
}

const prom = await getSomthing();

console.log(prom);

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    
  };
};

const array = await getData();

console.log(array);

