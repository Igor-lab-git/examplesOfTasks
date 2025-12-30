
const form = document.querySelector("[data-js-form]");
const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordAgainInput = document.querySelector("#password-again");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
})


const setError = (element, message) => {
  const formItem = element.parentElement;
  const mesaageError = formItem.querySelector(".error-message");
  console.log(mesaageError);
  mesaageError.innerText = message;
  mesaageError.classList.add("error");
  element.classList.add("invalid");
}

const setSuccess = (element) => {
  const formItem = element.parentElement;
  const mesaageError = formItem.querySelector(".error-message");
  mesaageError.innerText = "";
  element.classList.add("success");
  element.classList.remove("invalid");
  mesaageError.classList.remove("error");
}

const isValidateEmail = (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

const isValidatePassword = (password) => {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
  return reg.test(password);
}


function validateInputs() {
  const nameInputValue = nameInput.value.trim();
  const lastnameInputValue = lastnameInput.value.trim();
  const emailInputValue = emailInput.value.trim();
  const passwordInputValue = passwordInput.value.trim();
  const passwordAgainInputValue = passwordAgainInput.value.trim();

  if(nameInputValue === "" || nameInputValue.length < 6) {
    setError(nameInput, "Поле обязательно для заполнения");
  } else {
    setSuccess(nameInput);
  }

  if(lastnameInputValue === "") {
    setError(lastnameInput, "Поле обязательно для заполнения");
  } else {
    setSuccess(lastnameInput);
  }

  if(emailInputValue === "") {
    setError(emailInput, "Поле обязательно для заполнения");
  } else if(!isValidateEmail(emailInputValue)) {
    setError(emailInput, "Ваш email не соответствует формату");
  } else {
    setSuccess(emailInput);
  }

  if(passwordInputValue === "") {
    setError(passwordInput, "Поле обязательно для заполнения");
  } else if(!isValidatePassword(passwordInputValue)) {
    setError(passwordInput, "Парольдолжен быть не менее 8 символов и наличие заглавных и строчные букв а также цифры и спецсимволы");
  } else {
    setSuccess(passwordInput);
  }

  if(passwordAgainInputValue === "") {
    setError(passwordAgainInput, "Поле обязательно для заполнения");
  } else if(passwordInputValue !== passwordAgainInputValue) {
    setError(passwordAgainInput, "Пароли не совпадают");
  } else {
    setSuccess(passwordAgainInput);
  }
}



