
class Header {
    selectors = {
        rootElement: "[data-js-header]",
        overlayMenuElement: "[data-js-header-overlay]",
        buttonBurgerElement: "[data-js-header-burger-button]",
    };

    stateClasses = {
        isActive: "is-active",
    }
    constructor() {
        this.rootElement = document.querySelector(this.selectors.rootElement);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlayMenuElement);
        this.burgerButton = this.rootElement.querySelector(this.selectors.buttonBurgerElement);
        this.bindEvents();
    };

    onBurgerButtonClick = () => {
        this.burgerButton.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
    };

    bindEvents() {
        this.burgerButton.addEventListener("click", this.onBurgerButtonClick)
    };
};

export const headerBurger = new Header;
