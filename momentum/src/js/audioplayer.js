import playList from "./playList";
export let audioPlayer = document.querySelector(".player");
let buttonPlay = document.querySelector(".play");
let buttonNext = document.querySelector(".play-next");
let buttonPrevious = document.querySelector(".play-prev");
let audioPlayList = document.querySelector(".play-list");
let playerControls = document.querySelector(".player-controls");
let buttonPlayPlaylist = document.querySelectorAll(".play-item-button");
let playlistSong = document.querySelectorAll(".play-item");
let volumeScale = document.querySelector(".volume-progress");
let volumeButton = document.querySelector(".volume-button");
let currentTime = document.querySelector(".current");
let durationTime = document.querySelector(".length");
let songProgress = document.querySelector(".progress");
let songName = document.querySelector(".songName span");


let audio = new Audio();
let isPlay = false;
let songNumber = 0;
audio.src = playList[songNumber].src;
function toggleAudioStatus() {
  
    if (!isPlay) {
       
        audio.play();
        buttonPlay.classList.add("pause");
        buttonPlayPlaylist[songNumber].classList.add("pause-playlist");
        songName.textContent = `${playList[songNumber].title}`;
        songName.classList.add("animation");
        playlistSong[songNumber].classList.add("item-active")
        
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
        buttonPlay.classList.remove("pause");
        buttonPlayPlaylist[songNumber].classList.remove("pause-playlist");
        songName.classList.remove("animation")
        playlistSong[songNumber].classList.remove("item-active")
    }
}
buttonPlay.addEventListener('click', toggleAudioStatus);

function playNext() {
    if (songNumber === 3) {
        songNumber = 0;
        buttonPlayPlaylist[0].classList.add("pause-playlist");
        playlistSong[0].classList.add("item-active")
        buttonPlayPlaylist[3].classList.remove("pause-playlist");
        playlistSong[3].classList.remove("item-active")
        
    } else {
        songNumber++
        buttonPlayPlaylist[songNumber - 1].classList.remove("pause-playlist");
        playlistSong[songNumber - 1].classList.remove("item-active")
        buttonPlayPlaylist[songNumber].classList.add("pause-playlist");
        playlistSong[songNumber].classList.add("item-active")
    }
    audio.src = playList[songNumber].src;
    songName.textContent = `${playList[songNumber].title}`;
    audio.play();
    isPlay = true;
    buttonPlay.classList.add("pause");
    
}
buttonNext.addEventListener('click', playNext)

function playPreviuos() {
    if (songNumber === 0) {
        songNumber = 3;
        buttonPlayPlaylist[3].classList.add("pause-playlist");
        playlistSong[3].classList.add("item-active")
        buttonPlayPlaylist[0].classList.remove("pause-playlist");
        playlistSong[0].classList.remove("item-active")
    } else {
        songNumber--;
        buttonPlayPlaylist[songNumber + 1].classList.remove("pause-playlist");
        playlistSong[songNumber + 1].classList.remove("item-active")
        buttonPlayPlaylist[songNumber].classList.add("pause-playlist")
        playlistSong[songNumber].classList.add("item-active")
    }
    audio.src = playList[songNumber].src;
    audio.play();
    isPlay = true;
    buttonPlay.classList.add("pause");
    
}
buttonPrevious.addEventListener('click', playPreviuos)

buttonPlayPlaylist.forEach((elem,index) => {
    elem.addEventListener('click', e => {
        songNumber = index;
        if (!e.target.classList.contains('pause-playlist')) {
            audio.src = playList[songNumber].src;
            songName.classList.add("animation")
            audio.play();
            songName.textContent = `${playList[songNumber].title}`;
            buttonPlay.classList.add("pause");
            buttonPlayPlaylist.forEach((elem, ind) => {
                if (ind != songNumber) {
                    buttonPlayPlaylist[ind].classList.remove("pause-playlist");
                    playlistSong[ind].classList.remove("item-active")
                }
            });
            buttonPlayPlaylist[songNumber].classList.add("pause-playlist");
            playlistSong[songNumber].classList.add("item-active")
            isPlay = true;
        } else {
            audio.pause();
            isPlay = false;
            songName.classList.remove("animation")
            buttonPlay.classList.remove("pause");
            buttonPlayPlaylist[songNumber].classList.remove("pause-playlist");
            playlistSong[songNumber].classList.remove("item-active")
         }
           
        
    })
    
})


function audioChangeVolume() {
    let volume = volumeScale.value / 100;
   
    audio.volume = volume;
    volumeScale.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 ${audio.volume*100}%, white ${audio.volume*100}%, white 100%)`
    if (volume === 0) {
        volumeButton.classList.add('volumeMuted');
        
    } else {
        volumeButton.classList.remove('volumeMuted');
    }
}
volumeScale.addEventListener('change', audioChangeVolume);
let temporary;
function videoMute() {
    
if (audio.volume == 0) {
    if (temporary == 0) temporary = 100;
    volumeScale.value = temporary;
    audio.volume = temporary / 100;
    volumeScale.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 ${audio.volume*100}%, white ${audio.volume*100}%, white 100%)`
    volumeButton.classList.remove('volumeMuted')
    
} else {
    audio.volume = 0;
    temporary = volumeScale.value;
    volumeScale.value = 0;
    volumeScale.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 ${audio.volume*100}%, white ${audio.volume*100}%, white 100%)`
    volumeButton.classList.add('volumeMuted');
   }
}
volumeButton.addEventListener('click', videoMute);


audio.addEventListener("loadeddata", () => {
    durationTime.textContent = ` ${getTimeCodeFromNum(audio.duration)}`;
});

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
}

    
    songProgress.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(songProgress).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);
   
setInterval(() => {
currentTime.textContent = `${getTimeCodeFromNum(audio.currentTime)} `;
}, 1000);


function upDateProgress() {
    let nt
    if (audio.duration) {
        nt =audio.currentTime/audio.duration * 100;
    }else nt = 0;
      if (nt == 100) {
        nt = 0;
        buttonPlayPlaylist.forEach((elem, ind) => {
            buttonPlayPlaylist[ind].classList.remove("pause-playlist");
        });
        playNext()
    };
    songProgress.value = nt;
    songProgress.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 ${songProgress.value}%, white ${songProgress.value}%, white 100%)`;
   
  }

audio.addEventListener('timeupdate', upDateProgress);
    

