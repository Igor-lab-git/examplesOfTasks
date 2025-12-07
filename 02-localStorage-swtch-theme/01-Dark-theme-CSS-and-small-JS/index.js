const buttonSwitchTheme = document.querySelector("#themeToggle");
let root = document.querySelector(":root");



buttonSwitchTheme.addEventListener("click", (e) => {
    e.preventDefault();
    root.classList.toggle("dark");
    if(buttonSwitchTheme.textContent === "Перейти на темную тему") {
        buttonSwitchTheme.textContent = "Перейти на светлую тему";
    } else {
        buttonSwitchTheme.textContent = "Перейти на темную тему";
    }
})

