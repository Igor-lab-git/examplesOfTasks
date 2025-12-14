"use strict"

//==========================================

import {
getTasToLocalStorage,
setTasToLocalStorage,
createGeneratorId
} from "./utils.js";

const formElement =  document.querySelector("[data-js-form]");
const textareaElement =  document.querySelector(".form__textarea");
const button_Send =  document.querySelector(".form__send-btn");
const button_Cancel =  document.querySelector(".form__cancel-btn");
const outputElement =  document.querySelector(".output");


// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // регулярка оставляет один пробел между словами
//     const task = textareaElement.value.trim().replace(/\s+/g, " "); 
//  console.log(task);
//     if(!task){
//      return alert("Поле не должно быть пустым");
//     } else {
//         console.log(task);
        
//     };

// });

formElement.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
}

// const arrayGetTasksLS = getTasToLocalStorage();







