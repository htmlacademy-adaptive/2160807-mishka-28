let navMain = document.querySelector('.main-header__nav-wrapper');
let navToggle = document.querySelector('.main-header__nav-toggle');

navMain.classList.remove('main-header__nav-wrapper--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav-wrapper--closed')) {
    navMain.classList.remove('main-header__nav-wrapper--closed');
    navMain.classList.add('main-header__nav-wrapper--opened');
  } else {
    navMain.classList.add('main-header__nav-wrapper--closed');
    navMain.classList.remove('main-header__nav-wrapper--opened');
  }
  });
