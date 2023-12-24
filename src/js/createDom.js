import { createElement, createInput, createImage, getById } from './templates.js';
import { sunSvg, moonSvg, background, steak, sushi, rice, xLogoSvg, instagramLogoSvg, emailSvg, arrow } from './media.js';
import '../css/style.css';
import '../css/navBar.css';
import '../css/feedMe.css';
import '../css/menu.css';

// Navigation Bar
document.body.appendChild(createElement('nav', 'navBar', 'navBar'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-menu-button'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-title-button'));

getById('navBar').appendChild(createElement('', 'nav-button', 'nav-contact-button'));

getById('nav-title-button').appendChild(createElement('h1', 'nav-title', 'nav-title', 'Feed Me'));
getById('nav-menu-button').appendChild(createElement('h1', 'nav-menu', 'nav-menu', 'Menu'));
getById('nav-contact-button').appendChild(createElement('h1', 'nav-contact', 'nav-contact', 'Contact'));

getById('nav-title-button').classList.add('nav-button-active');

getById('navBar').appendChild(createElement('', 'nav-theme-button-container', 'nav-theme-button-container'));

getById('nav-theme-button-container').innerHTML += sunSvg + moonSvg;
getById('nav-theme-button-container').appendChild(createInput('checkbox', 'theme-button', 'theme-button'));

getById('sun-theme-button').classList.add("hide");
getById('moon-theme-button').classList.add("hide");

// Main content
document.body.appendChild(createElement('main', 'main', 'main'));
getById('main').appendChild(createElement('', 'main-content', 'main-content'));
getById('main-content').appendChild(createImage('', '', background));

getById('main-content').appendChild(createElement('', 'menu-content', 'menu-content'));
getById('main-content').appendChild(createElement('', 'feedMe-content', 'feedMe-content'));
getById('main-content').appendChild(createElement('', 'contact-content', 'contact-content'));

getById('menu-content').classList.add('hide');
getById('contact-content').classList.add('hide');

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

getById('address').appendChild(createElement('h2', '', '', 'Location: 862 Forest Avenue, Elmsford, New York'));

getById('working-time').appendChild(createElement('h2', '', '', '7:00 AM → 10:00 PM'));

getById('dishes').appendChild(createElement('h2', '', '', 'dishes'));
getById('dishes').appendChild(createImage('dishes-image-1', 'dishes-image-1', steak));
getById('dishes').appendChild(createImage('dishes-image-2', 'dishes-image-2', sushi)); getById('dishes').appendChild(createImage('dishes-image-3', 'dishes-image-3', rice));

getById('social-media').appendChild(createElement('', 'social-media-icon-container', 'x-social-media-container'));

getById('x-social-media-container').innerHTML += xLogoSvg;
getById('x-social-media-container').appendChild(createElement('h2', '', '', '@FeedMe'));

getById('social-media').appendChild(createElement('', 'social-media-icon-container', 'instagram-social-media-container'));

getById('instagram-social-media-container').innerHTML += instagramLogoSvg;
getById('instagram-social-media-container').appendChild(createElement('h2', '', '', '@FeedMe'));

getById('social-media').appendChild(createElement('', 'social-media-icon-container', 'email-social-media-container'));

getById('email-social-media-container').innerHTML += emailSvg;
getById('email-social-media-container').appendChild(createElement('h2', '', '', 'FeedMe@FeedMe.com'));

// Menu content
getById('menu-content').appendChild(createElement('', 'menu-slide-left-button', 'menu-slide-left-button'));

getById('menu-content').appendChild(createElement('', 'menu-items', 'menu-items'));


getById('menu-content').appendChild(createElement('', 'menu-slide-right-button', 'menu-slide-right-button'));

getById('menu-slide-left-button').innerHTML += arrow;
getById('menu-slide-right-button').innerHTML += arrow;


getById('menu-items').appendChild(createElement('', 'menu-item', 'menu-item-1'));

getById('menu-items').appendChild(createElement('', 'menu-item', 'menu-item-2'));

getById('menu-items').appendChild(createElement('', 'menu-item', 'menu-item-3'));

// Menu Item 1
getById('menu-item-1').appendChild(createElement('', 'menu-image-container', 'menu-image-1-container'));
getById('menu-image-1-container').appendChild(createImage('', '', steak));
getById('menu-image-1-container').appendChild(createElement('h2', '', '', 'Steak'));
getById('menu-item-1').appendChild(createElement('', 'menu-item-description', 'menu-item-description-1'));

getById('menu-item-description-1').appendChild(createElement('h2', 'menu-description-text', 'menu-description-text-1'));

getById('menu-description-text-1').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Menu Item 2
getById('menu-item-2').appendChild(createElement('', 'menu-image-container', 'menu-image-2-container'));
getById('menu-image-2-container').appendChild(createImage('', '', sushi));
getById('menu-image-2-container').appendChild(createElement('h2', '', '', 'Sushi'));
getById('menu-item-2').appendChild(createElement('', 'menu-item-description', 'menu-item-description-2'));

getById('menu-item-description-2').appendChild(createElement('h2', 'menu-description-text', 'menu-description-text-2'));

getById('menu-description-text-2').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Menu Item 3
getById('menu-item-3').appendChild(createElement('', 'menu-image-container', 'menu-image-3-container'));
getById('menu-image-3-container').appendChild(createImage('', '', rice));
getById('menu-image-3-container').appendChild(createElement('h2', '', '', 'Rice'));
getById('menu-item-3').appendChild(createElement('', 'menu-item-description', 'menu-item-description-3'));

getById('menu-item-description-3').appendChild(createElement('h2', 'menu-description-text', 'menu-description-text-3'));

getById('menu-description-text-3').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Contact menu
getById('contact-content').appendChild(createElement('h2', 'contact-1', 'contact-1', 'contact-1'));
getById('contact-content').appendChild(createElement('h2', 'contact-2', 'contact-2', 'contact-2'));
getById('contact-content').appendChild(createElement('h2', 'contact-3', 'contact-3', 'contact-3'));