// открытие и закрытие меню

let header = document.querySelector('.site-header');
let toggle = document.querySelector('.site-header__toggle');

header.classList.remove('site-header--nojs');

toggle.addEventListener('click', function() {
  if (header.classList.contains('site-header--closed')) {
    header.classList.remove('site-header--closed');
    header.classList.add('site-header--opened');
  } else {
    header.classList.remove('site-header--opened');
    header.classList.add('site-header--closed');
  }
});

//скролл меню

// открытие и закрытие модального окна

let openButton = document.querySelector(".rates__to-business");
let popup = document.querySelector(".business-rates");
let closeButton = popup.querySelector(".business-rates__close");

openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("business-rates--closed");
    popup.classList.add("business-rates--opened");
});

closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("business-rates--closed");
    popup.classList.remove("business-rates--opened");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("business-rates--opened")) {
      evt.preventDefault();
      popup.classList.add("business-rates--closed");
      popup.classList.remove("business-rates--opened");
    }
  }
});

//сортировка по странам
