/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/feedMe.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/feedMe.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.feedMe-content {
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-areas:
        "a a b"
        "c d b"
        "e f b";

    grid-template-rows: 1fr 0.5fr 1fr;
    grid-template-columns: 1fr 0.5fr 1fr;
    gap: 1rem;
}

.about-restaurant {
    grid-area: a;
}

.top-dish {
    grid-area: b;
    cursor: pointer;
}

.address {
    grid-area: c;
}

.working-time {
    grid-area: d;
}

.dishes {
    grid-area: e;
    cursor: pointer;
}

.social-media {
    grid-area: f;
}

.about-restaurant,
.top-dish,
.address,
.working-time,
.dishes,
.social-media {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;
    background-color: rgb(from var(--secondary) r g b / 37%);
    overflow: hidden;
}

.about-restaurant *,
.top-dish *,
.address *,
.working-time *,
.dishes *,
.social-media * {
    color: var(--text-white);
}

.about-restaurant img,
.top-dish img,
.address img,
.working-time img,
.dishes img,
.social-media img {
    position: absolute;
    object-position: 40% 25%;
    transition: width 100ms ease-out, scale 100ms ease-out;
}

.top-dish img:hover {
    scale: 1.025;
}

.dishes-image-1:hover,
.dishes-image-2:hover,
.dishes-image-3:hover {
    width: 105%;
}

.about-restaurant::after,
.top-dish::after,
.address::after,
.working-time::after,
.dishes::after,
.social-media::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
    z-index: 10;

    pointer-events: none;
}

.about-restaurant h2,
.top-dish h2,
.address h2,
.working-time h2,
.dishes h2,
.social-media h2 {
    position: absolute;
    z-index: 11;
    letter-spacing: 1.5pt;
    word-spacing: 1pt;
    user-select: none;
}

.address h2 {
    letter-spacing: 1.5pt;
    word-spacing: 2pt;
}

.about-restaurant h2 {
    font-size: clamp(24pt, 16pt, 12pt);
}

.dishes h2,
.top-dish h2 {
    font-family: 'BiteChalk Normal';
    font-size: clamp(50pt, 24pt, 12pt);
    bottom: 10%;
    left: 10%;
    letter-spacing: 2.5pt;
    word-spacing: 2pt;
}

#dishes-image-1 {
    object-position: 50% 50%;
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

#dishes-image-2 {
    object-position: 0% 65%;
    translate: 100% 0;
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

#dishes-image-3 {
    object-position: 0% 75%;
    translate: 200% 0;
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

/**/
.dishes-image-1-slide-1 {
    transform: translateX(-100%);
}

.dishes-image-2-slide-1 {
    transform: translateX(-100%);
}


.dishes-image-3-slide-1 {
    transform: translateX(-100%);
}

/**/
.dishes-image-1-slide-2 {
    transform: translateX(-200%);
}

.dishes-image-2-slide-2 {
    transform: translateX(-200%);
}

