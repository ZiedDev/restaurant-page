import { createElement, getById } from "./templates.js";
import { navTitleButton, navMenuButton, navContactButton, feedMeContent, menuContent, contactContent, dishesImage1, dishesImage2, dishesImage3, menuSlideLeftButton, menuSlideRightButton, menuItem1, menuItem2, menuItem3 } from "./domElements.js";
import { slideShow } from "./slideShow.js";
import '../css/style.css';

const dishesArray = [1, 2, 3];

function runSlideShow() {
    slideShow(dishesImage1, dishesImage2, dishesImage3, 'dishes-image', dishesArray, 'left');

    setTimeout(runSlideShow, 5000);
}

runSlideShow();

navTitleButton.addEventListener('click', function () {
    feedMeContent.classList.remove('hide');
    menuContent.classList.add('hide');
    contactContent.classList.add('hide');
});
navMenuButton.addEventListener('click', function () {
    feedMeContent.classList.add('hide');
    menuContent.classList.remove('hide');
    contactContent.classList.add('hide');
});
navContactButton.addEventListener('click', function () {
    feedMeContent.classList.add('hide');
    menuContent.classList.add('hide');
    contactContent.classList.remove('hide');
});

let menuItemsArray = [1, 2, 3];

menuSlideLeftButton.addEventListener('click', function () {
    slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'left');
});

menuSlideRightButton.addEventListener('click', function () {
    slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'right');
});