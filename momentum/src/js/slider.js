let previousSlide = document.querySelector('.slide-prev');
let nextSlide = document.querySelector('.slide-next');

import * as timeFn from './time'
timeFn.dayPart();
import { lang } from "./settings";
import { settings } from "./settings";

let timeOfDay = (timeFn.dayPart()).toLowerCase();

export function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
let randomNum = getRandom(1, 20);
function setBG() {
    
    let bgNum = (randomNum.toString()).padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
    }
}
async function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=_Im-M8qZUbqaAv5OeazW9wZ-K_phlWaLcOV77Lqt2VA`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    img.src = data.urls.regular;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
    }
}

async function getImageFromFlickr() {
    
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=438993c3111f99f9a1ab1a2833a2e70b&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let randomFlickr = getRandom(1, +data.photos.perpage);
    const img = new Image();
    img.src = data.photos.photo[randomFlickr].url_l;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
    }
}
   
export function bgSource() {
    if ((settings.flickr === 0 && settings.unsplash === 0 && settings.github === 0 )||settings.github === 1) {
       
        setBG();
    } else if (settings.unsplash === 1) {
       
        getLinkToImage()
    } else if (settings.flickr === 1) {
        getImageFromFlickr();
        
    }

}



function getSlidePrev() {
    if (settings.flickr === 0 && settings.unsplash === 0 || settings.github === 1) {
        if (randomNum === 1) {
            randomNum = 20;
        } else randomNum--;
        setBG();
        console.log(1);
    }else if (settings.unsplash === 1) {
        console.log(2);
        getLinkToImage()
    } else if (settings.flickr === 1) {
        getImageFromFlickr();
        console.log(3);
    }
   
}
function getSlideNext() {
    if (settings.flickr === 0 && settings.unsplash === 0 || settings.github === 1) {
        if (randomNum === 20) {
            randomNum = 1;
        } else randomNum++;
          setBG();
    }else if (settings.unsplash === 1) {
        console.log(2);
        getLinkToImage()
    } else if (settings.flickr === 1) {
        getImageFromFlickr();
        console.log(3);
    }
  
}

previousSlide.addEventListener('click', getSlidePrev);
nextSlide.addEventListener('click', getSlideNext);

/* https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=438993c3111f99f9a1ab1a2833a2e70b&tags=nature&extras=url_l&format=json&nojsoncallback=1 */


