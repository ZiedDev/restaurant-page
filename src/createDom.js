import { createElement, createInput, getById } from './templates.js';
import { sunSvg, moonSvg } from './svgs.js';
import './style.css';

const body = document.body;

body.appendChild(createElement('nav', 'navBar', 'navBar'));
const navBar = getById('navBar');

navBar.appendChild(createElement('', 'nav-button', 'nav-title-button'));
const navTitleButton = getById('nav-title-button');

navBar.appendChild(createElement('', 'nav-button', 'nav-menu-button'));
const navMenuButton = getById('nav-menu-button');

navBar.appendChild(createElement('', 'nav-button', 'nav-contact-button'));
const navContactButton = getById('nav-contact-button');

navTitleButton.appendChild(createElement('h1', 'nav-title', 'nav-title', 'Feed Me'));
navMenuButton.appendChild(createElement('h1', 'nav-menu', 'nav-menu', 'Menu'));
navContactButton.appendChild(createElement('h1', 'nav-contact', 'nav-contact', 'Contact'));

navBar.appendChild(createElement('', 'nav-theme-button-container', 'nav-theme-button-container'));
const navThemeButtonContainer = getById('nav-theme-button-container');

navThemeButtonContainer.appendChild(createInput('checkbox', 'theme-button', 'theme-button'));
const navThemeButton = getById('theme-button');

navThemeButtonContainer.innerHTML += sunSvg + moonSvg;

const sunThemeButton = getById('sun-theme-button');
const moonThemeButton = getById('moon-theme-button');
sunThemeButton.classList.add("hide");
moonThemeButton.classList.add("hide");

export { body, navBar, navTitleButton, navMenuButton, navContactButton, navThemeButton, sunThemeButton, moonThemeButton }