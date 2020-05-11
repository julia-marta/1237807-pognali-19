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

// открытие и закрытие фильтра по странам в каталоге

let countriesFilter = document.querySelector(".countries-filter");
let filterToggle = document.querySelector(".filter__toggle");
let collapseButton = document.querySelector(".filter__collapse");

if(filterToggle) {
  filterToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    if(countriesFilter.classList.contains("countries-filter--collapsed")) {
      countriesFilter.classList.remove("countries-filter--collapsed");
      countriesFilter.classList.add("countries-filter--expanded");
    } else {
      countriesFilter.classList.add("countries-filter--collapsed");
      countriesFilter.classList.remove("countries-filter--expanded");
    }
  });
}

if (collapseButton) {
  collapseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    countriesFilter.classList.add("countries-filter--collapsed");
    countriesFilter.classList.remove("countries-filter--expanded");
  });
}

// открытие и закрытие секций фильтра попутчиков

let formToggles = document.querySelectorAll(".travelmates-form__drop-toggle");

if (formToggles) {
  for (let formToggle of formToggles) {
    let formSection = formToggle.querySelector(".form-section__expanded");
    formToggle.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (formSection.classList.contains("form-section__expanded--closed")) {
        formSection.classList.remove("form-section__expanded--closed");
        formSection.classList.add("form-section__expanded--opened");
      } else {
        formSection.classList.add("form-section__expanded--closed");
        formSection.classList.remove("form-section__expanded--opened");
      }
    });
  }
}

// открытие и закрытие выпадающего списка стран в форме

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
        dropdown.classList.remove("country-select__dropdown-wrapper--opened");
      }
    }
  });
}

//сортировка по буквам

let letterCells = document.querySelectorAll(".letters__item");

if(letterCells) {
  for (let letterCell of letterCells) {
    let letter = letterCell.querySelector(".letters__link");
    letter.addEventListener("click", function (evt) {
      evt.preventDefault();
      letterCells.forEach(function (item) {
        item.classList.remove("letters__item--current");
      });
      letterCell.classList.add("letters__item--current");
    });
  }
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
