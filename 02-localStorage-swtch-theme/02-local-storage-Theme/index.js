class SwitherTheme {
  selector = {
    buttonSwithElement: "[data-js-button-switcher]",
  };

  themes = {
    dark: "dark",
    light: "light"
  };

  stateClasses = {
    isDarkTheme: "is-dark-theme",
  };

  storageKey = "theme";

  constructor() {
    this.buttonSwithElement = document.querySelector(this.selector.buttonSwithElement);
    this.setInatialTheme();
    this.bindEvents();
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

  setInatialTheme() {
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached);
  }

  onClick = () => {
    localStorage.setItem(
        this.storageKey,
        this.isDarkThemeCached ? this.themes.light : this.themes.dark
    );
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
  }

  bindEvents() {
    this.buttonSwithElement.addEventListener("click", this.onClick);
    
  }
}

new SwitherTheme();
