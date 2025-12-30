import { showLoadingText } from "./index.js";

const KEY_API = "4c08185a5e9c400b897abc5f403594fb";
const BASE_URL = "https://newsapi.org/v2";



export  async function getData() {
    showLoadingText("Loading...")
    try {
        const response = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${KEY_API}`);
        if (!response.ok) {
            throw Error(response.statusText);
        };
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};


export  async function getEverything (query) {

    try {
        const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${KEY_API}`);
        if (!response.ok) {
            throw Error(response.statusText);
        };
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}


