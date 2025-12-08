document.addEventListener("DOMContentLoaded", () => {
    const modalElement = document.querySelector('.modal');
    const modalText = document.querySelector('#modal-text');
    const btnOpenModal = document.querySelector('#btn-open-modal');
    const closeModal = document.querySelector('#close-modal');

    function updateModal() {
        modalText.innerText = "Вы подписались, спасибо за подписку 😊";
    }

    window.addEventListener('subscription', (e) => {
        const status = e.detail.isSubscribed;
        if(status) {
            modalElement.classList.add('open');
            updateModal();
        }
    });

    closeModal.addEventListener('click', (e) => {
        modalElement.classList.remove('open');
    });
})

