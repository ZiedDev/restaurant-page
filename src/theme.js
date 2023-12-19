import { createElement, createInput, getById } from './templates.js';

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        getById('theme-button').checked = true;
        getById('moon-theme-button').classList.remove("hide");
    } else {
        getById('sun-theme-button').classList.remove("hide");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        getById('sun-theme-button').classList.add("hide");
        getById('moon-theme-button').classList.remove("hide");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        getById('sun-theme-button').classList.remove("hide");
        getById('moon-theme-button').classList.add("hide");
    }
}

getById('theme-button').addEventListener("change", switchTheme);