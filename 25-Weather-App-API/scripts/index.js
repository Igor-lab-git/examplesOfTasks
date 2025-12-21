const API_ACCESS = "https://api.weatherstack.com/current?access_key=9e116fac8c130a0f98c6b50fbfdc451c";
const rootElement = document.querySelector("#root");

let store= {
    city: "London",
    feelslike: 0,
    cloudcover: 0,
    temperature: 0,
    humidity: 0,
    observationTime: "00:00 PM",
    pressure: 0,
    uvIndex: 0,
    visibility: 0,
    isDay: "yes",
    name: "London",
    description: "",
    windSpeed: 0,
};

const fetchData = async () => {
    try {
        const response = await fetch(`${API_ACCESS}&query=${store.city}`);
        console.log(response);
        if (!response.ok) {
            throw new Error(response.statusText);
        };
        const data = await response.json();
        console.log(data);
        // return data;
    } catch (e) {
        console.error('Error fetching data from API');
        };
};
fetchData()
// async function handleSubmit() {
//     const data = await fetchData(store.city);
//
//     if (data) {
//         const { location: {name, country, localtime},
//             current: {feelslike, cloudcover, temperature, humidity, observation_time:  observationTime, pressure, uv_index: uvIndex, visibility, is_day: isDay, weather_descriptions: description, wind_speed: windSpeed} } = data;
//         store = {
//             ...store,
//             city: "London",
//             feelslike,
//             cloudcover,
//             temperature,
//             humidity,
//             observationTime,
//             pressure,
//             uvIndex,
//             visibility,
//             isDay,
//             name,
//             description: description[0],
//             windSpeed
//         };
//         renderRootComponent(store);
//     };
// };
//
// handleSubmit();
//
// function renderRootComponent(store) {
//     rootElement.innerHTML = renderApp(store);
// };
//
//
// function renderApp(store) {
//     const { city, description, observationTime, temperature } = store;
//     return (
//         `
//         <div class="container" >
//             <div class="top">
//               <div class="city">
//                 <div class="city-subtitle">Weather Today in</div>
//                   <div class="city-title" id="city">
//                   <span>${city}</span>
//                 </div>
//               </div>
//               <div class="city-info">
//                 <div class="top-left">
//                 <img class="icon" src="./images/${getImageByWord(description)}" alt="" />
//                 <div class="description">${description}</div>
//               </div>
//
//               <div class="top-right">
//                 <div class="city-info__subtitle">as of ${observationTime}</div>
//                 <div class="city-info__title">${temperature}°</div>
//               </div>
//             </div>
//           </div>
//         <div id="properties"></div>
//       </div>
//         `
//     );
// };
//
// function getImageByWord(description) {
//     const value = description.toLowerCase();
//     switch (value) {
//         case "overcast" : return "partly.png";
//             break;
//         case "cloud" : return "cloud.png";
//             break;
//         case "fog" : return "fog.png";
//             break
//         case "sunny" : return "sunny.png";
//             break;
//         default: return "the.png"
//     }
// };

