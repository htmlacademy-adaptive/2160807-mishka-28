let modal = document.querySelector('.modal');
let link = document.querySelector('.featured__link');
let btn = document.querySelector('.modal__button');

link.addEventListener('click', function() {
  modal.style.display = "flex";
})

btn.addEventListener('click', function() {
  modal.style.display = "none";
})
