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
        lightIcon: "./public/icons/header/Icon-theme-light.svg",
        darkIcon: "./public/icons/header/Icon-theme-dark.svg",
    }

    storageKey = "theme"

    constructor() {
        this.switchButtonElement = document.querySelector(this.elements.switchButton);
        this.iconButtonElement = document.querySelector(this.elements.iconButton);
        this.setInitialTheme();
        this.bindEvents();
    }

    get isDarkThemeCached() {
        // console.log(localStorage.getItem(this.storageKey) === this.themes.dark); //boolean
        return localStorage.getItem(this.storageKey) === this.themes.dark;
    }

    updateIcon() {
        if(this.isDarkThemeCached) {
            this.iconButtonElement.src = this.srcStateIcon.darkIcon;
            this.iconButtonElement.alt = "Переключить на темную тему";
            this.iconButtonElement.title = "Переключить на темную тему";
        } else {
            this.iconButtonElement.src = this.srcStateIcon.lightIcon;
            this.iconButtonElement.alt = "Переключить на светлую тему";
            this.iconButtonElement.title = "Переключить на светлую тему";
        }
    }

    setInitialTheme() {
        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached);
        this.updateIcon();
    }

    onClick =  () => {
        localStorage.setItem(
            this.storageKey,
            this.isDarkThemeCached ? this.themes.light : this.themes.dark
            );
        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
        this.updateIcon();
    };

    bindEvents() {
        this.switchButtonElement.addEventListener('click', this.onClick);
    }
}

 new SwitcherTheme();