.dishes-image-3-slide-2 {
    transform: translateX(-200%);
}`, "",{"version":3,"sources":["webpack://./src/feedMe.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb;;;eAGW;;IAEX,iCAAiC;IACjC,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;;;IAMI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,wDAAwD;IACxD,gBAAgB;AACpB;;AAEA;;;;;;IAMI,wBAAwB;AAC5B;;AAEA;;;;;;IAMI,kBAAkB;IAClB,wBAAwB;IACxB,sDAAsD;AAC1D;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;;;;;IAMI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,6EAA6E;IAC7E,WAAW;;IAEX,oBAAoB;AACxB;;AAEA;;;;;;IAMI,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;;IAEI,+BAA+B;IAC/B,kCAAkC;IAClC,WAAW;IACX,SAAS;IACT,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,4BAA4B;AAChC;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":[".feedMe-content {\r\n    width: 80%;\r\n    height: 80%;\r\n    display: grid;\r\n    grid-template-areas:\r\n        \"a a b\"\r\n        \"c d b\"\r\n        \"e f b\";\r\n\r\n    grid-template-rows: 1fr 0.5fr 1fr;\r\n    grid-template-columns: 1fr 0.5fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.about-restaurant {\r\n    grid-area: a;\r\n}\r\n\r\n.top-dish {\r\n    grid-area: b;\r\n    cursor: pointer;\r\n}\r\n\r\n.address {\r\n    grid-area: c;\r\n}\r\n\r\n.working-time {\r\n    grid-area: d;\r\n}\r\n\r\n.dishes {\r\n    grid-area: e;\r\n    cursor: pointer;\r\n}\r\n\r\n.social-media {\r\n    grid-area: f;\r\n}\r\n\r\n.about-restaurant,\r\n.top-dish,\r\n.address,\r\n.working-time,\r\n.dishes,\r\n.social-media {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 1rem;\r\n    background-color: rgb(from var(--secondary) r g b / 37%);\r\n    overflow: hidden;\r\n}\r\n\r\n.about-restaurant *,\r\n.top-dish *,\r\n.address *,\r\n.working-time *,\r\n.dishes *,\r\n.social-media * {\r\n    color: var(--text-white);\r\n}\r\n\r\n.about-restaurant img,\r\n.top-dish img,\r\n.address img,\r\n.working-time img,\r\n.dishes img,\r\n.social-media img {\r\n    position: absolute;\r\n    object-position: 40% 25%;\r\n    transition: width 100ms ease-out, scale 100ms ease-out;\r\n}\r\n\r\n.top-dish img:hover {\r\n    scale: 1.025;\r\n}\r\n\r\n.dishes-image-1:hover,\r\n.dishes-image-2:hover,\r\n.dishes-image-3:hover {\r\n    width: 105%;\r\n}\r\n\r\n.about-restaurant::after,\r\n.top-dish::after,\r\n.address::after,\r\n.working-time::after,\r\n.dishes::after,\r\n.social-media::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));\r\n    z-index: 10;\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n.about-restaurant h2,\r\n.top-dish h2,\r\n.address h2,\r\n.working-time h2,\r\n.dishes h2,\r\n.social-media h2 {\r\n    position: absolute;\r\n    z-index: 11;\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n}\r\n\r\n.address h2 {\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n.about-restaurant h2 {\r\n    font-size: clamp(24pt, 16pt, 12pt);\r\n}\r\n\r\n.dishes h2,\r\n.top-dish h2 {\r\n    font-family: 'BiteChalk Normal';\r\n    font-size: clamp(50pt, 24pt, 12pt);\r\n    bottom: 10%;\r\n    left: 10%;\r\n    letter-spacing: 2.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n#dishes-image-1 {\r\n    object-position: 50% 50%;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-2 {\r\n    object-position: 0% 65%;\r\n    translate: 100% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-3 {\r\n    object-position: 0% 75%;\r\n    translate: 200% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.dishes-image-2-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.dishes-image-3-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-2-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-3-slide-2 {\r\n    transform: translateX(-200%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navBar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navBar.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 5rem;
    justify-content: space-around;
    align-items: center;
    background-color: var(--secondary);
}

.nav-button>h1 {
    user-select: none;
    padding: 0;
    letter-spacing: 1.5pt;
    font-size: 20pt;

    transition: transform 100ms ease-in-out;
}

.nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    transition: background-color 100ms ease-in-out;
}

.nav-button:hover {
    cursor: pointer;
    background-color: rgb(from var(--accent) r g b / 30%);
}

.nav-button:hover>h1 {
    transform: scale(115%);
}

.nav-theme-button-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.theme-button {
    margin: 0;
    padding: 0;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.theme-button:hover {
    cursor: pointer;
    background-color: rgb(from var(--accent) r g b / 30%);
}

.theme-button>svg {
    width: 50%;
    height: 50%;
}`, "",{"version":3,"sources":["webpack://./src/navBar.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,0CAA0C;IAC1C,6BAA6B;IAC7B,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,qBAAqB;IACrB,eAAe;;IAEf,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;;IAEZ,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,UAAU;IACV,WAAW;AACf","sourcesContent":["nav {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr) 5rem;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: var(--secondary);\r\n}\r\n\r\n.nav-button>h1 {\r\n    user-select: none;\r\n    padding: 0;\r\n    letter-spacing: 1.5pt;\r\n    font-size: 20pt;\r\n\r\n    transition: transform 100ms ease-in-out;\r\n}\r\n\r\n.nav-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    transition: background-color 100ms ease-in-out;\r\n}\r\n\r\n.nav-button:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.nav-button:hover>h1 {\r\n    transform: scale(115%);\r\n}\r\n\r\n.nav-theme-button-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.theme-button {\r\n    margin: 0;\r\n    padding: 0;\r\n    appearance: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.theme-button:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.theme-button>svg {\r\n    width: 50%;\r\n    height: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BiteChalk/BiteChalk.ttf */ "./src/fonts/BiteChalk/BiteChalk.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BiteChalk/BiteChalkBold.ttf */ "./src/fonts/BiteChalk/BiteChalkBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BiteChalk/BiteChalkNormal.ttf */ "./src/fonts/BiteChalk/BiteChalkNormal.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/BiteChalk/BiteChalkSlim.ttf */ "./src/fonts/BiteChalk/BiteChalkSlim.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --text-white: rgb(241, 227, 218);
    --text-black: rgb(37, 23, 14);
    --background-black: rgb(12, 6, 3);
    --background-white: rgb(252, 246, 243);
    --primary-black: rgb(175, 66, 4);
    --primary-white: rgb(251, 143, 80);
    --secondary-black: rgb(138, 68, 28);
    --secondary-white: rgb(235, 160, 117);
    --accent-black: rgb(238, 117, 47);
    --accent-white: rgb(208, 87, 17);
}

:root[data-theme="light"] {
    --text: rgb(37, 23, 14);
    --background: rgb(252, 246, 243);
    --primary: rgb(251, 143, 80);
    --secondary: rgb(235, 160, 117);
    --accent: rgb(208, 87, 17);
}

:root[data-theme="dark"] {
    --text: rgb(241, 227, 218);
    --background: rgb(12, 6, 3);
    --primary: rgb(175, 66, 4);
    --secondary: rgb(138, 68, 28);
    --accent: rgb(238, 117, 47);
}


@font-face {
    font-family: 'BiteChalk';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'BiteChalk Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: 'BiteChalk Normal';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: 'BiteChalk Slim';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

body {
    margin: 0;
    height: 100vh;
    height: 100dvh;
    background-color: var(--background);
    overflow: hidden;
}

body * {
    font-family: 'BiteChalk Slim', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text);
    margin: 0;
}

.hide {
    display: none;
}

nav {
    height: 5rem;
    position: relative;
    z-index: 10;
}

main {
    height: calc(100dvh - 5rem);
    position: relative;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main-content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    position: relative;
}

.main-content>img {
    position: absolute;
    object-position: 25% 75%;
    z-index: -1;
    filter: brightness(0.5);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,iCAAiC;IACjC,sCAAsC;IACtC,gCAAgC;IAChC,kCAAkC;IAClC,mCAAmC;IACnC,qCAAqC;IACrC,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;IAC5B,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,2BAA2B;AAC/B;;;AAGA;IACI,wBAAwB;IACxB,4CAA2C;AAC/C;;AAEA;IACI,6BAA6B;IAC7B,4CAA+C;AACnD;;AAEA;IACI,+BAA+B;IAC/B,4CAAiD;AACrD;;AAEA;IACI,6BAA6B;IAC7B,4CAA+C;AACnD;;AAEA;IACI,SAAS;IACT,aAAa;IACb,cAAc;IACd,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,qKAAqK;IACrK,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,uBAAuB;AAC3B","sourcesContent":[":root {\r\n    --text-white: rgb(241, 227, 218);\r\n    --text-black: rgb(37, 23, 14);\r\n    --background-black: rgb(12, 6, 3);\r\n    --background-white: rgb(252, 246, 243);\r\n    --primary-black: rgb(175, 66, 4);\r\n    --primary-white: rgb(251, 143, 80);\r\n    --secondary-black: rgb(138, 68, 28);\r\n    --secondary-white: rgb(235, 160, 117);\r\n    --accent-black: rgb(238, 117, 47);\r\n    --accent-white: rgb(208, 87, 17);\r\n}\r\n\r\n:root[data-theme=\"light\"] {\r\n    --text: rgb(37, 23, 14);\r\n    --background: rgb(252, 246, 243);\r\n    --primary: rgb(251, 143, 80);\r\n    --secondary: rgb(235, 160, 117);\r\n    --accent: rgb(208, 87, 17);\r\n}\r\n\r\n:root[data-theme=\"dark\"] {\r\n    --text: rgb(241, 227, 218);\r\n    --background: rgb(12, 6, 3);\r\n    --primary: rgb(175, 66, 4);\r\n    --secondary: rgb(138, 68, 28);\r\n    --accent: rgb(238, 117, 47);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk';\r\n    src: url('./fonts/BiteChalk/BiteChalk.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Bold';\r\n    src: url('./fonts/BiteChalk/BiteChalkBold.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Normal';\r\n    src: url('./fonts/BiteChalk/BiteChalkNormal.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Slim';\r\n    src: url('./fonts/BiteChalk/BiteChalkSlim.ttf');\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    height: 100vh;\r\n    height: 100dvh;\r\n    background-color: var(--background);\r\n    overflow: hidden;\r\n}\r\n\r\nbody * {\r\n    font-family: 'BiteChalk Slim', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    color: var(--text);\r\n    margin: 0;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\nnav {\r\n    height: 5rem;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nmain {\r\n    height: calc(100dvh - 5rem);\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.main-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.main-content>img {\r\n    position: absolute;\r\n    object-position: 25% 75%;\r\n    z-index: -1;\r\n    filter: brightness(0.5);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/feedMe.css":
/*!************************!*\
  !*** ./src/feedMe.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./feedMe.css */ "./node_modules/css-loader/dist/cjs.js!./src/feedMe.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/navBar.css":
/*!************************!*\
  !*** ./src/navBar.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./navBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/navBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createDom.js":
/*!**************************!*\
  !*** ./src/createDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lol: () => (/* binding */ lol)
/* harmony export */ });
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.js */ "./src/media.js");
/* harmony import */ var _slideShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideShow.js */ "./src/slideShow.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navBar.css */ "./src/navBar.css");
/* harmony import */ var _feedMe_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedMe.css */ "./src/feedMe.css");







