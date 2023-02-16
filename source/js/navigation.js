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
