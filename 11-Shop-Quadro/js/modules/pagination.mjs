const productContainer = document.querySelector(".js-products-list");
const paginationWrapper = document.querySelector(".js-pagination");
const btnPrevPagination = document.querySelector(".pagination-btn-prev");
const btnNextPagination = document.querySelector(".pagination-btn-next");

const pagination = (products) => {
    console.log("products", products);
    let productCount = 8;
    let currentPage = 1;

    const renderProducts = (products, productContainer, productCount, currentPage) => {
        productContainer.innerHTML = "";

        const firstProductIndex = productCount * currentPage - productCount;
        const lastProductIndex = firstProductIndex + productCount;
        const partProductOnPage = products.slice(firstProductIndex, lastProductIndex);


        partProductOnPage.forEach(({ id, model, photo, prices }) => {
            const liCardElement = document.createElement("li");
            liCardElement.classList.add("product", "item", "column", "aic", "js-product");

            liCardElement.innerHTML = `
                    <div class="favorites js-favorites">
                        <span class="heart-lined js-heart-lined">
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"></path></svg>
                        </span>      
                        <span class="heart-filled js-heart-filled hidden">
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"></path></svg> 
                        </span>
                    </div>
                        <a href="#" id="${id}" class="link column aic js-link-card">
                                        
                        <div class="product-image row jcc">
                            <img src="./img/products/${photo[0]}" alt="${model}" class="image js-image-card">   
                        </div>
                        <div class="product-description">
                            <h3 class="title js-title-card">${model}</h3>
                        </div>  
                        <div class="product-price">
                            <span class="price js-price-card">${prices[0]}</span><span>₽</span>
                        </div>       
                        </a>
                    <button type="button" class="addCart buy-button js-buy-button">В корзину</button>
                `;
            productContainer.append(liCardElement);
        })
    }

    const renderPagination = (products, productCount) => {
        const pagesCount = Math.ceil(products.length / productCount);
        const ulPagination = document.querySelector(".js-pagination-list");
        for(let i = 1; i <= pagesCount; i++) {
            const liBtn = renderBtn(i)
            ulPagination.append(liBtn);
        }
        
        paginationWrapper.classList.remove("hidden");
    }

     function renderBtn(NumberPage) {
        const li =  document.createElement("li");
        li.classList.add("pagination-item", "row", "jcc", "aic");
        li.textContent = NumberPage;

        if(currentPage === NumberPage) {
            li.classList.add("active");
        }
        return li;
    }

    const updatePaginetion = () => {
         paginationWrapper.addEventListener("click", (e) => {

            if(!e.target.closest(".pagination-item")) {
                return ;
            }; // даже если не кликнули на кнопки  Java-script вес равно не создаёт события хоть мы их и не видим 

            if(!e.target.closest(".pagination-item")) { //Нажодим в контейнере pagination нажатую кнопку
               return;
            } else {
                currentPage = e.target.textContent; // текущей страеице присваиваем текст нажатой кнопки 
                console.log(currentPage);
                renderProducts(products, productContainer, productCount, currentPage); // обновляем список прдукотов обрезанного массива
                const currentLiBtn = document.querySelector(".pagination-item.active"); // находим кновку уже нажатую с активным классом и перепресваиваем класс нажатой кнопке e.target
                currentLiBtn.classList.remove("active"); //забираем активный класс
                e.target.classList.add("active"); //добавляем толко что нажатой кнопке активный класс
            }
        })
    }

    renderProducts(products, productContainer, productCount, currentPage);
    renderPagination(products, productCount);
    updatePaginetion();

    const liBtnPaginationElements = document.querySelectorAll(".pagination-item");
    console.log(liBtnPaginationElements);
    

    const handlePagination = (e) => {
        const currentActiveLiBtn = document.querySelector(".pagination-item.active"); //находим текущую нажатую кнопке с активным классом
        let newActiveLi; // в эту переменную будет записана новая активная кнопка

        if(e.target.closest(".js-pagination-btn-next")) { // условием проверяем если событие на кнопке с классом next
            newActiveLi = currentActiveLiBtn.nextElementSibling; // то в newActiveLi записываем слудующую кнопку методом nextElementSibling
            currentPage++
            
        } else {
            newActiveLi = currentActiveLiBtn.previousElementSibling; // а иначе в newActiveLi пишим предыдущую кнопку
            currentPage--
        }

        if(!newActiveLi && e.target.closest(".js-pagination-btn-next")) { // если при нажатии нет newActiveLi тоесть null и нажата кнока > 
            newActiveLi = liBtnPaginationElements[0]; //то перекидывает на первую кнопу изи массива liBtnPaginationElements
        } else if(!newActiveLi && e.target.closest(".pagination-btn-prev")) { // и наоборот
            newActiveLi = liBtnPaginationElements[liBtnPaginationElements.length - 1];
             // перекидывает в конец списка кнопок 
        }

        currentActiveLiBtn.classList.remove("active");
        newActiveLi.classList.add("active");

        if(currentPage > liBtnPaginationElements.length) {
            currentPage = 1;
        } else if(currentPage < 1){
            currentPage = liBtnPaginationElements.length;
        }
        renderProducts(products, productContainer, productCount, currentPage);
       
    }

    btnNextPagination.addEventListener("click", handlePagination);
    btnPrevPagination.addEventListener("click", handlePagination);
}

export { pagination };