// Navigation Bar
document.body.appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav', 'navBar', 'navBar'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-title-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-menu-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-contact-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-title', 'nav-title', 'Feed Me'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-menu-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-menu', 'nav-menu', 'Menu'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-contact-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-contact', 'nav-contact', 'Contact'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-theme-button-container', 'nav-theme-button-container'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-theme-button-container').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.sunSvg + _media_js__WEBPACK_IMPORTED_MODULE_1__.moonSvg;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-theme-button-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('checkbox', 'theme-button', 'theme-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button').classList.add("hide");
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button').classList.add("hide");

// Main content
document.body.appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main', 'main'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'main-content', 'main-content'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.background));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'feedMe-content', 'feedMe-content'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-content', 'menu-content'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'contact-content', 'contact-content'));

// FeedMe content
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'about-restaurant', 'about-restaurant'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'top-dish', 'top-dish'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'address', 'address'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'working-time', 'working-time'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'dishes', 'dishes'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'social-media', 'social-media'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('about-restaurant').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'about restaurant'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('top-dish').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.steak));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('top-dish').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Top Dish'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('address').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Location: '));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('working-time').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', '7:00 AM → 10:00 PM'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'dishes'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-1', 'dishes-image-1', _media_js__WEBPACK_IMPORTED_MODULE_1__.steak));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-2', 'dishes-image-2', _media_js__WEBPACK_IMPORTED_MODULE_1__.sushi)); (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-3', 'dishes-image-3', _media_js__WEBPACK_IMPORTED_MODULE_1__.rice));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('social-media').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'social-media'));

// Will move to another script 
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title-button').addEventListener('click', function () {
    alert('FeedMe');
});
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-menu-button').addEventListener('click', function () {
    alert('Menu');
});
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-contact-button').addEventListener('click', function () {
    alert('Contact');
});

function lol() {
    console.log('lol');
}



/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutRestaurant: () => (/* binding */ aboutRestaurant),
/* harmony export */   address: () => (/* binding */ address),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   dishes: () => (/* binding */ dishes),
/* harmony export */   dishesImage1: () => (/* binding */ dishesImage1),
/* harmony export */   dishesImage2: () => (/* binding */ dishesImage2),
/* harmony export */   dishesImage3: () => (/* binding */ dishesImage3),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   moonThemeButton: () => (/* binding */ moonThemeButton),
/* harmony export */   navBar: () => (/* binding */ navBar),
/* harmony export */   navContact: () => (/* binding */ navContact),
/* harmony export */   navContactButton: () => (/* binding */ navContactButton),
/* harmony export */   navMenu: () => (/* binding */ navMenu),
/* harmony export */   navMenuButton: () => (/* binding */ navMenuButton),
/* harmony export */   navThemeButtonContainer: () => (/* binding */ navThemeButtonContainer),
/* harmony export */   navTitle: () => (/* binding */ navTitle),
/* harmony export */   navTitleButton: () => (/* binding */ navTitleButton),
/* harmony export */   socialMedia: () => (/* binding */ socialMedia),
/* harmony export */   sunThemeButton: () => (/* binding */ sunThemeButton),
/* harmony export */   topDish: () => (/* binding */ topDish),
/* harmony export */   workingTime: () => (/* binding */ workingTime)
/* harmony export */ });
/* harmony import */ var _createDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDom.js */ "./src/createDom.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");



const body = document.body;

// Navigation Bar
const navBar = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('navBar');

const navTitleButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-title-button');
const navMenuButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-menu-button');
const navContactButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-contact-button');

const navTitle = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-title');
const navMenu = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-menu');
const navContact = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-contact');

const navThemeButtonContainer = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('nav-theme-button-container');
const sunThemeButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('sun-theme-button');
const moonThemeButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('moon-theme-button');

// Main content
const main = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('main');
const mainContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('main-content');

// FeedMe content
const aboutRestaurant = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('about-restaurant');
const topDish = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('top-dish');
const address = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('address');
const workingTime = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('working-time');
const dishes = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('dishes');
const socialMedia = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('social-media');
const dishesImage1 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('dishes-image-1');
const dishesImage2 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('dishes-image-2');
const dishesImage3 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('dishes-image-3');



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _slideShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideShow.js */ "./src/slideShow.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function runSlideShow() {
    (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_1__.slideShow)();

    setTimeout(runSlideShow, 5000);
}

runSlideShow();

console.log('Hello');

/***/ }),

/***/ "./src/media.js":
/*!**********************!*\
  !*** ./src/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   background: () => (/* binding */ background),
/* harmony export */   moonSvg: () => (/* binding */ moonSvg),
/* harmony export */   rice: () => (/* binding */ rice),
/* harmony export */   steak: () => (/* binding */ steak),
/* harmony export */   sunSvg: () => (/* binding */ sunSvg),
/* harmony export */   sushi: () => (/* binding */ sushi)
/* harmony export */ });
/* harmony import */ var _media_images_Background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/images/Background.jpg */ "./src/media/images/Background.jpg");
/* harmony import */ var _media_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/images/steak.jpg */ "./src/media/images/steak.jpg");
/* harmony import */ var _media_images_Sushi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/images/Sushi.jpg */ "./src/media/images/Sushi.jpg");
/* harmony import */ var _media_images_Rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/images/Rice.jpg */ "./src/media/images/Rice.jpg");





const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="sun-theme-button" id="sun-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>'

const moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="moon-theme-button" id="moon-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"/></svg>'

const background = _media_images_Background_jpg__WEBPACK_IMPORTED_MODULE_0__;

const steak = _media_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__;
const sushi = _media_images_Sushi_jpg__WEBPACK_IMPORTED_MODULE_2__;
const rice = _media_images_Rice_jpg__WEBPACK_IMPORTED_MODULE_3__;



/***/ }),

/***/ "./src/slideShow.js":
/*!**************************!*\
  !*** ./src/slideShow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideShow: () => (/* binding */ slideShow)
/* harmony export */ });
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");


let array = [1, 2, 3];

function slideShow() {
    let ele = array.shift();
    array.push(ele);

    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage1.classList.remove('dishes-image-1-slide-1');
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage1.classList.remove('dishes-image-1-slide-2');

    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage2.classList.remove('dishes-image-2-slide-1');
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage2.classList.remove('dishes-image-2-slide-2');

    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage3.classList.remove('dishes-image-3-slide-1');
    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage3.classList.remove('dishes-image-3-slide-2');

    if (array.toString() == [1, 2, 3]) {

    } else if (array.toString() == [2, 3, 1]) {

        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage1.classList.add('dishes-image-1-slide-1');
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage2.classList.add('dishes-image-2-slide-1');
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage3.classList.add('dishes-image-3-slide-1');
    } else if (array.toString() == [3, 1, 2]) {

        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage1.classList.add('dishes-image-1-slide-2');
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage2.classList.add('dishes-image-2-slide-2');
        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.dishesImage3.classList.add('dishes-image-3-slide-2');
    }
}



