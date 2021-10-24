let settingsButton = document.querySelector('.settings')
let settingsPopup = document.querySelector('.settings-popup');
let settingsGreeting = document.querySelector('.greeting-container');
let settingsAdvancedProgress = document.querySelector('.songProgress');
let settingAdvancedDuration = document.querySelector('.duration');
let settingsAdvancedVolume = document.querySelector('.volume');
let generalList = document.querySelector('.general-list');
let generalSettings = document.querySelector('.general');
let imagesList = document.querySelector('.images-list');
let weatherList = document.querySelector('.weather-list');
let weatherWindow = document.querySelector('.weather');
let imagesWindow = document.querySelector('.settings-images');
let settingsInput = document.querySelector('.general-input');
let settingsLanguages = document.querySelector('.settings-languages');
let generalTitle = document.querySelector('.general-title');
let generalDescription = document.querySelector('.general-decription');
let generalLanguages = document.querySelector('.general-language');
let generalImagesTitle = document.querySelector('.general-images-title');
let descriptionLanguage = document.querySelector('.desctiption-language');
let descriptionWeather = document.querySelector('.description-weather');
let descriptionQuotes = document.querySelector('.description-quotes');
let generalImagesDescription = document.querySelector('.general-images-description');
let descriptionAdvanced = document.querySelector('.description-advanced');
let descriptionDate = document.querySelector('.description-date');
let UserNamelang = document.querySelector('.user-name');
let generalShow = document.querySelector('.general-show');
let descriptionTime = document.querySelector('.description-time');
let descriptionGreeting = document.querySelector('.description-greeting');
let generalDescriptionShow = document.querySelector('.general-description-show');
let descriptionPlayer = document.querySelector('.description-player');
let descriptionTodo = document.querySelector('.description-todo');
let settingsInputPlaceholder = document.querySelector('.settings-input');
let checkboxTime = document.getElementById('status-time');
let checkboxDate = document.getElementById('status-date');
let checkboxWeather = document.getElementById('status-weather');
let checkboxGreeting = document.getElementById('status-greeting');
let checkboxQuotes = document.getElementById('status-quotes');
let checkboxAdvanced = document.getElementById('status-advanced');
let checkboxGithub = document.getElementById('images-github');
let checkboxUnsplash = document.getElementById('images-unsplash');
let checkboxFlickr = document.getElementById('images-flickr');
let checkboxPlayer = document.getElementById('status-player');
let checkboxLanguage = document.getElementById('language');

let checkboxAll = document.querySelectorAll('.checkbox');
let radioAll = document.querySelectorAll('.radio');
export var lang = 'EN';

import { showDate } from './time';
import * as weatherFn from './weather';
import { getQuotes } from './quotes';
import * as timeFN from './time'
import { bgSource } from './slider';

export var settings = {
    'time': 0,
    'date': 0,
    'weather': 0,
    'greeting': 0,
    'quotes': 0,
    'player': 0,
    'advanced': 0,
    'todo': 0,
    'github': 0,
    'unsplash': 0,
    'flickr': 0,
    'language':0,
}
import { TIME } from './time'
import { DATE } from './time'
import { audioPlayer } from './audioplayer'
import { quote, quoteAuthor, changeQuote } from './quotes';



let isOpen = false
function tooglePopupSettings() {
    if (!isOpen) {
        settingsPopup.classList.add('visible')
        settingsButton.classList.add('activeButton');
        setTimeout(function () {
            generalSettings.classList.remove('hideTotally')
        }, 1000);
       
        isOpen = true
    } else {
        settingsPopup.classList.remove('visible')
        isOpen = false
        settingsButton.classList.remove('activeButton');
    }
}
settingsButton.addEventListener('click', tooglePopupSettings)

checkboxTime.addEventListener('change', function () {
    if (checkboxTime.checked) {
        TIME.classList.add('invisible');
        settings.time = 1;
        console.log(checkboxTime.value)
    } else {
        TIME.classList.remove('invisible');
        console.log(checkboxTime.value);
        settings.time = 0;
    }
    
})
checkboxDate.addEventListener('change', function () {
    if (checkboxDate.checked) {
        DATE.classList.add('invisible');
        settings.date = 1;
    } else {
        DATE.classList.remove('invisible');
        settings.date = 0;
    }
    
})
checkboxWeather.addEventListener('change', function () {
    if (checkboxWeather.checked) {
        weatherWindow.classList.add('invisible');
        settings.weather = 1;
    } else {
        weatherWindow.classList.remove('invisible');
        settings.weather = 0;
    }
    
})
checkboxGreeting.addEventListener('change', function () {
    if (checkboxGreeting.checked) {
        settingsGreeting.classList.add('invisible');
        settings.greeting = 1;
    } else {
        settingsGreeting.classList.remove('invisible');
        settings.greeting = 0;
    }
    
})
checkboxQuotes.addEventListener('change', function () {
    if (checkboxQuotes.checked) {
        quote.classList.add('invisible');
        quoteAuthor.classList.add('invisible');
        changeQuote.classList.add('invisible');
        settings.quotes = 1;
    } else {
        quote.classList.remove('invisible');
        quoteAuthor.classList.remove('invisible');
        changeQuote.classList.remove('invisible');
        settings.quotes = 0;
    }
    
})
checkboxAdvanced.addEventListener('change', function () {
    if (checkboxAdvanced.checked) {
        settingsAdvancedProgress.classList.add('invisible');
        settingAdvancedDuration.classList.add('invisible');
        settingsAdvancedVolume.classList.add('invisible');
        settings.advanced = 1;
    } else {
        settingsAdvancedProgress.classList.remove('invisible');
        settingAdvancedDuration.classList.remove('invisible');
        settingsAdvancedVolume.classList.remove('invisible');
        settings.advanced = 0;
    }
    
})
checkboxPlayer.addEventListener('change', function () {
    if (checkboxPlayer.checked) {
        audioPlayer.classList.add('invisible');
        settings.player = 1;
        
    } else {
        audioPlayer.classList.remove('invisible');
        settings.player = 0;
    }
})
  
