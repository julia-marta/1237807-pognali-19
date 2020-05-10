// открытие и закрытие меню

let header = document.querySelector(".site-header");
let toggle = document.querySelector(".site-header__toggle");

header.classList.remove("site-header--nojs");

toggle.addEventListener("click", function() {
  if (header.classList.contains("site-header--closed")) {
    header.classList.remove("site-header--closed");
    header.classList.add("site-header--opened");
  } else {
    header.classList.remove("site-header--opened");
    header.classList.add("site-header--closed");
  }
});

//скролл меню

// открытие и закрытие модального окна

let openButton = document.querySelector(".rates__to-business");
let popup = document.querySelector(".business-rates");
let closeButton = document.querySelector(".business-rates__close");

if (openButton) {
  openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("business-rates--closed");
    popup.classList.add("business-rates--opened");
});
}

if (closeButton) {
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("business-rates--closed");
    popup.classList.remove("business-rates--opened");
  });
}

if (popup) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("business-rates--opened")) {
        evt.preventDefault();
        popup.classList.add("business-rates--closed");
        popup.classList.remove("business-rates--opened");
      }
    }
  });
}

// открытие и закрытие выпадающего списка стран

let selectField = document.querySelector("select[name=country3]");
let dropdown = document.querySelector(".country-select__dropdown-wrapper");
let dropdownClose = document.querySelector(".dropdown__close");

if (selectField) {
  selectField.addEventListener("click", function (evt) {
    evt.preventDefault();
    dropdown.classList.remove("country-select__dropdown-wrapper--closed");
    dropdown.classList.add("country-select__dropdown-wrapper--opened");
  });
}

if (dropdownClose) {
  dropdownClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    dropdown.classList.add("country-select__dropdown-wrapper--closed");
    dropdown.classList.remove("country-select__dropdown-wrapper--opened");
  });
}

if (dropdown) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (dropdown.classList.contains("country-select__dropdown-wrapper--opened")) {
        evt.preventDefault();
        dropdown.classList.add("country-select__dropdown-wrapper--closed");
        popup.classList.remove("country-select__dropdown-wrapper--opened");
      }
    }
  });
}

// активная/неактивная кнопка лайков

let likeButtons = document.querySelectorAll(".profile__like-button");

if (likeButtons) {
  for (let likeButton of likeButtons) {
    likeButton.onclick = function (evt) {
      likeButton.classList.toggle("profile__like-button--active");
    };
  }
}