/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   getById: () => (/* binding */ getById)
/* harmony export */ });
function createElement(type, className, id, textContent) {
    const element = document.createElement(type || 'div');

    className != "" ? element.classList.add(className) : null;

    id != "" ? element.id = id : null;

    element.textContent = textContent;

    return element;
}

function createInput(type, className, id) {
    const element = createElement('input', className, id);

    element.type = type;

    return element;
}

function createImage(className, id, src) {
    const element = createElement('img', className, id);

    element.src = src;

    return element;
}


function getById(id) {
    return document.getElementById(id);
}




/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");


const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('theme-button').checked = true;
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button').classList.remove("hide");
    } else {
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button').classList.remove("hide");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button').classList.add("hide");
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button').classList.remove("hide");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button').classList.remove("hide");
        (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button').classList.add("hide");
    }
}

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('theme-button').addEventListener("change", switchTheme);

/***/ }),

/***/ "./src/fonts/BiteChalk/BiteChalk.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/BiteChalk/BiteChalk.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66504b1326be5629ec10.ttf";

/***/ }),

/***/ "./src/fonts/BiteChalk/BiteChalkBold.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/BiteChalk/BiteChalkBold.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c408ab66fee2a2f12f59.ttf";

/***/ }),

/***/ "./src/fonts/BiteChalk/BiteChalkNormal.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/BiteChalk/BiteChalkNormal.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dfb148ceb150f5a1f8f.ttf";

/***/ }),

/***/ "./src/fonts/BiteChalk/BiteChalkSlim.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/BiteChalk/BiteChalkSlim.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc5fd6fb5ca2b9e7ade0.ttf";

/***/ }),

/***/ "./src/media/images/Background.jpg":
/*!*****************************************!*\
  !*** ./src/media/images/Background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99425064a0c914a2547.jpg";

/***/ }),

/***/ "./src/media/images/Rice.jpg":
/*!***********************************!*\
  !*** ./src/media/images/Rice.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30eaf3d04f401ed562a2.jpg";

/***/ }),

/***/ "./src/media/images/Sushi.jpg":
/*!************************************!*\
  !*** ./src/media/images/Sushi.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f98dd31459f3e6ef123f.jpg";

/***/ }),