checkboxGithub.addEventListener('change', function () {
    if (checkboxGithub.checked) {
        settings.github = 1;
        settings.unsplash = 0;
        settings.flickr = 0;
        settingsInput.classList.add('invisible');
        bgSource()
        
    } else {
       settings.github = 0;
    }
})
  
checkboxUnsplash.addEventListener('change', function () {
    if (checkboxUnsplash.checked) {
        settings.unsplash = 1;
        settings.github = 0;
        settings.flickr = 0;
        settingsInput.classList.remove('invisible');
        bgSource()
    
      } else {
       settings.unsplash = 0;
    }
})
  
checkboxFlickr.addEventListener('change', function () {
    if (checkboxFlickr.checked) {
        settings.flickr = 1;
        settings.github = 0;
        settings.unsplash = 0;
        settingsInput.classList.remove('invisible');
        bgSource()
      } else {
       settings.flickr = 0;
    }
})
function Language() {
    if (checkboxLanguage.checked) {
        settings.language = 1;
        lang = "RU";
        weatherFn.getWeather();
        weatherFn.notMinsk();
        showDate();
        getQuotes()
        timeFN.getLocalStorage();
        timeFN.dayPart();
        generalTitle.textContent = 'Основные';
        generalDescription.textContent = 'Настрой приложение под себя';
        generalLanguages.textContent = 'Выбрать язык';
        descriptionLanguage.textContent = "Язык";
        generalShow.textContent = 'скрыть';
        descriptionTime.textContent = 'Часы';
        descriptionDate.textContent = 'Дата';
        descriptionWeather.textContent = 'Погода';
        descriptionGreeting.textContent = 'Приветствие';
        descriptionQuotes.textContent = 'Цитаты';
        descriptionAdvanced.textContent = 'Расширенный аудиоплеер';
        descriptionPlayer.textContent = 'Аудиоплеер';
        descriptionTodo.textContent = "Список дел";
        generalList.textContent = "Основные";
        imagesList.textContent = 'Изображения';
        generalImagesTitle.textContent = "Изображения";
        generalImagesDescription.textContent = "Выбери любимые изображения";
        generalDescriptionShow.textContent = 'Источник изображений';
        settingsInputPlaceholder.placeholder = 'Введи тег для поиска изображений...';
        UserNamelang.textContent = 'Пользователь';
       
    } else {
      lang = "EN";
        settings.language = 0;
        weatherFn.getWeather();
        showDate();
        getQuotes()
        timeFN.getLocalStorage();
        timeFN.dayPart();
        weatherFn.notMinsk();
        generalTitle.textContent = 'General';
        generalDescription.textContent = 'Customize your dashbord';
        generalLanguages.textContent = 'Languages';
        descriptionLanguage.textContent = "Language";
        generalShow.textContent = 'Hide';
        descriptionTime.textContent = 'Time';
        descriptionDate.textContent = 'Date';
        descriptionWeather.textContent = 'Weather';
        descriptionGreeting.textContent = 'Greeting';
        descriptionQuotes.textContent = 'Quotes';
        descriptionAdvanced.textContent = 'Advanced player'
        descriptionPlayer.textContent = 'Player';
        descriptionTodo.textContent = "TODO";
        generalList.textContent = "General";
        imagesList.textContent = 'Images';
        generalImagesTitle.textContent = "Images";
        generalImagesDescription.textContent = "See a new inspiring image every day";
        generalDescriptionShow.textContent = 'Feeds';
        settingsInputPlaceholder.placeholder = 'Write keyword to search images...';
        UserNamelang.textContent = 'User';
    }
    return lang
}

  
  checkboxLanguage.addEventListener('change', Language)

window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.settings') && !target.closest('.settings-popup')) { 
        settingsPopup.classList.remove('visible')
        isOpen = false
        settingsButton.classList.remove('activeButton');
      
        setTimeout(function () {
            generalSettings.classList.remove('hideTotally');
            imagesWindow.classList.add('hideTotally');
        }, 1000);
    }
})

function setLocalStorage() {
    localStorage.setItem('settings', JSON.stringify(settings) );
    localStorage.setItem('language', lang );
    
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('settings')) {
        let recievedSettings = localStorage.getItem('settings');
        settings = JSON.parse(recievedSettings);
       
        checkboxTime.checked = !!settings.time;
        checkboxDate.checked = !!settings.date;
        checkboxWeather.checked = !!settings.weather;
        checkboxGreeting.checked = !!settings.greeting;
        checkboxQuotes.checked = !!settings.quotes;
        checkboxAdvanced.checked = !!settings.advanced;
        checkboxPlayer.checked = !!settings.player;
        checkboxGithub.checked = !!settings.github;
        checkboxUnsplash.checked = !!settings.unsplash;
        checkboxFlickr.checked = !!settings.flickr;
        checkboxLanguage.checked = !!settings.language;
        bgSource();
        let event = new Event('change');
        checkboxAll.forEach((elem) => {
            elem.dispatchEvent(event)
        });
       
        if (localStorage.getItem('language')) {
            lang = localStorage.getItem('language');
       }
      
        
    }
}
window.addEventListener('load', getLocalStorage);

imagesList.addEventListener('click', function () {
    generalSettings.classList.add('hideTotally');
    
    imagesWindow.classList.remove('hideTotally')
    
})
generalList.addEventListener('click', function () {
    generalSettings.classList.remove('hideTotally');
    imagesWindow.classList.add('hideTotally');
    
})


