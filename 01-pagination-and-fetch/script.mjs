const postsElement = document.querySelector(".posts");
const paginationElement = document.querySelector(".pagination");

const strUrl = "https://jsonplaceholder.typicode.com/posts";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage =
          response.status === 404
          ? "Данных нет, сервер временно не доступен"
          : "Что-то пошло не так";
      throw new Error(errorMessage);
    } else {
    }
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

const creatElement = (tagName, className, content="") => {
    const tag =  document.createElement(tagName);
    tag.classList.add(className);
    if(tag && content !== undefined && content !== null) {
        tag.innerHTML = content;
    }
    return tag;
}


const main = async () => {
  const postsData = await getData(strUrl);
  let currentPage = 1;
  let rowsPosts = 10;

  const displayList = (arrayPosts, rowsPosts, currentPage) => {
    postsElement.innerHTML = "";
    currentPage--;
    const start = rowsPosts * currentPage;
    const end = start + rowsPosts;

    const partPageData = arrayPosts.slice(start, end);

    partPageData.forEach((element) => {
      const postElement = creatElement("p", "post", element.title);
      postsElement.appendChild(postElement);
    });
  };

  const displayPagination = (postsData, rowsPosts) => {
    //вычисляем количество страниц
    const pagesCount = Math.ceil(postsData.length / rowsPosts);
    const listPaginationButtons = creatElement("ul", "pagination__list");
    // listPaginationButtons.classList.add("pagination__list")

    for(let i = 0; i < pagesCount; i++) {
      const numberPage = i + 1;
      const liItemButton = creatElement("li", "pagination__item", numberPage)
      listPaginationButtons.appendChild(liItemButton);
      console.log(listPaginationButtons);
      paginationElement.appendChild(listPaginationButtons);

      if(currentPage == numberPage) liItemButton.classList.add("pagination__item__active"); //навешивает активный класс изначально 1-й странице

      //Вариант с Использованием делегирования событий на весь документ
      document.addEventListener("click", (e) => {
        if(e.target.classList.contains("pagination__item")) {
          const activeItems = document.querySelectorAll(".pagination__item");
          activeItems.forEach((item) => item.classList.remove("pagination__item__active"));
          e.target.classList.add("pagination__item__active");
          displayList(postsData, rowsPosts, parseInt(e.target.textContent)); //e.target.textContent номер кнопки внутки e.target на которую кликаем или Number()
        }
      })
  
      // liItemButton.addEventListener("click", () => {
      //   //находит все кнопки при помощи класса
      //   const activeItems = document.querySelectorAll(".pagination__item");
      //   // Снимаем активный класс со всех кнопок
      //   activeItems.forEach((item) => item.classList.remove("pagination__item__active"));
      //    // Добавляем активный класс нажатой кнопке
      //   liItemButton.classList.add("pagination__item__active");
      //    // Обновляем список постов
      //   displayList(postsData, rowsPosts, numberPage)
      // })
      }
    
  }

  displayList(postsData, rowsPosts, currentPage);
  displayPagination(postsData, rowsPosts)
};

main();


//#6 Пишем ПАГИНАЦИЮ на Javascript (PAGINATION JS) 24-00
