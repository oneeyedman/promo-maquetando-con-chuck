const chunks = [];
const playerContainer = document.querySelector('.js__player-container');
const player = playerContainer.querySelector('.js__player');

async function startRecording() {
  
  function showPlayer() {

    playerContainer.classList.add('promo__player-container--visible');
  }

  const stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      mediaSource: 'screen',
      frameRate: { ideal: 60, max: 60 },
    }
  });

  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm\;codecs=h264'});

  recorder.onstart = () => {
    //document.querySelector('.js__media-play').click();
    console.log('Grabando...')
  }

  recorder.ondataavailable = e => chunks.push(e.data);

  recorder.onstop = e => {
    showPlayer();
    const completeBlob = new Blob(chunks, {
      type: 'application/mp4'
    });
    player.src = URL.createObjectURL(completeBlob);
  }

  recorder.start();
}

















export {
  startRecording
};