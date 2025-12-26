
const accessKey = "961f0e9d-f48c-4c12-8227-41961701db74";
const cityName = 'USA'; // Город можно брать из поля ввода
const headers = {
  "X-Yandex-Weather-Key": accessKey,
};

async function getCoordinates(cityName) {
  const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)}&format=json`;
  const response = await fetch(geoUrl);
  const data = await response.json();

  if (data && data[0]) {
    return {
      lat: data[0].lat,
      lon: data[0].lon
    };
  } else {
    throw new Error('Город не найден');
  }
}

async function getWeather() {
  try {
    const coords = await getCoordinates(cityName);
    const url = `https://api.weather.yandex.ru/v2/forecast?lat=${coords.lat}&lon=${coords.lon}&extra=true`;
    const response = await fetch(
        url,
      { headers }
    );

    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  };
};
getWeather()