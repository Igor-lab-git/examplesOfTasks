document.addEventListener('DOMContentLoaded', () => {
    const listSkillsElements = document.querySelector("[data-js-skills-list]");
    const elements = [...listSkillsElements.children];


    elements.forEach(element => {
        const level = parseInt(element.getAttribute("data-skill-level"));

        if (!isNaN(level)) {
            element.classList.add("bordered");
            element.style.setProperty('--progress', `${level}%`);
        };
    });
});