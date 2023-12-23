import { createElement, getById } from "./templates.js";
import { navTitleButton, navMenuButton, navContactButton, feedMeContent, menuContent, contactContent, dishesImage1, dishesImage2, dishesImage3, menuSlideLeftButton, menuSlideRightButton, menuItem1, menuItem2, menuItem3, menuItemDescription1, menuItemDescription2, menuItemDescription3, mainContent } from "./domElements.js";
import { slideShow } from "./slideShow.js";
import '../css/style.css';

const dishesArray = [1, 2, 3];

function runSlideShow() {
    slideShow(dishesImage1, dishesImage2, dishesImage3, 'dishes-image', dishesArray, 'right');

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
    menuItemDescription1.classList.add('hide-item-description');
    menuItemDescription2.classList.add('hide-item-description');
    menuItemDescription3.classList.add('hide-item-description');
    setTimeout(() => {
        slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'left');
        setTimeout(() => {
            menuItemDescription1.classList.remove('hide-item-description'); menuItemDescription2.classList.remove('hide-item-description'); menuItemDescription3.classList.remove('hide-item-description');
        }, 700);
    }, 150);
});

menuSlideRightButton.addEventListener('click', function () {
    menuItemDescription1.classList.add('hide-item-description');
    menuItemDescription2.classList.add('hide-item-description');
    menuItemDescription3.classList.add('hide-item-description');
    setTimeout(() => {
        slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'right');
        setTimeout(() => {
            menuItemDescription1.classList.remove('hide-item-description'); menuItemDescription2.classList.remove('hide-item-description'); menuItemDescription3.classList.remove('hide-item-description');
        }, 700);
    }, 150);
});

document.addEventListener("keydown", (event) => {
    if (event.key == 'ArrowLeft') {
        menuItemDescription1.classList.add('hide-item-description');
        menuItemDescription2.classList.add('hide-item-description');
        menuItemDescription3.classList.add('hide-item-description');
        setTimeout(() => {
            slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'left');
            setTimeout(() => {
                menuItemDescription1.classList.remove('hide-item-description'); menuItemDescription2.classList.remove('hide-item-description'); menuItemDescription3.classList.remove('hide-item-description');
            }, 700);
        }, 150);
    } else if (event.key == 'ArrowRight') {
        menuItemDescription1.classList.add('hide-item-description');
        menuItemDescription2.classList.add('hide-item-description');
        menuItemDescription3.classList.add('hide-item-description');
        setTimeout(() => {
            slideShow(menuItem1, menuItem2, menuItem3, 'menu-item', menuItemsArray, 'right');
            setTimeout(() => {
                menuItemDescription1.classList.remove('hide-item-description'); menuItemDescription2.classList.remove('hide-item-description'); menuItemDescription3.classList.remove('hide-item-description');
            }, 700);
        }, 150);
    }
})