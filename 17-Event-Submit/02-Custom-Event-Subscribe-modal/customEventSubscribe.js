
document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector('#btn-open-modal');

    btnOpenModal.addEventListener("click", () => {
        let customEvent

        if(btnOpenModal.classList.contains("subscription")) {
            btnOpenModal.classList.remove("subscription");
            btnOpenModal.textContent = "Подписаться 🔔";
            customEvent = new CustomEvent('subscription', {
                detail: {
                    isSubscribed: true,
                }
            });

        } else {
            btnOpenModal.classList.add("subscription");
            btnOpenModal.textContent = "Отписаться 🚫";
            customEvent = new CustomEvent('subscription', {
                detail: {
                    isSubscribed: true,
                }
            });
        }
        window.dispatchEvent(customEvent);
    })
});
//35. JavaScript - Custom Events. Создаем свои события