const breakingNewsElement = document.querySelector("#breaking-news");
const topNewsElement = document.querySelector("#top-news");
const sportsNewsElement = document.querySelector("#sports-news");
const businessNewsElement = document.querySelector("#business-news");
const technologyNewsElement = document.querySelector("#technology-news");

export function addBreakingNews(data) {
    let breakingElement = null;
    const firstElementData = data[0];
  
    if (!firstElementData || data.length === 0) return;
  
    const { url, urlToImage, description, title } = firstElementData;
    breakingElement = `
         <h2 class="top-headlines__title top-headlines__title--left">Breaking News</h2>
                  <div class="top-headlines__breaking-image-wrapper top-headlines__breaking-image-wrapper--left">
                      <img class="top-headlines__breaking-image top-headlines__breaking-image--left" src="${urlToImage}" alt="image">
                  </div>
                  <div class="top-headlines__breaking-text top-headlines__breaking-text--left">
                      <a href="${url}" target="_blank" class="top-headlines__link top-headlines__link--left"><h2 class="top-headlines__subtitle top-headlines__subtitle--left">${title}</h2></a>
                      <div class="top-headlines__description top-headlines__description--left">
                         <p>${description}</p>
                      </div>
                  </div>`;
    breakingNewsElement.insertAdjacentHTML("beforeend", breakingElement);
  };
  
  export function addTopNews(data) {
  let cardElementHTML = "";
  let displayTitlt = "";
  if (data.length === 0) return;
  
  data.forEach((newsElement) => {
      if(newsElement.title && newsElement.title.length < 100) {
          displayTitlt = newsElement.title;
      } else {
          displayTitlt = newsElement.title.slice(0, 100) + "...";
      };
      
      cardElementHTML += `
                  <div class="top-headlines__news top-headlines__news--right">
                      <div class="top-headlines__breaking-image top-headlines__breaking-image--right" >
                      <img class="top-headlines__breaking-image top-headlines__breaking-image--left" src="${newsElement.urlToImage}" alt="image"></div>
                      <div class="top-headlines__breaking-text top-headlines__breaking-text--right">
                          <div class="top-headlines__subtitle top-headlines__subtitle--right">
                          <a href="${newsElement.url}" target="_blank" class="top-headlines__link top-headlines__link--right">
                          ${displayTitlt}
                          </a>
                          </div>
                      </div>
                  </div>
      `
      topNewsElement.innerHTML = cardElementHTML;
  });
  };
  
  export function addSportsNews(data) {
      console.log(data);
      
      let cardElementHTML = "";
  if (data.length === 0) return;
  
  data.forEach((newsElement) => {
      const { title, urlToImage, url } = newsElement;
  
      
      cardElementHTML += `
                  <article class="page-2__card card-page2">
                          <div class="card-page2__image">
                          <img class="top-headlines__breaking-image top-headlines__breaking-image--left" src="${urlToImage}" alt="image"></div></div>
                          <div class="card-page2__subtitle">
                              <a href="${url}" target="_blank" class="top-headlines__link top-headlines__link--right">
                                  ${title}
                              </a>
                          </div>
                      </article>
      `
      sportsNewsElement.innerHTML = cardElementHTML;
  })
  };
  
  export function addBusinessNews(data) {
      console.log(data);
      
      let cardElementHTML = "";
  if (data.length === 0) return;
  
  data.forEach((newsElement) => {
      const { title, urlToImage, url } = newsElement;
      cardElementHTML += `
                  <article class="page-2__card card-page2">
                          <div class="card-page2__image">
                          <img class="top-headlines__breaking-image top-headlines__breaking-image--left" src="${urlToImage}" alt="image"></div></div>
                          <div class="card-page2__subtitle">
                              <a href="${url}" target="_blank" class="top-headlines__link top-headlines__link--right">
                                  ${title}
                              </a>
                          </div>
                      </article>
      `
      businessNewsElement.innerHTML = cardElementHTML;
  })
  };
  
  
  export function addTechnologyNews(data) {
      console.log(data);
      
      let cardElementHTML = "";
  if (data.length === 0) return;
  
  data.forEach((newsElement) => {
      const { title, urlToImage, url } = newsElement;
      cardElementHTML += `
                  <article class="page-2__card card-page2">
                          <div class="card-page2__image">
                          <img class="top-headlines__breaking-image top-headlines__breaking-image--left" src="${urlToImage}" alt="image"></div></div>
                          <div class="card-page2__subtitle">
                              <a href="${url}" target="_blank" class="top-headlines__link top-headlines__link--right">
                                  ${title}
                              </a>
                          </div>
                      </article>
      `
      technologyNewsElement.innerHTML = cardElementHTML;
  })
  };