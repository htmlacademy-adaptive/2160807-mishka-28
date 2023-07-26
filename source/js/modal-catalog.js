let modal = document.querySelector('.modal');
let linkCatalog = document.querySelector('.catalog__cart');
let btn = document.querySelector('.modal__button');

linkCatalog.addEventListener('click', function() {
  modal.style.display = "flex";
})

btn.addEventListener('click', function() {
  modal.style.display = "none";
})
