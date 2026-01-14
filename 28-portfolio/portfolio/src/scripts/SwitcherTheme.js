class SwitcherTheme {
    elements = {
        switchButton: "[data-js-btn-switcher-theme]",
        iconButton: "[data-js-btn-switcher-theme-icon]",
    }

    themes = {
        dark: "dark",
        light: "light",
    }

    stateClasses = {
        isDarkTheme: "is-dark-theme",
    }

    srcStateIcon = {
        lightTheme: "./public/icons/header/Icon-theme-light.svg",
        darkTheme: "./public/icons/header/Icon-theme-dark.svg",
    }

    storageKey = "theme"

    constructor() {
        this.switchButtonElement = document.querySelector(this.elements.switchButton);
        this.iconButtonElement = document.querySelector(this.elements.iconButton);
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
        this.iconButtonElement.src = this.srcStateIcon.darkTheme ? this.srcStateIcon.lightTheme : this.srcStateIcon.darkTheme;
    }

    bindEvents() {
        this.switchButtonElement.addEventListener('click', this.onClick);
    }
}

 new SwitcherTheme();
