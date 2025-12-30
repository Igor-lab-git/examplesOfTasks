const listButtonElements = document.querySelectorAll(".tabs__nav-btn");
const listTabElements = document.querySelectorAll(".tabs__item");

listButtonElements.forEach(button => {
    button.addEventListener("click", (e) => {
        const targetButton = e.target;
        const buttonAttribute = targetButton.getAttribute("data-tab");
        const currentTabText = document.querySelector(buttonAttribute);

        if (!targetButton.classList.contains("active")) {
            listButtonElements.forEach(button => {
                button.classList.remove("active");
            });

            listTabElements.forEach(tab => {
                tab.classList.remove("active");
            });

            targetButton.classList.add("active");
            currentTabText.classList.add("active");
        }


    })
})

document.querySelector(".tabs__nav-btn").click(); // не прописывая класс active в вёрстке кнопке и табу программно навешиваем active первой найденой кнопке по классу