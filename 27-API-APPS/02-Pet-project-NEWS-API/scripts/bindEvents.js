const headerElement = document.querySelector("[data-js-header]");

export const scrollHeader = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      headerElement.classList.add("sticky");
    } else {
      headerElement.classList.remove("sticky");
    }
  });
};
