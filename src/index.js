import { createElement, getById } from "./templates.js";
import { navTitleButton, navMenuButton, navContactButton, feedMeContent, menuContent, contactContent } from "./domElements.js";
import { slideShow } from "./slideShow.js";
import './style.css';

function runSlideShow() {
    slideShow();

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