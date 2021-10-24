const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const town = document.querySelector('.city');
import { lang } from "./settings"



export async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=${lang}&appid=7f02b5698417e725310bb0e7444cc846&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (lang == 'EN') {
        if (town.value === 'Минск') {
            town.value = 'Minsk';
        }
        
        windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    } else {
        if (town.value === 'Minsk') {
            town.value = 'Минск';
        };
        
        windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
    }
}
    

getWeather();

export async function notMinsk(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town.value}&lang=${lang}&appid=7f02b5698417e725310bb0e7444cc846&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    if (data.message === "city not found" || town.value == "") {
        if (lang == 'EN') {
            town.placeholder="[Enter city]"
            weatherError.textContent = `Error! city not found `;
            temperature.textContent = '';
            weatherDescription.textContent = '';
            windSpeed.textContent = '';
            humidity.textContent = ''
        } else {
            town.placeholder="[Введите город]"
            weatherError.textContent = `Ошибка! Город не найден `;
            temperature.textContent = '';
            weatherDescription.textContent = '';
            windSpeed.textContent = '';
            humidity.textContent = ''
        }
        
        
    } else {
        if (lang == 'EN') {
            weatherError.textContent = '';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
        } else {
            weatherError.textContent = '';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
        }
        
    }
}
town.addEventListener('change', notMinsk);


function setLocalStorage() {
    localStorage.setItem('city', town.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
   
    if (localStorage.getItem('city')) {
        town.value = localStorage.getItem('city');
        notMinsk();
    } else {
        town.value = "Minsk";
        getWeather()
    }
}
window.addEventListener('load', getLocalStorage);