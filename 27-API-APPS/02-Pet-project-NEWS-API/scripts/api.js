const KEY_API = "4c08185a5e9c400b897abc5f403594fb";


export async function getFetchData(category, pageSize) {
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=`;
  try {
    const response = await fetch(`${URL}${KEY_API}`);

    if (!response.ok) {
      throw new Error("Сервер не отвечает, попробуйте позже");
    }

    const data = await response.json();

    console.log(data);
    return data.articles;
  } catch (error) {
    console.log(error.message);
  }
}


