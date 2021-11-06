const endingScreen = document.querySelector('.js__ending');





function endThis() {
  endingScreen.classList.add('promo__ending--active');
  setTimeout(()=>{
    endingScreen.classList.remove('promo__ending--active');
  }, 10000);
}

function clearEnding() {
  endingScreen.classList.remove('promo__ending--active');
}





export {
  endThis,
  clearEnding
}