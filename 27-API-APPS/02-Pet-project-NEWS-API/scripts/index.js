import { getFetchData } from "./api.js";
import { scrollHeader } from "./bindEvents.js";
import { headerBurger } from "./header.js";
import { addBreakingNews, addBusinessNews, addSportsNews, addTechnologyNews, addTopNews } from "./renderNews.js";


const filterFetchData = async () => {
  const arrayBreakingNews = await getFetchData("business", 20);
  const arrayTopNews = await getFetchData("general", 15);
  const arraySportsNews = await getFetchData("sports", 5);
  const arrayBusinessNews = await getFetchData("business", 5);
  const arrayTechnologyNews = await getFetchData("technology", 5);
  
  addBreakingNews(arrayBreakingNews);
  addTopNews(arrayTopNews);
  addSportsNews(arraySportsNews);
  addBusinessNews(arrayBusinessNews);
  addTechnologyNews(arrayTechnologyNews);
};

filterFetchData();
scrollHeader();
headerBurger();
