const listButtons = document.querySelectorAll('.btn');
const modalElement = document.querySelector('.popap');
const buttonCloseModal = document.querySelector('.popap__close');
let scrollWidth = null; // в отдельную переменную поточу что если скрывать модалку через display: block ширина вычислялась не в момент когда модалка закрыта


listButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        modalElement.classList.add("active");
        scrollWidth = window.innerWidth - modalElement.offsetWidth + "px";
        document.body.style.overflow = 'hidden'; //убрать скролл
        document.body.style.paddingRight = scrollWidth; //прибавляем ширину скролла
    });
});

buttonCloseModal.addEventListener('click', () => moveModal());

window.addEventListener("click", (e) => {
    if(e.target.classList.contains("popap")) {
        moveModal();
    };
});

function moveModal() {
    modalElement.classList.remove("active");
    setTimeout(() => { // что бы скрол не так быстро изчезал а то изи-за этого модалка дёргается
        document.body.style.overflow = '';
        document.body.style.paddingRight = "0px"; //зануляем или убераем ширину скролла
    }, 800); // 800 мс взято из стилей 8s transition: all .8s ease 0s;
};
