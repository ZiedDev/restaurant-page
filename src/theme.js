import { navThemeButton, sunThemeButton, moonThemeButton } from "./createDom.js";

console.log(navThemeButton, sunThemeButton, moonThemeButton);

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        navThemeButton.checked = true;
        moonThemeButton.classList.remove("hide");
    } else {
        sunThemeButton.classList.remove("hide");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        sunThemeButton.classList.add("hide");
        moonThemeButton.classList.remove("hide");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        sunThemeButton.classList.remove("hide");
        moonThemeButton.classList.add("hide");
    }
}

navThemeButton.addEventListener("change", switchTheme);