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
    mainContent
}