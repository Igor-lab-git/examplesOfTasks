"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '8381523471:AAEdtmsN7t1hntLw1b0QlSQWamSWusKwL4M';
const TELEGRAM_CHAT_ID = '@NewFron_igor';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

const formElement = document.querySelector("[data-js-form]");
const buttonElement = document.querySelector("[data-js-btn]");
const modalMessageSend = document.querySelector(".form__send-result");

 formElement.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData(formElement);
    const dataObj = Object.fromEntries(formData);

    modalMessageSend.textContent = ""; // после каждой отпраки формы зачищать сообщение об предыдущей отправки
    const { name, password, email, phone } = dataObj;
    // console.log(name, password, email, phone);
    const sendMessage = `Заявка от имени: ${name} email: ${email} Телефоном: ${phone} и паролем: ${password} отправленна`;
    
    try {
        buttonElement.textContent = "Loading..."; // во время отправки менять текст 
        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: sendMessage,
            })
        });

        if(!response.ok) {
             throw new Error("Ошибка на сервере");
        } else {
            modalMessageSend.textContent = sendMessage;
            formElement.reset(); //обнуляем фору тоесть отчищаем
        };

        const result = response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
        modalMessageSend.textContent = "Данные не отправленны, попробуйте ещё";
        modalMessageSend.style.color = "red";
    } finally {
        buttonElement.textContent = "Отправить"; // вернуть текст после отправки
    };
});




