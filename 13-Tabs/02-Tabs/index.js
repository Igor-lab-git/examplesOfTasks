const Tabs = document.querySelector("[data-js-tabs]");
const List_content = Tabs.querySelector("[data-js-content]");
const Btn_nav = document.querySelector("[data-js-nav-btn]");
const Current_active_button = document.querySelector(".active");

console.log(List_content);


Btn_nav.addEventListener("click", (e) => {
  const currentPressBtn = e.target;

  if (currentPressBtn.nodeName !== "BUTTON") {
    return;
  } else {
    if (Current_active_button) {
      Current_active_button.classList.remove("active");
    }

    const currentButton = currentPressBtn.dataset.btn;

    const currentContent = List_content.querySelector(`[data-text=${currentButton}]`);
    console.log("btn", currentButton);
    console.log("text", currentContent);
    
    currentPressBtn.classList.add("active");
    // currentContent.classList.add("show")
    // console.log(Current_active_button);
  }
});


//JS: создание табов | ПРАВИЛЬНЫЙ подход | Class tabs | Масштабируем решение! 16-57