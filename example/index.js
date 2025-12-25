const user = {
  id: 1,
  name: "Jenna",
  age: 25,
  isLove: true,
};

const accessKey = "961f0e9d-f48c-4c12-8227-41961701db74";

const headers = {
  "X-Yandex-Weather-Key": accessKey,
};

async function getWeather() {
  try {
    const respons = await fetch(
      "https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388",
      { headers }
    );
    const data = await respons.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getWeather()