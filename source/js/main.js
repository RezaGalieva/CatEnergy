// Открывание и закрывание навигации сайта
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('page-header-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('page-header-toggle--opened');
  }
});

// Показ изображения до и после
const indexExample = document.querySelector('.example-wrapper');
const buttonBefore = indexExample.querySelector('.slider-button--before');
const buttonAfter = indexExample.querySelector('.slider-button--after');
const controlSlider = indexExample.querySelector('.control-slider');
const catWrapperSlim = indexExample.querySelector('.cat-slim');
const catWrapperFat = indexExample.querySelector('.cat-fat');
const catFat = indexExample.querySelector('.cat-example--cat-fat');
const catSlim = indexExample.querySelector('.cat-example--cat-slim');

buttonBefore.addEventListener('click', () => {
  catWrapperFat.classList.add('cat-example--cat-fat');
  catWrapperSlim.classList.remove('cat-example--cat-slim');
  controlSlider.style.marginLeft = `6px`;
});
buttonAfter.addEventListener('click', () => {
  catWrapperSlim.classList.add('cat-example--cat-slim');
  catWrapperFat.classList.remove('cat-example--cat-fat');
  controlSlider.style.marginLeft = `54px`;
});
