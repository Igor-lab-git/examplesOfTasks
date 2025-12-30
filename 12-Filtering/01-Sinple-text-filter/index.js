const input = document.querySelector("[data-js-input]");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const textNone = document.querySelector(".text");


input.addEventListener("input", () => {
  const value = input.value.toLowerCase().trim();
  let isVisibleItem = false;

  items.forEach((item) => {
    const text = item.textContent.toLocaleLowerCase();

    const hasItem = text.includes(value);

    item.style.display = hasItem ? "block" : "none";

    if(hasItem) {
      isVisibleItem = true;
    } 
  })

  textNone.style.display = isVisibleItem ? "none" : "block";
})

