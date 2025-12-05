const ButtonS_TabS = document.querySelectorAll(".tabs__btn");
const TABS_ContentS = document.querySelectorAll(".tabs__content");


ButtonS_TabS.forEach((button) => {
  button.addEventListener("click", (e) => {

    ButtonS_TabS.forEach((btn) => {
      btn.classList.remove("active");
    })

    button.classList.add("active");
    const nameAtributeBtn = button.getAttribute("data-tab-btn");
    console.log(nameAtributeBtn);
    
    TABS_ContentS.forEach((text) => {
      if(text.classList.contains(nameAtributeBtn)) {
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    })
  })
})

