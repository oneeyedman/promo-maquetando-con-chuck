import { initPromoInfo, initWaveElement, PROMO} from './config.js';
import { endThis, clearEnding } from './ending.js';

const mainZone = document.querySelector('.js__area');
const play = mainZone.querySelector('.js__media-play');
const pause = mainZone.querySelector('.js__media-pause');
const stop = mainZone.querySelector('.js__media-stop');
const ending = mainZone.querySelector('.js__media-ending');
const audio = mainZone.querySelector('.js__audio');
const waveGraphContainer = mainZone.querySelector('.js__wave-container');
const waveGraph = mainZone.querySelector('.js__wave');
const counter = mainZone.querySelector('.js__counter');



let timer;
let isTimerActive = false;

const wave = new Wave();
let totalSeconds = 0;
const audioDuration = parseInt(audio.duration) - PROMO.ending;
audio.volume = 1;


function setTime() {
  if (totalSeconds === audioDuration) {
    endThis();
  }
  totalSeconds++;
  const seconds = ('0' + totalSeconds % 60).slice(-2);
  const time = `${parseInt(totalSeconds / 60)}:${seconds}`;
  counter.innerHTML = time;
}

function initPromo() {
  initPromoInfo(mainZone);
  initWaveElement(waveGraph);

  wave.fromElement("audio", "wave", {
    type: "flower",
    colors: ['#fff'],
    stroke: 10
  });

  play.addEventListener('click', () => {
    clearEnding();
    audio.play();
    if (totalSeconds === 0) {
      counter.innerHTML = '0:00';
    }
    if (!isTimerActive) {
      console.log('Nuevo Timer');
      timer = setInterval(setTime, 1000);
      isTimerActive = true;
    }
    waveGraphContainer.classList.add('promo__wave--active');
  });

  pause && pause.addEventListener('click', () => {
    clearInterval(timer);
    waveGraphContainer.classList.remove('promo__wave--active');
    audio.pause();
    isTimerActive = false;
  });

  stop.addEventListener('click', () => {
    clearInterval(timer);
    waveGraphContainer.classList.remove('promo__wave--active');
    audio.pause();
    audio.currentTime = 0;
    counter.innerHTML = '-:--';
    isTimerActive = false;
  });

  audio.addEventListener('ended', (event) => {
    clearInterval(timer);
    isTimerActive = false;
    waveGraphContainer.classList.remove('promo__wave--active');
    console.log('Audio parao!');
  });

  ending.addEventListener('click', () => {
    endThis();
  })
  
}






initPromo();

