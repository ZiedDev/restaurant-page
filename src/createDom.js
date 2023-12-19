import { createElement, createInput, createImage, getById } from './templates.js';
import { sunSvg, moonSvg, background, steak, sushi, rice } from './media.js';
import { slideShow } from "./slideShow.js";
import './style.css';
import './navBar.css';
import './feedMe.css';

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
getById('main-content').appendChild(createImage('', '', background));

getById('main-content').appendChild(createElement('', 'feedMe-content', 'feedMe-content'));
getById('main-content').appendChild(createElement('', 'menu-content', 'menu-content'));
getById('main-content').appendChild(createElement('', 'contact-content', 'contact-content'));

// FeedMe content
getById('feedMe-content').appendChild(createElement('', 'about-restaurant', 'about-restaurant'));
getById('feedMe-content').appendChild(createElement('', 'top-dish', 'top-dish'));
getById('feedMe-content').appendChild(createElement('', 'address', 'address'));
getById('feedMe-content').appendChild(createElement('', 'working-time', 'working-time'));
getById('feedMe-content').appendChild(createElement('', 'dishes', 'dishes'));
getById('feedMe-content').appendChild(createElement('', 'social-media', 'social-media'));

getById('about-restaurant').appendChild(createElement('h2', '', '', 'about restaurant'));

getById('top-dish').appendChild(createImage('', '', steak));
getById('top-dish').appendChild(createElement('h2', '', '', 'Top Dish'));

getById('address').appendChild(createElement('h2', '', '', 'Location: '));

getById('working-time').appendChild(createElement('h2', '', '', '7:00 AM → 10:00 PM'));

getById('dishes').appendChild(createElement('h2', '', '', 'dishes'));
getById('dishes').appendChild(createImage('dishes-image-1', 'dishes-image-1', steak));
getById('dishes').appendChild(createImage('dishes-image-2', 'dishes-image-2', sushi)); getById('dishes').appendChild(createImage('dishes-image-3', 'dishes-image-3', rice));

getById('social-media').appendChild(createElement('h2', '', '', 'social-media'));

// Will move to another script 
getById('nav-title-button').addEventListener('click', function () {
    alert('FeedMe');
});
getById('nav-menu-button').addEventListener('click', function () {
    alert('Menu');
});
getById('nav-contact-button').addEventListener('click', function () {
    alert('Contact');
});

function lol() {
    console.log('lol');
}

export { lol }