/***/ "./src/media/images/steak.jpg":
/*!************************************!*\
  !*** ./src/media/images/steak.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04fe8f626dfadc39db28.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/createDom.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/theme.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZlZWRNZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdkJhci5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZlZWRNZS5jc3M/NDU5MiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2QmFyLmNzcz9lYmIwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVEb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NsaWRlU2hvdy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZlZWRNZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiYSBhIGJcIlxyXG4gICAgICAgIFwiYyBkIGJcIlxyXG4gICAgICAgIFwiZSBmIGJcIjtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjVmciAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IHtcclxuICAgIGdyaWQtYXJlYTogYTtcclxufVxyXG5cclxuLnRvcC1kaXNoIHtcclxuICAgIGdyaWQtYXJlYTogYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG59XHJcblxyXG4ud29ya2luZy10aW1lIHtcclxuICAgIGdyaWQtYXJlYTogZDtcclxufVxyXG5cclxuLmRpc2hlcyB7XHJcbiAgICBncmlkLWFyZWE6IGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEge1xyXG4gICAgZ3JpZC1hcmVhOiBmO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCxcclxuLnRvcC1kaXNoLFxyXG4uYWRkcmVzcyxcclxuLndvcmtpbmctdGltZSxcclxuLmRpc2hlcyxcclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tc2Vjb25kYXJ5KSByIGcgYiAvIDM3JSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCAqLFxyXG4udG9wLWRpc2ggKixcclxuLmFkZHJlc3MgKixcclxuLndvcmtpbmctdGltZSAqLFxyXG4uZGlzaGVzICosXHJcbi5zb2NpYWwtbWVkaWEgKiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IGltZyxcclxuLnRvcC1kaXNoIGltZyxcclxuLmFkZHJlc3MgaW1nLFxyXG4ud29ya2luZy10aW1lIGltZyxcclxuLmRpc2hlcyBpbWcsXHJcbi5zb2NpYWwtbWVkaWEgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogNDAlIDI1JTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2Utb3V0LCBzY2FsZSAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnRvcC1kaXNoIGltZzpob3ZlciB7XHJcbiAgICBzY2FsZTogMS4wMjU7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMTpob3ZlcixcclxuLmRpc2hlcy1pbWFnZS0yOmhvdmVyLFxyXG4uZGlzaGVzLWltYWdlLTM6aG92ZXIge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50OjphZnRlcixcclxuLnRvcC1kaXNoOjphZnRlcixcclxuLmFkZHJlc3M6OmFmdGVyLFxyXG4ud29ya2luZy10aW1lOjphZnRlcixcclxuLmRpc2hlczo6YWZ0ZXIsXHJcbi5zb2NpYWwtbWVkaWE6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMCwgMCwgMC41KSk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmFib3V0LXJlc3RhdXJhbnQgaDIsXHJcbi50b3AtZGlzaCBoMixcclxuLmFkZHJlc3MgaDIsXHJcbi53b3JraW5nLXRpbWUgaDIsXHJcbi5kaXNoZXMgaDIsXHJcbi5zb2NpYWwtbWVkaWEgaDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDFwdDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYWRkcmVzcyBoMiB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJwdDtcclxufVxyXG5cclxuLmFib3V0LXJlc3RhdXJhbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyNHB0LCAxNnB0LCAxMnB0KTtcclxufVxyXG5cclxuLmRpc2hlcyBoMixcclxuLnRvcC1kaXNoIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHQsIDI0cHQsIDEycHQpO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHQ7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJwdDtcclxufVxyXG5cclxuI2Rpc2hlcy1pbWFnZS0xIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNkaXNoZXMtaW1hZ2UtMiB7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDY1JTtcclxuICAgIHRyYW5zbGF0ZTogMTAwJSAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuI2Rpc2hlcy1pbWFnZS0zIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNzUlO1xyXG4gICAgdHJhbnNsYXRlOiAyMDAlIDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiovXHJcbi5kaXNoZXMtaW1hZ2UtMS1zbGlkZS0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMi1zbGlkZS0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcblxyXG4uZGlzaGVzLWltYWdlLTMtc2xpZGUtMSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4vKiovXHJcbi5kaXNoZXMtaW1hZ2UtMS1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMi1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMy1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mZWVkTWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2I7OztlQUdXOztJQUVYLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7OztJQU1JLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQix3REFBd0Q7SUFDeEQsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7SUFNSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7OztJQU1JLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksV0FBVztBQUNmOztBQUVBOzs7Ozs7SUFNSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCw2RUFBNkU7SUFDN0UsV0FBVzs7SUFFWCxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7OztJQU1JLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiw2REFBNkQ7QUFDakU7O0FBRUEsR0FBRztBQUNIO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSxHQUFHO0FBQ0g7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZlZWRNZS1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiYSBhIGJcXFwiXFxyXFxuICAgICAgICBcXFwiYyBkIGJcXFwiXFxyXFxuICAgICAgICBcXFwiZSBmIGJcXFwiO1xcclxcblxcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogYTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1kaXNoIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya2luZy10aW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgICBncmlkLWFyZWE6IGY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50LFxcclxcbi50b3AtZGlzaCxcXHJcXG4uYWRkcmVzcyxcXHJcXG4ud29ya2luZy10aW1lLFxcclxcbi5kaXNoZXMsXFxyXFxuLnNvY2lhbC1tZWRpYSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXNlY29uZGFyeSkgciBnIGIgLyAzNyUpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCAqLFxcclxcbi50b3AtZGlzaCAqLFxcclxcbi5hZGRyZXNzICosXFxyXFxuLndvcmtpbmctdGltZSAqLFxcclxcbi5kaXNoZXMgKixcXHJcXG4uc29jaWFsLW1lZGlhICoge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50IGltZyxcXHJcXG4udG9wLWRpc2ggaW1nLFxcclxcbi5hZGRyZXNzIGltZyxcXHJcXG4ud29ya2luZy10aW1lIGltZyxcXHJcXG4uZGlzaGVzIGltZyxcXHJcXG4uc29jaWFsLW1lZGlhIGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA0MCUgMjUlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyBlYXNlLW91dCwgc2NhbGUgMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b3AtZGlzaCBpbWc6aG92ZXIge1xcclxcbiAgICBzY2FsZTogMS4wMjU7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMTpob3ZlcixcXHJcXG4uZGlzaGVzLWltYWdlLTI6aG92ZXIsXFxyXFxuLmRpc2hlcy1pbWFnZS0zOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwNSU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50OjphZnRlcixcXHJcXG4udG9wLWRpc2g6OmFmdGVyLFxcclxcbi5hZGRyZXNzOjphZnRlcixcXHJcXG4ud29ya2luZy10aW1lOjphZnRlcixcXHJcXG4uZGlzaGVzOjphZnRlcixcXHJcXG4uc29jaWFsLW1lZGlhOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcblxcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQgaDIsXFxyXFxuLnRvcC1kaXNoIGgyLFxcclxcbi5hZGRyZXNzIGgyLFxcclxcbi53b3JraW5nLXRpbWUgaDIsXFxyXFxuLmRpc2hlcyBoMixcXHJcXG4uc29jaWFsLW1lZGlhIGgyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDFwdDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIGgyIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDJwdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQgaDIge1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHQsIDE2cHQsIDEycHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIGgyLFxcclxcbi50b3AtZGlzaCBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBwdCwgMjRwdCwgMTJwdCk7XFxyXFxuICAgIGJvdHRvbTogMTAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVwdDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAycHQ7XFxyXFxufVxcclxcblxcclxcbiNkaXNoZXMtaW1hZ2UtMSB7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpc2hlcy1pbWFnZS0yIHtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2NSU7XFxyXFxuICAgIHRyYW5zbGF0ZTogMTAwJSAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGlzaGVzLWltYWdlLTMge1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDc1JTtcXHJcXG4gICAgdHJhbnNsYXRlOiAyMDAlIDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qKi9cXHJcXG4uZGlzaGVzLWltYWdlLTEtc2xpZGUtMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMi1zbGlkZS0xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRpc2hlcy1pbWFnZS0zLXNsaWRlLTEge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiovXFxyXFxuLmRpc2hlcy1pbWFnZS0xLXNsaWRlLTIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzLWltYWdlLTItc2xpZGUtMiB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMy1zbGlkZS0yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBuYXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcikgNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uPmgxIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1hY2NlbnQpIHIgZyBiIC8gMzAlKTtcclxufVxyXG5cclxuLm5hdi1idXR0b246aG92ZXI+aDEge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMTUlKTtcclxufVxyXG5cclxuLm5hdi10aGVtZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24+c3ZnIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTs7SUFFZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTs7SUFFWiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcikgNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uPmgxIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1hY2NlbnQpIHIgZyBiIC8gMzAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b246aG92ZXI+aDEge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDExNSUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1idXR0b24+c3ZnIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsa0JvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrTm9ybWFsLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsa1NsaW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLXRleHQtd2hpdGU6IHJnYigyNDEsIDIyNywgMjE4KTtcclxuICAgIC0tdGV4dC1ibGFjazogcmdiKDM3LCAyMywgMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWJsYWNrOiByZ2IoMTIsIDYsIDMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXdoaXRlOiByZ2IoMjUyLCAyNDYsIDI0Myk7XHJcbiAgICAtLXByaW1hcnktYmxhY2s6IHJnYigxNzUsIDY2LCA0KTtcclxuICAgIC0tcHJpbWFyeS13aGl0ZTogcmdiKDI1MSwgMTQzLCA4MCk7XHJcbiAgICAtLXNlY29uZGFyeS1ibGFjazogcmdiKDEzOCwgNjgsIDI4KTtcclxuICAgIC0tc2Vjb25kYXJ5LXdoaXRlOiByZ2IoMjM1LCAxNjAsIDExNyk7XHJcbiAgICAtLWFjY2VudC1ibGFjazogcmdiKDIzOCwgMTE3LCA0Nyk7XHJcbiAgICAtLWFjY2VudC13aGl0ZTogcmdiKDIwOCwgODcsIDE3KTtcclxufVxyXG5cclxuOnJvb3RbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcclxuICAgIC0tdGV4dDogcmdiKDM3LCAyMywgMTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNDYsIDI0Myk7XHJcbiAgICAtLXByaW1hcnk6IHJnYigyNTEsIDE0MywgODApO1xyXG4gICAgLS1zZWNvbmRhcnk6IHJnYigyMzUsIDE2MCwgMTE3KTtcclxuICAgIC0tYWNjZW50OiByZ2IoMjA4LCA4NywgMTcpO1xyXG59XHJcblxyXG46cm9vdFtkYXRhLXRoZW1lPVwiZGFya1wiXSB7XHJcbiAgICAtLXRleHQ6IHJnYigyNDEsIDIyNywgMjE4KTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyLCA2LCAzKTtcclxuICAgIC0tcHJpbWFyeTogcmdiKDE3NSwgNjYsIDQpO1xyXG4gICAgLS1zZWNvbmRhcnk6IHJnYigxMzgsIDY4LCAyOCk7XHJcbiAgICAtLWFjY2VudDogcmdiKDIzOCwgMTE3LCA0Nyk7XHJcbn1cclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIEJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgTm9ybWFsJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIFNsaW0nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwZHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5ib2R5ICoge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgU2xpbScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDVyZW0pO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW4tY29udGVudD5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAyNSUgNzUlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBMkM7QUFDL0M7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNENBQStDO0FBQ25EOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUFpRDtBQUNyRDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUtBQXFLO0lBQ3JLLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS10ZXh0LXdoaXRlOiByZ2IoMjQxLCAyMjcsIDIxOCk7XFxyXFxuICAgIC0tdGV4dC1ibGFjazogcmdiKDM3LCAyMywgMTQpO1xcclxcbiAgICAtLWJhY2tncm91bmQtYmxhY2s6IHJnYigxMiwgNiwgMyk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC13aGl0ZTogcmdiKDI1MiwgMjQ2LCAyNDMpO1xcclxcbiAgICAtLXByaW1hcnktYmxhY2s6IHJnYigxNzUsIDY2LCA0KTtcXHJcXG4gICAgLS1wcmltYXJ5LXdoaXRlOiByZ2IoMjUxLCAxNDMsIDgwKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktYmxhY2s6IHJnYigxMzgsIDY4LCAyOCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LXdoaXRlOiByZ2IoMjM1LCAxNjAsIDExNyk7XFxyXFxuICAgIC0tYWNjZW50LWJsYWNrOiByZ2IoMjM4LCAxMTcsIDQ3KTtcXHJcXG4gICAgLS1hY2NlbnQtd2hpdGU6IHJnYigyMDgsIDg3LCAxNyk7XFxyXFxufVxcclxcblxcclxcbjpyb290W2RhdGEtdGhlbWU9XFxcImxpZ2h0XFxcIl0ge1xcclxcbiAgICAtLXRleHQ6IHJnYigzNywgMjMsIDE0KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNDYsIDI0Myk7XFxyXFxuICAgIC0tcHJpbWFyeTogcmdiKDI1MSwgMTQzLCA4MCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjM1LCAxNjAsIDExNyk7XFxyXFxuICAgIC0tYWNjZW50OiByZ2IoMjA4LCA4NywgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcclxcbiAgICAtLXRleHQ6IHJnYigyNDEsIDIyNywgMjE4KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTIsIDYsIDMpO1xcclxcbiAgICAtLXByaW1hcnk6IHJnYigxNzUsIDY2LCA0KTtcXHJcXG4gICAgLS1zZWNvbmRhcnk6IHJnYigxMzgsIDY4LCAyOCk7XFxyXFxuICAgIC0tYWNjZW50OiByZ2IoMjM4LCAxMTcsIDQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsay50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIEJvbGQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrQm9sZC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGtOb3JtYWwudHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBTbGltJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsa1NsaW0udHRmJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogMTAwZHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSAqIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgU2xpbScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNXJlbSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50PmltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAyNSUgNzUlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mZWVkTWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mZWVkTWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUlucHV0LCBjcmVhdGVJbWFnZSwgZ2V0QnlJZCB9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcclxuaW1wb3J0IHsgc3VuU3ZnLCBtb29uU3ZnLCBiYWNrZ3JvdW5kLCBzdGVhaywgc3VzaGksIHJpY2UgfSBmcm9tICcuL21lZGlhLmpzJztcclxuaW1wb3J0IHsgc2xpZGVTaG93IH0gZnJvbSBcIi4vc2xpZGVTaG93LmpzXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vbmF2QmFyLmNzcyc7XHJcbmltcG9ydCAnLi9mZWVkTWUuY3NzJztcclxuXHJcbi8vIE5hdmlnYXRpb24gQmFyXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnbmF2JywgJ25hdkJhcicsICduYXZCYXInKSk7XHJcblxyXG5nZXRCeUlkKCduYXZCYXInKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbmF2LWJ1dHRvbicsICduYXYtdGl0bGUtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2QmFyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ25hdi1idXR0b24nLCAnbmF2LW1lbnUtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2QmFyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ25hdi1idXR0b24nLCAnbmF2LWNvbnRhY3QtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2LXRpdGxlLWJ1dHRvbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ25hdi10aXRsZScsICduYXYtdGl0bGUnLCAnRmVlZCBNZScpKTtcclxuZ2V0QnlJZCgnbmF2LW1lbnUtYnV0dG9uJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDEnLCAnbmF2LW1lbnUnLCAnbmF2LW1lbnUnLCAnTWVudScpKTtcclxuZ2V0QnlJZCgnbmF2LWNvbnRhY3QtYnV0dG9uJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDEnLCAnbmF2LWNvbnRhY3QnLCAnbmF2LWNvbnRhY3QnLCAnQ29udGFjdCcpKTtcclxuXHJcbmdldEJ5SWQoJ25hdkJhcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicsICduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdi10aGVtZS1idXR0b24tY29udGFpbmVyJykuaW5uZXJIVE1MICs9IHN1blN2ZyArIG1vb25Tdmc7XHJcbmdldEJ5SWQoJ25hdi10aGVtZS1idXR0b24tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ2NoZWNrYm94JywgJ3RoZW1lLWJ1dHRvbicsICd0aGVtZS1idXR0b24nKSk7XHJcblxyXG5nZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbmdldEJ5SWQoJ21vb24tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcblxyXG4vLyBNYWluIGNvbnRlbnRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdtYWluJywgJ21haW4nLCAnbWFpbicpKTtcclxuZ2V0QnlJZCgnbWFpbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtYWluLWNvbnRlbnQnLCAnbWFpbi1jb250ZW50JykpO1xyXG5nZXRCeUlkKCdtYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnJywgJycsIGJhY2tncm91bmQpKTtcclxuXHJcbmdldEJ5SWQoJ21haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdmZWVkTWUtY29udGVudCcsICdmZWVkTWUtY29udGVudCcpKTtcclxuZ2V0QnlJZCgnbWFpbi1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtY29udGVudCcsICdtZW51LWNvbnRlbnQnKSk7XHJcbmdldEJ5SWQoJ21haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdjb250YWN0LWNvbnRlbnQnLCAnY29udGFjdC1jb250ZW50JykpO1xyXG5cclxuLy8gRmVlZE1lIGNvbnRlbnRcclxuZ2V0QnlJZCgnZmVlZE1lLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnYWJvdXQtcmVzdGF1cmFudCcsICdhYm91dC1yZXN0YXVyYW50JykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICd0b3AtZGlzaCcsICd0b3AtZGlzaCcpKTtcclxuZ2V0QnlJZCgnZmVlZE1lLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnYWRkcmVzcycsICdhZGRyZXNzJykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICd3b3JraW5nLXRpbWUnLCAnd29ya2luZy10aW1lJykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdkaXNoZXMnLCAnZGlzaGVzJykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdzb2NpYWwtbWVkaWEnLCAnc29jaWFsLW1lZGlhJykpO1xyXG5cclxuZ2V0QnlJZCgnYWJvdXQtcmVzdGF1cmFudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnYWJvdXQgcmVzdGF1cmFudCcpKTtcclxuXHJcbmdldEJ5SWQoJ3RvcC1kaXNoJykuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UoJycsICcnLCBzdGVhaykpO1xyXG5nZXRCeUlkKCd0b3AtZGlzaCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnVG9wIERpc2gnKSk7XHJcblxyXG5nZXRCeUlkKCdhZGRyZXNzJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdMb2NhdGlvbjogJykpO1xyXG5cclxuZ2V0QnlJZCgnd29ya2luZy10aW1lJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICc3OjAwIEFNIOKGkiAxMDowMCBQTScpKTtcclxuXHJcbmdldEJ5SWQoJ2Rpc2hlcycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnZGlzaGVzJykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTEnLCAnZGlzaGVzLWltYWdlLTEnLCBzdGVhaykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTInLCAnZGlzaGVzLWltYWdlLTInLCBzdXNoaSkpOyBnZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTMnLCAnZGlzaGVzLWltYWdlLTMnLCByaWNlKSk7XHJcblxyXG5nZXRCeUlkKCdzb2NpYWwtbWVkaWEnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsICcnLCAnJywgJ3NvY2lhbC1tZWRpYScpKTtcclxuXHJcbi8vIFdpbGwgbW92ZSB0byBhbm90aGVyIHNjcmlwdCBcclxuZ2V0QnlJZCgnbmF2LXRpdGxlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgYWxlcnQoJ0ZlZWRNZScpO1xyXG59KTtcclxuZ2V0QnlJZCgnbmF2LW1lbnUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnTWVudScpO1xyXG59KTtcclxuZ2V0QnlJZCgnbmF2LWNvbnRhY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbGVydCgnQ29udGFjdCcpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2wnKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9sIH0iLCJpbXBvcnQgeyBsb2wgfSBmcm9tICcuL2NyZWF0ZURvbS5qcyc7XHJcbmltcG9ydCB7IGdldEJ5SWQgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbi8vIE5hdmlnYXRpb24gQmFyXHJcbmNvbnN0IG5hdkJhciA9IGdldEJ5SWQoJ25hdkJhcicpO1xyXG5cclxuY29uc3QgbmF2VGl0bGVCdXR0b24gPSBnZXRCeUlkKCduYXYtdGl0bGUtYnV0dG9uJyk7XHJcbmNvbnN0IG5hdk1lbnVCdXR0b24gPSBnZXRCeUlkKCduYXYtbWVudS1idXR0b24nKTtcclxuY29uc3QgbmF2Q29udGFjdEJ1dHRvbiA9IGdldEJ5SWQoJ25hdi1jb250YWN0LWJ1dHRvbicpO1xyXG5cclxuY29uc3QgbmF2VGl0bGUgPSBnZXRCeUlkKCduYXYtdGl0bGUnKTtcclxuY29uc3QgbmF2TWVudSA9IGdldEJ5SWQoJ25hdi1tZW51Jyk7XHJcbmNvbnN0IG5hdkNvbnRhY3QgPSBnZXRCeUlkKCduYXYtY29udGFjdCcpO1xyXG5cclxuY29uc3QgbmF2VGhlbWVCdXR0b25Db250YWluZXIgPSBnZXRCeUlkKCduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG5jb25zdCBzdW5UaGVtZUJ1dHRvbiA9IGdldEJ5SWQoJ3N1bi10aGVtZS1idXR0b24nKTtcclxuY29uc3QgbW9vblRoZW1lQnV0dG9uID0gZ2V0QnlJZCgnbW9vbi10aGVtZS1idXR0b24nKTtcclxuXHJcbi8vIE1haW4gY29udGVudFxyXG5jb25zdCBtYWluID0gZ2V0QnlJZCgnbWFpbicpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGdldEJ5SWQoJ21haW4tY29udGVudCcpO1xyXG5cclxuLy8gRmVlZE1lIGNvbnRlbnRcclxuY29uc3QgYWJvdXRSZXN0YXVyYW50ID0gZ2V0QnlJZCgnYWJvdXQtcmVzdGF1cmFudCcpO1xyXG5jb25zdCB0b3BEaXNoID0gZ2V0QnlJZCgndG9wLWRpc2gnKTtcclxuY29uc3QgYWRkcmVzcyA9IGdldEJ5SWQoJ2FkZHJlc3MnKTtcclxuY29uc3Qgd29ya2luZ1RpbWUgPSBnZXRCeUlkKCd3b3JraW5nLXRpbWUnKTtcclxuY29uc3QgZGlzaGVzID0gZ2V0QnlJZCgnZGlzaGVzJyk7XHJcbmNvbnN0IHNvY2lhbE1lZGlhID0gZ2V0QnlJZCgnc29jaWFsLW1lZGlhJyk7XHJcbmNvbnN0IGRpc2hlc0ltYWdlMSA9IGdldEJ5SWQoJ2Rpc2hlcy1pbWFnZS0xJyk7XHJcbmNvbnN0IGRpc2hlc0ltYWdlMiA9IGdldEJ5SWQoJ2Rpc2hlcy1pbWFnZS0yJyk7XHJcbmNvbnN0IGRpc2hlc0ltYWdlMyA9IGdldEJ5SWQoJ2Rpc2hlcy1pbWFnZS0zJyk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgYm9keSxcclxuICAgIG5hdkJhcixcclxuICAgIG5hdlRpdGxlQnV0dG9uLFxyXG4gICAgbmF2TWVudUJ1dHRvbixcclxuICAgIG5hdkNvbnRhY3RCdXR0b24sXHJcbiAgICBuYXZUaXRsZSxcclxuICAgIG5hdk1lbnUsXHJcbiAgICBuYXZDb250YWN0LFxyXG4gICAgbmF2VGhlbWVCdXR0b25Db250YWluZXIsXHJcbiAgICBzdW5UaGVtZUJ1dHRvbixcclxuICAgIG1vb25UaGVtZUJ1dHRvbixcclxuICAgIG1haW4sXHJcbiAgICBtYWluQ29udGVudCxcclxuICAgIGFib3V0UmVzdGF1cmFudCxcclxuICAgIHRvcERpc2gsXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgd29ya2luZ1RpbWUsXHJcbiAgICBkaXNoZXMsXHJcbiAgICBzb2NpYWxNZWRpYSxcclxuICAgIGRpc2hlc0ltYWdlMSxcclxuICAgIGRpc2hlc0ltYWdlMixcclxuICAgIGRpc2hlc0ltYWdlM1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZ2V0QnlJZCB9IGZyb20gXCIuL3RlbXBsYXRlcy5qc1wiO1xyXG5pbXBvcnQgeyBzbGlkZVNob3cgfSBmcm9tIFwiLi9zbGlkZVNob3cuanNcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBydW5TbGlkZVNob3coKSB7XHJcbiAgICBzbGlkZVNob3coKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHJ1blNsaWRlU2hvdywgNTAwMCk7XHJcbn1cclxuXHJcbnJ1blNsaWRlU2hvdygpO1xyXG5cclxuY29uc29sZS5sb2coJ0hlbGxvJyk7IiwiaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuL21lZGlhL2ltYWdlcy9CYWNrZ3JvdW5kLmpwZyc7XHJcbmltcG9ydCBzdGVha0ltYWdlIGZyb20gJy4vbWVkaWEvaW1hZ2VzL3N0ZWFrLmpwZyc7XHJcbmltcG9ydCBTdXNoaUltYWdlIGZyb20gJy4vbWVkaWEvaW1hZ2VzL1N1c2hpLmpwZyc7XHJcbmltcG9ydCBSaWNlSW1hZ2UgZnJvbSAnLi9tZWRpYS9pbWFnZXMvUmljZS5qcGcnO1xyXG5cclxuY29uc3Qgc3VuU3ZnID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwic3VuLXRoZW1lLWJ1dHRvblwiIGlkPVwic3VuLXRoZW1lLWJ1dHRvblwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiAxN3EtMi4wNzUgMC0zLjUzNy0xLjQ2M1Q3IDEycTAtMi4wNzUgMS40NjMtMy41MzdUMTIgN3EyLjA3NSAwIDMuNTM4IDEuNDYzVDE3IDEycTAgMi4wNzUtMS40NjMgMy41MzhUMTIgMTdtLTctNEgxdi0yaDR6bTE4IDBoLTR2LTJoNHpNMTEgNVYxaDJ2NHptMCAxOHYtNGgydjR6TTYuNCA3Ljc1TDMuODc1IDUuMzI1TDUuMyAzLjg1bDIuNCAyLjV6bTEyLjMgMTIuNGwtMi40MjUtMi41MjVMMTcuNiAxNi4yNWwyLjUyNSAyLjQyNXpNMTYuMjUgNi40bDIuNDI1LTIuNTI1TDIwLjE1IDUuM2wtMi41IDIuNHpNMy44NSAxOC43bDIuNTI1LTIuNDI1TDcuNzUgMTcuNmwtMi40MjUgMi41MjV6XCIvPjwvc3ZnPidcclxuXHJcbmNvbnN0IG1vb25TdmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJtb29uLXRoZW1lLWJ1dHRvblwiIGlkPVwibW9vbi10aGVtZS1idXR0b25cIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIuMDU4IDIwcS0zLjMzNCAwLTUuNjY3LTIuMzMzUTQuMDU4IDE1LjMzMyA0LjA1OCAxMnEwLTMuMDM4IDEuOTgtNS4yN1E4LjAyIDQuNSAxMC45NDIgNC4wOTdxLjA4MSAwIC4xNTkuMDA2dC4xNTMuMDE3cS0uNTA2LjcwNi0uODAxIDEuNTdxLS4yOTUuODY1LS4yOTUgMS44MTFxMCAyLjY2NyAxLjg2NiA0LjUzM3ExLjg2NyAxLjg2NyA0LjUzNCAxLjg2N3EuOTUyIDAgMS44MTMtLjI5NXEuODYyLS4yOTUgMS41NDgtLjgwMXEuMDEyLjA3NS4wMTguMTUzcS4wMDUuMDc4LjAwNS4xNThxLS4zODQgMi45MjMtMi42MTUgNC45MDRUMTIuMDU3IDIwXCIvPjwvc3ZnPidcclxuXHJcbmNvbnN0IGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kSW1hZ2U7XHJcblxyXG5jb25zdCBzdGVhayA9IHN0ZWFrSW1hZ2U7XHJcbmNvbnN0IHN1c2hpID0gU3VzaGlJbWFnZTtcclxuY29uc3QgcmljZSA9IFJpY2VJbWFnZTtcclxuXHJcbmV4cG9ydCB7IHN1blN2ZywgbW9vblN2ZywgYmFja2dyb3VuZCwgc3RlYWssIHN1c2hpLCByaWNlIH0iLCJpbXBvcnQgeyBkaXNoZXNJbWFnZTEsIGRpc2hlc0ltYWdlMiwgZGlzaGVzSW1hZ2UzIH0gZnJvbSAnLi9kb21FbGVtZW50cy5qcydcclxuXHJcbmxldCBhcnJheSA9IFsxLCAyLCAzXTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlU2hvdygpIHtcclxuICAgIGxldCBlbGUgPSBhcnJheS5zaGlmdCgpO1xyXG4gICAgYXJyYXkucHVzaChlbGUpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMS1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTEuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTEtc2xpZGUtMicpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMi1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTItc2xpZGUtMicpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMy1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTMuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTMtc2xpZGUtMicpO1xyXG5cclxuICAgIGlmIChhcnJheS50b1N0cmluZygpID09IFsxLCAyLCAzXSkge1xyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJyYXkudG9TdHJpbmcoKSA9PSBbMiwgMywgMV0pIHtcclxuXHJcbiAgICAgICAgZGlzaGVzSW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcy1pbWFnZS0xLXNsaWRlLTEnKTtcclxuICAgICAgICBkaXNoZXNJbWFnZTIuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWltYWdlLTItc2xpZGUtMScpO1xyXG4gICAgICAgIGRpc2hlc0ltYWdlMy5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtaW1hZ2UtMy1zbGlkZS0xJyk7XHJcbiAgICB9IGVsc2UgaWYgKGFycmF5LnRvU3RyaW5nKCkgPT0gWzMsIDEsIDJdKSB7XHJcblxyXG4gICAgICAgIGRpc2hlc0ltYWdlMS5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtaW1hZ2UtMS1zbGlkZS0yJyk7XHJcbiAgICAgICAgZGlzaGVzSW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcy1pbWFnZS0yLXNsaWRlLTInKTtcclxuICAgICAgICBkaXNoZXNJbWFnZTMuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWltYWdlLTMtc2xpZGUtMicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzbGlkZVNob3cgfSIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NOYW1lLCBpZCwgdGV4dENvbnRlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUgfHwgJ2RpdicpO1xyXG5cclxuICAgIGNsYXNzTmFtZSAhPSBcIlwiID8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBudWxsO1xyXG5cclxuICAgIGlkICE9IFwiXCIgPyBlbGVtZW50LmlkID0gaWQgOiBudWxsO1xyXG5cclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgY2xhc3NOYW1lLCBpZCk7XHJcblxyXG4gICAgZWxlbWVudC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY2xhc3NOYW1lLCBpZCwgc3JjKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaW1nJywgY2xhc3NOYW1lLCBpZCk7XHJcblxyXG4gICAgZWxlbWVudC5zcmMgPSBzcmM7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBnZXRCeUlkLCBjcmVhdGVJbnB1dCwgY3JlYXRlSW1hZ2UgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW5wdXQsIGdldEJ5SWQgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XHJcblxyXG5jb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA6IFwibGlnaHRcIjtcclxuXHJcbmlmIChjdXJyZW50VGhlbWUpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIGN1cnJlbnRUaGVtZSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgICBnZXRCeUlkKCd0aGVtZS1idXR0b24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBnZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRoZW1lKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGdldEJ5SWQoJ3N1bi10aGVtZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBnZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgZ2V0QnlJZCgnc3VuLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIGdldEJ5SWQoJ21vb24tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdldEJ5SWQoJ3RoZW1lLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc3dpdGNoVGhlbWUpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NyZWF0ZURvbS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RoZW1lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9