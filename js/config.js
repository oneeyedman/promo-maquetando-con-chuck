const PROMO = {
  season: 2,
  episode: 10,
  title: 'Checkbox y Radio',
  date: '7 de noviembre',
  date_abbr: '7/11',
  audio: 's02e10.mp3'
}





function getFullEpisodeCode({ season, episode }) {
  return `s${('0' + season).slice(-2)}e${('0' + episode).slice(-2)}`;
}





function initPromoInfo(wrapper) {
  const promoTitle = wrapper.querySelector('.js__init-title');
  const promoDateAbbr = wrapper.querySelector('.js__init-date-abbr');
  const promoDate = wrapper.querySelector('.js__init-date');
  promoTitle.textContent = `${getFullEpisodeCode(PROMO)} - ${PROMO.title}`;
  promoDateAbbr.textContent = PROMO.date_abbr;
  promoDate.textContent = PROMO.date;

}





export {
  initPromoInfo
};