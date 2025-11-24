const containerElement = document.querySelector(".container");
const postsElement = document.querySelector(".posts");
const paginationElement = document.querySelector(".pagination");

const strUrl = "https://jsonplaceholder.typicode.com/posts";

async function getData(url) {
  try {
    const respose = await fetch(url);
    console.log(respose);
    if (!respose.ok) {
      const errorMessage =
        respose.status === 404
          ? "Данных нет, сервер временно не доступен"
          : "Что-то пошло не так";
      throw new Error(errorMessage);
    } else {
    }
    const data = await respose.json();
    console.log(data);
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

const creatElement = (tagName, className, content) => {
    const tag =  document.createElement(tagName);
    tag.classList.add(className);
    if(tag) {
        tag.innerHTML = content
    }
    return tag;
}


const main = async () => {
  const postsData = await getData(strUrl);
  let currentPage = 1;
  let rowsPosts = 10;
  console.log(postsData);

  const displayList = (arrayPosts, rowsPosts, currentPage) => {
    const start = rowsPosts * currentPage;
    const end = start + rowsPosts;
    console.log(arrayPosts);

    const partPageData = arrayPosts.slice(start, end);

    partPageData.forEach((element) => {
      const postElement = creatElement("p", "post", element.title);
      console.log(postElement);
      postsElement.appendChild(postElement);
    });
  };

  const displayPagination = (postsData, rowsPosts) => {
    const pagesCount = Math.ceil(postsData.length / rowsPosts);
    const listPaginationButtons = document.createElement("ul");
    listPaginationButtons.classList.add("pagination__list")

    for(let i = 0; i < pagesCount.length; i++) {
        listPaginationButtons.appendChild(creatElement("li", "pagination__item", i + 1));
    }
  }

  displayList(postsData, rowsPosts, currentPage);
  displayPagination(postsData, rowsPosts)
};

main();


//#6 Пишем ПАГИНАЦИЮ на Javascript (PAGINATION JS) 24-00