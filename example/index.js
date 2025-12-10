const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Ошибка в getData:', error.message);
    throw error; // Пробрасываем ошибку дальше
  }
};

getData()

