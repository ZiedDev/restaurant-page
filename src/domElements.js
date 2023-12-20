import './createDom.js';
import { getById } from './templates.js';

const body = document.body;

// Navigation Bar
const navBar = getById('navBar');

const navTitleButton = getById('nav-title-button');
const navMenuButton = getById('nav-menu-button');
const navContactButton = getById('nav-contact-button');

const navTitle = getById('nav-title');
const navMenu = getById('nav-menu');
const navContact = getById('nav-contact');

const navThemeButtonContainer = getById('nav-theme-button-container');
const sunThemeButton = getById('sun-theme-button');
const moonThemeButton = getById('moon-theme-button');

// Main content
const main = getById('main');
const mainContent = getById('main-content');
const feedMeContent = getById('feedMe-content');
const menuContent = getById('menu-content');
const contactContent = getById('contact-content');

// FeedMe content
const aboutRestaurant = getById('about-restaurant');
const topDish = getById('top-dish');
const address = getById('address');
const workingTime = getById('working-time');
const dishes = getById('dishes');
const socialMedia = getById('social-media');
const dishesImage1 = getById('dishes-image-1');
const dishesImage2 = getById('dishes-image-2');
const dishesImage3 = getById('dishes-image-3');

export {
    body,
    navBar,
    navTitleButton,
    navMenuButton,
    navContactButton,
    navTitle,
    navMenu,
    navContact,
    navThemeButtonContainer,
    sunThemeButton,
    moonThemeButton,
    main,
    mainContent,
    aboutRestaurant,
    topDish,
    address,
    workingTime,
    dishes,
    socialMedia,
    dishesImage1,
    dishesImage2,
    dishesImage3,
    feedMeContent,
    menuContent,
    contactContent
}