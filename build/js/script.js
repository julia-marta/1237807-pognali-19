// замена цвета лого в хедере
const logoImage = document.querySelector(".site-header__logo picture").children;

let changeLogoColor = function(currentColor, newColor) {
    const regExp = new RegExp(currentColor, "g");
    for (let i = 0; i < logoImage.length; i++) {
        if (logoImage[i].hasAttribute("srcset")) {
            logoImage[i].srcset = logoImage[i].srcset.replace(regExp, newColor);
        }
        if (logoImage[i].hasAttribute("src")) {
            logoImage[i].src = logoImage[i].src.replace(regExp, newColor);
        }
    }
};

// открытие и закрытие меню

let header = document.querySelector(".site-header");
let toggle = document.querySelector(".site-header__toggle");

header.classList.remove("site-header--nojs");

if (header.classList.contains("site-header--closed")) {
    changeLogoColor("blue", "white");
}

toggle.addEventListener("click", function(evt) {

    if (header.classList.contains("site-header--closed")) {
        header.classList.remove("site-header--closed");
        header.classList.add("site-header--opened");
        changeLogoColor("white", "blue");
    } else {
        header.classList.remove("site-header--opened");
        header.classList.add("site-header--closed");
        changeLogoColor("blue", "white");
    }
});

//скролл меню

window.onscroll = function() {
    if (window.pageYOffset > 50) {
        header.classList.add("site-header--scrolled");
        changeLogoColor("white", "blue");
    } else {
        header.classList.remove("site-header--scrolled");
        changeLogoColor("blue", "white");
    }
}

// открытие и закрытие модального окна

let openButton = document.querySelector(".rates__to-business");
let popup = document.querySelector(".business-rates");
let closeButton = document.querySelector(".business-rates__close");

if (openButton) {
    openButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("business-rates--closed");
        popup.classList.add("business-rates--opened");
    });
}

if (closeButton) {
    closeButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("business-rates--closed");
        popup.classList.remove("business-rates--opened");
    });
}

if (popup) {
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("business-rates--opened")) {
                evt.preventDefault();
                popup.classList.add("business-rates--closed");
                popup.classList.remove("business-rates--opened");
            }
        }
    });
}

// переключение шагов в форме

let step = document.querySelectorAll(".plan-add__field");
let marker = document.querySelectorAll(".step-markers__item--header");

if (step) {
    for (let i = 0; i < step.length; i++) {
        step[i].classList.remove("plan-add__field--nojs");
        let nextButton = step[i].querySelector(".plan-add__next-step");
        let previousButton = step[i].querySelector(".plan-add__previous-step");

        if (nextButton) {
            nextButton.addEventListener("click", function(evt) {
                evt.preventDefault();
                step[i].classList.add("plan-add__field--hidden");
                step[i + 1].classList.remove("plan-add__field--hidden");
                marker[i].classList.remove("step-markers__item--active");
                marker[i + 1].classList.add("step-markers__item--active");
            });
        }
        if (previousButton) {
            previousButton.addEventListener("click", function(evt) {
                evt.preventDefault();
                step[i].classList.add("plan-add__field--hidden");
                step[i - 1].classList.remove("plan-add__field--hidden");
                marker[i].classList.remove("step-markers__item--active");
                marker[i - 1].classList.add("step-markers__item--active");
            });
        }
    }
}

// открытие и закрытие фильтра по странам в каталоге

let countriesFilter = document.querySelector(".countries-filter");
let filterToggle = document.querySelector(".filter__toggle");
let collapseButton = document.querySelector(".filter__collapse");

if (filterToggle) {
    filterToggle.addEventListener("click", function(evt) {
        evt.preventDefault();
        if (countriesFilter.classList.contains("countries-filter--collapsed")) {
            countriesFilter.classList.remove("countries-filter--collapsed");
            countriesFilter.classList.add("countries-filter--expanded");
        } else {
            countriesFilter.classList.add("countries-filter--collapsed");
            countriesFilter.classList.remove("countries-filter--expanded");
        }
    });
}

