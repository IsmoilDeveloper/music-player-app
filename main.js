music_name = "./music/music-1.mp3";
let play_btn = document.querySelector("#play");
let next_btn = document.querySelector("#next");
let prev_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img");
let isPlaying = false;
let duration = 0;
let currentTime = 0;

let Song = new Audio();
window.onload = playsong

function playsong(){
  Song.src = music_name;

  play_btn.addEventListener('click', () => {
    if(!isPlaying){
      Song.play();
      isPlaying = true;
      duration = Song.duration;
      range.max = duration;
    }else{
      Song.pause();
      isPlaying = false;
    }

    range.addEventListener("change", () => {
      Song.currentTime = range.value;
    })

    Song.addEventListener("timeupdate", () => {
      range.value = Song.currentTime;
    })
  })
}
