const rootElement = "[data-js-tabs]";

class Tabs {

    selectors = {
        root: rootElement,
        button: "[data-js-button-tab]",
        panel: "[data-js-panel]",
    }

    stateClasses = {
        isActive: "active",
    }

    stateAttributes = {
        ariaSelected: "aria-selected",
        tabIndex: "tabindex",
    }

    constructor(elementRoot) {
        this.root = elementRoot;
        this.buttonListTab = this.root.querySelectorAll(this.selectors.button);
        this.panelListTab = this.root.querySelectorAll(this.selectors.panel);
        this.initialState();
        this.bindEvents();
    };

    initialState() {
        const buttonAllTab = [...this.buttonListTab].find((button) => button.dataset.jsButtonTab);
        buttonAllTab.classList.add(this.stateClasses.isActive);
        this.panelListTab.forEach((panel) => panel.classList.add(this.stateClasses.isActive));
    };

    updateUI(currentButton) {
        currentButton.classList.add(this.stateClasses.isActive);
        currentButton.setAttribute(this.stateAttributes.ariaSelected, String(true));

        this.buttonListTab.forEach((button) => button.setAttribute(this.stateAttributes.ariaSelected, "-1"));
        currentButton.setAttribute(this.stateAttributes.tabIndex,  "0");

        const getButtonAttribute = currentButton.dataset.jsButtonTab;
        if(getButtonAttribute === "tab-all") {
            this.initialState();
        } else {
            document.getElementById(getButtonAttribute).classList.add(this.stateClasses.isActive);
        };
    };

    onButtonClick({target}) {
        const currentButton = target;
        [...this.buttonListTab].forEach((button) => button.classList.remove(this.stateClasses.isActive));
        [...this.panelListTab].forEach((panel) => panel.classList.remove(this.stateClasses.isActive));

        this.updateUI(currentButton);
    };

    bindEvents() {
        [...this.buttonListTab].forEach((button) => {
            button.addEventListener("click", (event) => this.onButtonClick(event));
        })
    }
};


class TabsCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootElement).forEach((elementRoot) => {
            new Tabs(elementRoot);
        })
    };
}

new TabsCollection();