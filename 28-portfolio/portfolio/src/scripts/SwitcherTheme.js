class SwitcherTheme {
    elements = {
        switchButton: "[data-js-btn-switcher-theme]",
    }

    themes = {
        dark: "dark",
        light: "light",
    }

    stateClasses = {
        isDarkTheme: "is-dark-theme",
    }

    storageKey = "theme"

    constructor() {
        this.switchButtonElement = document.querySelector(this.elements.switchButton);
        this.setInitialTheme();
        this.bindEvents();
    }

    get isDarkThemeCached() {
        return localStorage.getItem(this.storageKey) === this.themes.dark;
    }

    setInitialTheme() {

        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached);
    }

    onClick =  () => {
        localStorage.setItem(
            this.storageKey,
            this.isDarkThemeCached ? this.themes.light : this.themes.dark
            );
        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
    }

    bindEvents() {
        this.switchButtonElement.addEventListener('click', this.onClick)
    }
}

 new SwitcherTheme();
