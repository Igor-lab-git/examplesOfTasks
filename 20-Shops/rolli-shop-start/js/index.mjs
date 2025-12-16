
document.addEventListener("click", (e) => {
    // console.log(e.target);

    const btnPlus = e.target.closest('[data-action="plus"]');
    const btnMinus = e.target.closest('[data-action="minus"]');
    console.log(btnPlus);
    console.log(btnMinus);
    
    
})