import { createElement, createInput, getById } from './templates.js';
import { sunSvg, moonSvg } from './media.js';
import './style.css';
import './navBar.css';

// Navigation Bar
document.body.appendChild(createElement('nav', 'navBar', 'navBar'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-title-button'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-menu-button'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-contact-button'));

getById('nav-title-button').appendChild(createElement('h1', 'nav-title', 'nav-title', 'Feed Me'));
getById('nav-menu-button').appendChild(createElement('h1', 'nav-menu', 'nav-menu', 'Menu'));
getById('nav-contact-button').appendChild(createElement('h1', 'nav-contact', 'nav-contact', 'Contact'));

getById('navBar').appendChild(createElement('', 'nav-theme-button-container', 'nav-theme-button-container'));

getById('nav-theme-button-container').innerHTML += sunSvg + moonSvg;
getById('nav-theme-button-container').appendChild(createInput('checkbox', 'theme-button', 'theme-button'));

getById('sun-theme-button').classList.add("hide");
getById('moon-theme-button').classList.add("hide");

// Main content
document.body.appendChild(createElement('main', 'main', 'main'));

getById('main').appendChild(createElement('', 'main-content', 'main-content'));