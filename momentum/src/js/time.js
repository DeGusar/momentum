export const TIME = document.querySelector('.time');
export const DATE = document.querySelector('.date');
const partOfTheDay = document.querySelector('.greeting')
const userName = document.querySelector('.name')
const userNameSettings = document.querySelector('.user-name')
let daypart;
import { lang } from "./settings";



    

function showTime() {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    
    TIME.textContent = `${currentTime}`;
    showDate();
    dayPart();
    setTimeout(showTime, 1000);
}
showTime();

export function showDate() {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' }
    if (lang === 'EN') {
        DATE.textContent = `${date.toLocaleDateString('en',options)}`;
    } else {
        DATE.textContent = `${date.toLocaleDateString('Ru',options)}`;
    }
   
  
}



export function dayPart() {
    const time = new Date();
    const hours = time.getHours();
     partOfTheDay.textContent = `${hours}`;
    if (hours >= 6 && hours < 12) {
        daypart = 'Morning';
    } else if (hours >= 12 && hours < 18) {
        daypart = 'Afternoon';
    } else if (hours >= 18 && hours < 24) {
        daypart = 'Evening';
    } else daypart = 'Night';
    if (lang === 'EN') {
        partOfTheDay.textContent = `Good ${daypart}`;
    } else {
        if (daypart === 'Morning') {
            partOfTheDay.textContent = 'Доброе утро';
        } else if (daypart === 'Afternoon') {
            partOfTheDay.textContent = `Добрый день`
        } else if (daypart === 'Evening') {
            partOfTheDay.textContent = `Добрый вечер`
        } else if (daypart === 'Night') {
            partOfTheDay.textContent = `Доброй ночи`;
        }

        
    }
    
    return daypart
}
dayPart();

function setLocalStorage() {
    localStorage.setItem('name', userName.value);
    
}
window.addEventListener('beforeunload', setLocalStorage);

export function getLocalStorage() {
    if (lang === 'EN') {
        userName.placeholder = "[Enter name]";
    } else {
        userName.placeholder = "[Введите имя]";
    }
    
    if (localStorage.getItem('name')) {
       
        userName.value = localStorage.getItem('name');
        userNameSettings.textContent = `${localStorage.getItem('name')}`;
    }
}
window.addEventListener('load', getLocalStorage);
userName.addEventListener('change', function () {
    if (userName.value === '') {
        if (lang === "EN") {
            userName.placeholder = "[Enter name]";
        } else {
            userName.placeholder = "[Введите имя]";
        }
        
    }
})

userName.addEventListener('change', function () {
    userNameSettings.textContent = `${userName.value}`;
})

