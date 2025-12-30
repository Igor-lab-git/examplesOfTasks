const form = document.querySelector("#form");
const password = document.querySelector(".password");
const iconPassword = document.querySelector(".image-svg");

function showIcon () {
  iconPassword.addEventListener("click", function() {
    this.classList.toggle("is-active");

    if(password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  })
}


showIcon ()