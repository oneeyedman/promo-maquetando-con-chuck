'use strict';

const area = document.querySelector('.js__area');
const play = area.querySelector('.js__media-play');
const pause = area.querySelector('.js__media-pause');
const audio = area.querySelector('.js__audio');
const waveGraph = area.querySelector('.js__wave');
const counter = area.querySelector('.js__counter');
let timer;
let isTimerActive = false;

const wave = new Wave();
let totalSeconds = 0;

function setTime() {
  totalSeconds++;
  const seconds = ('0' + totalSeconds % 60).slice(-2)
  const time = `${parseInt(totalSeconds / 60)}:${seconds}`;
  counter.innerHTML = time;
}






wave.fromElement("audio", "output", {
  type: "flower",
  colors: ['#fff'],
  stroke: 10
});
 
play.addEventListener( 'click', () => {
  audio.play();
  if (totalSeconds === 0) {
    counter.innerHTML = '0:00';
  }
  if (!isTimerActive) {
    console.log('Nuevo Timer');
    timer = setInterval(setTime, 1000);
    isTimerActive = true;
  }
  waveGraph.classList.add('wave--active');
} );

pause.addEventListener( 'click', () => {
  clearInterval(timer);
  waveGraph.classList.remove('wave--active');
  audio.pause();
  isTimerActive = false;
});

audio.addEventListener('ended', (event) => {
  clearInterval(timer);
  isTimerActive = false;
  waveGraph.classList.remove('wave--active');
  console.log('Audio parao!');
});