if (collapseButton) {
    collapseButton.addEventListener("click", function(evt) {
        evt.preventDefault();
        countriesFilter.classList.add("countries-filter--collapsed");
        countriesFilter.classList.remove("countries-filter--expanded");
    });
}

// открытие и закрытие секций фильтра попутчиков

let formSections = document.querySelectorAll(".form-section");

if (formSections) {
    for (let formSection of formSections) {
        let formToggle = formSection.querySelector(".form-section__title");
        let formExpanded = formSection.querySelector(".form-section__expanded");
        formToggle.addEventListener("click", function(evt) {
            evt.preventDefault();
            if (formSection.classList.contains("form-section--closed")) {
                formSection.classList.remove("form-section--closed");
                formSection.classList.add("form-section--opened");
            } else {
                formSection.classList.add("form-section--closed");
                formSection.classList.remove("form-section--opened");
            }
        });
    }
}

// открытие и закрытие выпадающего списка стран в форме

let selectField = document.querySelector("select[name=country3]");
let dropdown = document.querySelector(".country-select__dropdown-wrapper");
let dropdownClose = document.querySelector(".dropdown__close");

if (selectField) {
    selectField.addEventListener("click", function(evt) {
        evt.preventDefault();
        dropdown.classList.remove("country-select__dropdown-wrapper--closed");
        dropdown.classList.add("country-select__dropdown-wrapper--opened");
    });
}

if (dropdownClose) {
    dropdownClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        dropdown.classList.add("country-select__dropdown-wrapper--closed");
        dropdown.classList.remove("country-select__dropdown-wrapper--opened");
    });
}

if (dropdown) {
    window.addEventListener("keydown", function(evt) {
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

if (letterCells) {
    for (let letterCell of letterCells) {
        let letter = letterCell.querySelector(".letters__link");
        letter.addEventListener("click", function(evt) {
            evt.preventDefault();
            letterCells.forEach(function(item) {
                item.classList.remove("letters__item--current");
            });
            letterCell.classList.add("letters__item--current");
        });
    }
}

//фильтрация по континентам

let regionLinks = document.querySelectorAll(".regions__link");
let countryItems = document.querySelectorAll(".country-selector__item");

if (regionLinks) {
    for (let regionLink of regionLinks) {
        regionLink.addEventListener("click", function(evt) {
            evt.preventDefault();
            regionLinks.forEach(function(item) {
                item.classList.remove("regions__link--current");
            });
            regionLink.classList.add("regions__link--current");
            for (let countryItem of countryItems) {
                if (countryItem.dataset.category !== regionLink.dataset.value) {
                    countryItem.classList.add("country-selector--hidden");
                } else {
                    countryItem.classList.remove("country-selector--hidden");
                }
            }
        });
    }
}

// активная/неактивная кнопка лайков

let likeButtons = document.querySelectorAll(".profile__like-button");

if (likeButtons) {
    for (let likeButton of likeButtons) {
        likeButton.onclick = function(evt) {
            likeButton.classList.toggle("profile__like-button--active");
        };
    }
}


//изменения чисел в инпутах

let travelmatesField = document.querySelector(".add-dates__field--travelmates");
let durationField = document.querySelector(".add-dates__field--duration");

let changeNumber = function(fieldName) {
    let buttonPlus = fieldName.querySelector(".add-dates__button--plus");
    let buttonMinus = fieldName.querySelector(".add-dates__button--minus");
    let inputNumber = fieldName.querySelector("input");

    buttonPlus.onclick = function(evt) {
        inputNumber.value++;
    }

    buttonMinus.onclick = function(evt) {
        inputNumber.value--;
    }
};

if (travelmatesField) {
    changeNumber(travelmatesField);
}

if (durationField) {
    changeNumber(durationField);
}
