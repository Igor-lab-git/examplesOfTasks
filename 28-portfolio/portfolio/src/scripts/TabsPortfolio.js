document.addEventListener("DOMContentLoaded", function () {
    const listButtonsTab = document.querySelectorAll("[data-js-button-tab]");
    const listTabsPanel = document.querySelectorAll("[data-js-panel]");

    listButtonsTab[0].classList.add("active");
    listTabsPanel[0].classList.add("active");

    listButtonsTab.forEach((button) => {
        button.addEventListener("click", () => toggleTabsPanel(button));
    });

    function toggleTabsPanel(button) {
        listButtonsTab.forEach(bt => bt.classList.remove("active"));
        listTabsPanel.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");

        const attributeButton = button.getAttribute("data-js-button-tab");
        const activePanel = document.getElementById(attributeButton);
        activePanel.classList.add("active");
    }
});

