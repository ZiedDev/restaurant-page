import { createElement, getById } from "./templates.js";
import { slideShow } from "./slideShow.js";
import './style.css';

function runSlideShow() {
    slideShow();

    setTimeout(runSlideShow, 5000);
}

runSlideShow();

console.log('Hello');