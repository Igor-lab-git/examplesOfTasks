
class ShowHeader {

    elements = {
        burgerButton: "[data-js-burger-button]",
        header: "[data-js-header]",
    }

    stateClasses = {
        showHeader: "show-header",
        isActive : "is-active",
    }

    constructor() {
        this.headerElement = document.querySelector(this.elements.header);
        this.burgerButtonElement = document.querySelector(this.elements.burgerButton);
        this.bindEvents();
    };

    onBurgerButtonClick = () => {
        this.headerElement.classList.toggle(this.stateClasses.showHeader);
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    }

    closeHeader = (e) => {
        const target = e.target;
        if(!target.closest(this.elements.header) && !target.closest(this.elements.burgerButton)) {
            this.headerElement.classList.remove(this.stateClasses.showHeader);
            this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
        };
    };

    bindEvents() {
        this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick);
        document.addEventListener("click", this.closeHeader);
    };
}

const showHeader = new ShowHeader();