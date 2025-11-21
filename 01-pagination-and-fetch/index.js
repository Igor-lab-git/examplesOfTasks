const postsDivElement = document.querySelector(".posts");
const paginationDivElement = document.querySelector(".pagination");

const getData = async() => {
    try {
        const fetchResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!fetchResponse.ok) {
            const errorMessage = "Ошибка на сервере, данных нет";
            throw new Error(errorMessage);
        }
        const data = await fetchResponse.json();

        return data;

    } catch (error) {
        console.log(error.errorMessage);
    }

}

const renderMain = async() => {
    const postData = await getData();
    let currentPage = 0;
    let rows = 10;

    const displayList = (arrayData, rowPerPage, page) => {
        const startPage = rowPerPage * page;
        const endPage =  startPage + rowPerPage;
        const paginationData = arrayData.slice(startPage, endPage);

        paginationData.forEach(element => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerText = `${element.title}`;
            postsDivElement.appendChild(postElement)
            
        });
    }

    const displayPagination = (arrayData, rowPerPage) => {
        const pagesCount = Math.ceil(arrayData.length / rowPerPage);
        const listItemPagination = document.createElement("ul");
        listItemPagination.classList.add("pagination__list");

        for(let i = 0; i < pagesCount; i++) {
            listItemPagination.appendChild(paginetionButton(i + 1))
        }
        listItemPagination.appendChild(listItemPagination)
        
    }

    const paginetionButton = () => {
        const itemPagination = document.createElement("li");
        itemPagination.classList.add("pagination__item");
        itemPagination.textContent(numberPage);
        return itemPagination
    }

    displayList(postData, rows, currentPage);
    displayPagination(postData, rows);
}

renderMain();

