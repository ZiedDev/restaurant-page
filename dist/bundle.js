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

.about-restaurant,
.top-dish,
.address,
.working-time,
.dishes {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;
    background-color: rgb(from var(--secondary) r g b / 37%);
    overflow: hidden;
}

.social-media {
    overflow: hidden;
    grid-area: f;

    position: relative;
    border-radius: 1rem;
    background-color: rgb(from var(--secondary) r g b / 37%);

    display: grid;
    align-items: center;
    grid-template-rows: repeat(3, 1fr);
}

.social-media-icon-container {
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    gap: 0.75rem;
}


.social-media-icon-container>h2 {
    transition: transform 100ms ease-in-out;
}

.social-media-icon-container:hover {
    cursor: pointer;
    background-color: rgb(from var(--accent) r g b / 30%);
}

.social-media-icon-container:hover>h2 {
    transform: scale(107%);
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
.dishes img {
    position: absolute;
    object-position: 40% 25%;
    transition: width 100ms ease-out, scale 100ms ease-out;
}

.top-dish:hover img {
    scale: 1.025;
}

.dishes:hover .dishes-image-1,
.dishes:hover .dishes-image-2,
.dishes:hover .dishes-image-3 {
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
.dishes h2 {
    position: absolute;
    z-index: 11;
    letter-spacing: 1.5pt;
    word-spacing: 1pt;
    user-select: none;
}

.social-media h2,
.social-media svg {
    z-index: 11;
    letter-spacing: 2pt;
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
}

@media only screen and (max-width:768px) {
    .feedMe-content {
        padding: 0rem 0 5rem 0;
        grid-template-areas:
            "b"
            "a"
            "c"
            "d"
            "e"
            "f";

        grid-template-columns: 1fr;
        grid-template-rows: 15rem repeat(5, 7rem);
    }
}`, "",{"version":3,"sources":["webpack://./src/feedMe.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb;;;eAGW;;IAEX,iCAAiC;IACjC,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;;;;;IAKI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,wDAAwD;IACxD,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;;IAEZ,kBAAkB;IAClB,mBAAmB;IACnB,wDAAwD;;IAExD,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,wBAAwB;AAC5B;;AAEA;;;;;IAKI,kBAAkB;IAClB,wBAAwB;IACxB,sDAAsD;AAC1D;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;;;;;IAMI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,6EAA6E;IAC7E,WAAW;;IAEX,oBAAoB;AACxB;;AAEA;;;;;IAKI,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;;IAEI,+BAA+B;IAC/B,kCAAkC;IAClC,WAAW;IACX,SAAS;IACT,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI;QACI,sBAAsB;QACtB;;;;;;eAMO;;QAEP,0BAA0B;QAC1B,yCAAyC;IAC7C;AACJ","sourcesContent":[".feedMe-content {\r\n    width: 80%;\r\n    height: 80%;\r\n    display: grid;\r\n    grid-template-areas:\r\n        \"a a b\"\r\n        \"c d b\"\r\n        \"e f b\";\r\n\r\n    grid-template-rows: 1fr 0.5fr 1fr;\r\n    grid-template-columns: 1fr 0.5fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.about-restaurant {\r\n    grid-area: a;\r\n}\r\n\r\n.top-dish {\r\n    grid-area: b;\r\n    cursor: pointer;\r\n}\r\n\r\n.address {\r\n    grid-area: c;\r\n}\r\n\r\n.working-time {\r\n    grid-area: d;\r\n}\r\n\r\n.dishes {\r\n    grid-area: e;\r\n    cursor: pointer;\r\n}\r\n\r\n.about-restaurant,\r\n.top-dish,\r\n.address,\r\n.working-time,\r\n.dishes {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 1rem;\r\n    background-color: rgb(from var(--secondary) r g b / 37%);\r\n    overflow: hidden;\r\n}\r\n\r\n.social-media {\r\n    overflow: hidden;\r\n    grid-area: f;\r\n\r\n    position: relative;\r\n    border-radius: 1rem;\r\n    background-color: rgb(from var(--secondary) r g b / 37%);\r\n\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n\r\n.social-media-icon-container {\r\n    align-items: center;\r\n    height: 100%;\r\n    padding: 0 1rem;\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\r\n\r\n\r\n.social-media-icon-container>h2 {\r\n    transition: transform 100ms ease-in-out;\r\n}\r\n\r\n.social-media-icon-container:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.social-media-icon-container:hover>h2 {\r\n    transform: scale(107%);\r\n}\r\n\r\n.about-restaurant *,\r\n.top-dish *,\r\n.address *,\r\n.working-time *,\r\n.dishes *,\r\n.social-media * {\r\n    color: var(--text-white);\r\n}\r\n\r\n.about-restaurant img,\r\n.top-dish img,\r\n.address img,\r\n.working-time img,\r\n.dishes img {\r\n    position: absolute;\r\n    object-position: 40% 25%;\r\n    transition: width 100ms ease-out, scale 100ms ease-out;\r\n}\r\n\r\n.top-dish:hover img {\r\n    scale: 1.025;\r\n}\r\n\r\n.dishes:hover .dishes-image-1,\r\n.dishes:hover .dishes-image-2,\r\n.dishes:hover .dishes-image-3 {\r\n    width: 105%;\r\n}\r\n\r\n.about-restaurant::after,\r\n.top-dish::after,\r\n.address::after,\r\n.working-time::after,\r\n.dishes::after,\r\n.social-media::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));\r\n    z-index: 10;\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n.about-restaurant h2,\r\n.top-dish h2,\r\n.address h2,\r\n.working-time h2,\r\n.dishes h2 {\r\n    position: absolute;\r\n    z-index: 11;\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n}\r\n\r\n.social-media h2,\r\n.social-media svg {\r\n    z-index: 11;\r\n    letter-spacing: 2pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n}\r\n\r\n.address h2 {\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n.about-restaurant h2 {\r\n    font-size: clamp(24pt, 16pt, 12pt);\r\n}\r\n\r\n.dishes h2,\r\n.top-dish h2 {\r\n    font-family: 'BiteChalk Normal';\r\n    font-size: clamp(50pt, 24pt, 12pt);\r\n    bottom: 10%;\r\n    left: 10%;\r\n    letter-spacing: 2.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n#dishes-image-1 {\r\n    object-position: 50% 50%;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-2 {\r\n    object-position: 0% 65%;\r\n    translate: 100% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-3 {\r\n    object-position: 0% 75%;\r\n    translate: 200% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.dishes-image-2-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.dishes-image-3-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-2-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-3-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n@media only screen and (max-width:768px) {\r\n    .feedMe-content {\r\n        padding: 0rem 0 5rem 0;\r\n        grid-template-areas:\r\n            \"b\"\r\n            \"a\"\r\n            \"c\"\r\n            \"d\"\r\n            \"e\"\r\n            \"f\";\r\n\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 15rem repeat(5, 7rem);\r\n    }\r\n}"],"sourceRoot":""}]);
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
    display: none !important;
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
    overflow-y: auto;
}

.main-content>img {
    position: fixed;
    object-position: 25% 75%;
    z-index: -1;
    filter: brightness(0.5);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,iCAAiC;IACjC,sCAAsC;IACtC,gCAAgC;IAChC,kCAAkC;IAClC,mCAAmC;IACnC,qCAAqC;IACrC,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;IAC5B,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,2BAA2B;AAC/B;;;AAGA;IACI,wBAAwB;IACxB,4CAA2C;AAC/C;;AAEA;IACI,6BAA6B;IAC7B,4CAA+C;AACnD;;AAEA;IACI,+BAA+B;IAC/B,4CAAiD;AACrD;;AAEA;IACI,6BAA6B;IAC7B,4CAA+C;AACnD;;AAEA;IACI,SAAS;IACT,aAAa;IACb,cAAc;IACd,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,qKAAqK;IACrK,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,uBAAuB;AAC3B","sourcesContent":[":root {\r\n    --text-white: rgb(241, 227, 218);\r\n    --text-black: rgb(37, 23, 14);\r\n    --background-black: rgb(12, 6, 3);\r\n    --background-white: rgb(252, 246, 243);\r\n    --primary-black: rgb(175, 66, 4);\r\n    --primary-white: rgb(251, 143, 80);\r\n    --secondary-black: rgb(138, 68, 28);\r\n    --secondary-white: rgb(235, 160, 117);\r\n    --accent-black: rgb(238, 117, 47);\r\n    --accent-white: rgb(208, 87, 17);\r\n}\r\n\r\n:root[data-theme=\"light\"] {\r\n    --text: rgb(37, 23, 14);\r\n    --background: rgb(252, 246, 243);\r\n    --primary: rgb(251, 143, 80);\r\n    --secondary: rgb(235, 160, 117);\r\n    --accent: rgb(208, 87, 17);\r\n}\r\n\r\n:root[data-theme=\"dark\"] {\r\n    --text: rgb(241, 227, 218);\r\n    --background: rgb(12, 6, 3);\r\n    --primary: rgb(175, 66, 4);\r\n    --secondary: rgb(138, 68, 28);\r\n    --accent: rgb(238, 117, 47);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk';\r\n    src: url('./fonts/BiteChalk/BiteChalk.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Bold';\r\n    src: url('./fonts/BiteChalk/BiteChalkBold.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Normal';\r\n    src: url('./fonts/BiteChalk/BiteChalkNormal.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Slim';\r\n    src: url('./fonts/BiteChalk/BiteChalkSlim.ttf');\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    height: 100vh;\r\n    height: 100dvh;\r\n    background-color: var(--background);\r\n    overflow: hidden;\r\n}\r\n\r\nbody * {\r\n    font-family: 'BiteChalk Slim', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    color: var(--text);\r\n    margin: 0;\r\n}\r\n\r\n.hide {\r\n    display: none !important;\r\n}\r\n\r\nnav {\r\n    height: 5rem;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nmain {\r\n    height: calc(100dvh - 5rem);\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.main-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    position: relative;\r\n    overflow-y: auto;\r\n}\r\n\r\n.main-content>img {\r\n    position: fixed;\r\n    object-position: 25% 75%;\r\n    z-index: -1;\r\n    filter: brightness(0.5);\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.js */ "./src/media.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navBar.css */ "./src/navBar.css");
/* harmony import */ var _feedMe_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedMe.css */ "./src/feedMe.css");






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
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-content').classList.add('hide');
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('contact-content').classList.add('hide');

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

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('address').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Location: 862 Forest Avenue, Elmsford, New York'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('working-time').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', '7:00 AM → 10:00 PM'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'dishes'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-1', 'dishes-image-1', _media_js__WEBPACK_IMPORTED_MODULE_1__.steak));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-2', 'dishes-image-2', _media_js__WEBPACK_IMPORTED_MODULE_1__.sushi)); (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('dishes-image-3', 'dishes-image-3', _media_js__WEBPACK_IMPORTED_MODULE_1__.rice));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('social-media').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'social-media-icon-container', 'x-social-media-container'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('x-social-media-container').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.xLogoSvg;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('x-social-media-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', '@FeedMe'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('social-media').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'social-media-icon-container', 'instagram-social-media-container'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('instagram-social-media-container').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.instagramLogoSvg;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('instagram-social-media-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', '@FeedMe'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('social-media').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'social-media-icon-container', 'email-social-media-container'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('email-social-media-container').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.emailSvg;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('email-social-media-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'FeedMe@FeedMe.com'));

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
/* harmony export */   contactContent: () => (/* binding */ contactContent),
/* harmony export */   dishes: () => (/* binding */ dishes),
/* harmony export */   dishesImage1: () => (/* binding */ dishesImage1),
/* harmony export */   dishesImage2: () => (/* binding */ dishesImage2),
/* harmony export */   dishesImage3: () => (/* binding */ dishesImage3),
/* harmony export */   feedMeContent: () => (/* binding */ feedMeContent),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   menuContent: () => (/* binding */ menuContent),
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
const feedMeContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('feedMe-content');
const menuContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('menu-content');
const contactContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.getById)('contact-content');

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
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _slideShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideShow.js */ "./src/slideShow.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function runSlideShow() {
    (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)();

    setTimeout(runSlideShow, 5000);
}

runSlideShow();

_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navTitleButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.remove('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.add('hide');
});
_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navMenuButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.remove('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.add('hide');
});
_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navContactButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.remove('hide');
});

/***/ }),

/***/ "./src/media.js":
/*!**********************!*\
  !*** ./src/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   background: () => (/* binding */ background),
/* harmony export */   emailSvg: () => (/* binding */ emailSvg),
/* harmony export */   instagramLogoSvg: () => (/* binding */ instagramLogoSvg),
/* harmony export */   moonSvg: () => (/* binding */ moonSvg),
/* harmony export */   rice: () => (/* binding */ rice),
/* harmony export */   steak: () => (/* binding */ steak),
/* harmony export */   sunSvg: () => (/* binding */ sunSvg),
/* harmony export */   sushi: () => (/* binding */ sushi),
/* harmony export */   xLogoSvg: () => (/* binding */ xLogoSvg)
/* harmony export */ });
/* harmony import */ var _media_images_Background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/images/Background.jpg */ "./src/media/images/Background.jpg");
/* harmony import */ var _media_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/images/steak.jpg */ "./src/media/images/steak.jpg");
/* harmony import */ var _media_images_Sushi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/images/Sushi.jpg */ "./src/media/images/Sushi.jpg");
/* harmony import */ var _media_images_Rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/images/Rice.jpg */ "./src/media/images/Rice.jpg");





const sunSvg = /*html*/ '<svg xmlns="http://www.w3.org/2000/svg" class="sun-theme-button" id="sun-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>'

const moonSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" class="moon-theme-button" id="moon-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"/></svg>`

const xLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"/></svg>`;

const instagramLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>`;

const emailSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"/></svg>`;

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
/******/ 	__webpack_require__("./src/domElements.js");
/******/ 	__webpack_require__("./src/theme.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/createDom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sU0FBUyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxZQUFZLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxTQUFTLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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Q0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mZWVkTWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZCYXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mZWVkTWUuY3NzPzQ1OTIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdkJhci5jc3M/ZWJiMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRG9tLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lZGlhLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zbGlkZVNob3cuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mZWVkTWUtY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcImEgYSBiXCJcclxuICAgICAgICBcImMgZCBiXCJcclxuICAgICAgICBcImUgZiBiXCI7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC41ZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC41ZnIgMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCB7XHJcbiAgICBncmlkLWFyZWE6IGE7XHJcbn1cclxuXHJcbi50b3AtZGlzaCB7XHJcbiAgICBncmlkLWFyZWE6IGI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICAgIGdyaWQtYXJlYTogYztcclxufVxyXG5cclxuLndvcmtpbmctdGltZSB7XHJcbiAgICBncmlkLWFyZWE6IGQ7XHJcbn1cclxuXHJcbi5kaXNoZXMge1xyXG4gICAgZ3JpZC1hcmVhOiBlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCxcclxuLnRvcC1kaXNoLFxyXG4uYWRkcmVzcyxcclxuLndvcmtpbmctdGltZSxcclxuLmRpc2hlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tc2Vjb25kYXJ5KSByIGcgYiAvIDM3JSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBncmlkLWFyZWE6IGY7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXNlY29uZGFyeSkgciBnIGIgLyAzNyUpO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuXHJcbi5zb2NpYWwtbWVkaWEtaWNvbi1jb250YWluZXI+aDIge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLWFjY2VudCkgciBnIGIgLyAzMCUpO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyOmhvdmVyPmgyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTA3JSk7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50ICosXHJcbi50b3AtZGlzaCAqLFxyXG4uYWRkcmVzcyAqLFxyXG4ud29ya2luZy10aW1lICosXHJcbi5kaXNoZXMgKixcclxuLnNvY2lhbC1tZWRpYSAqIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcclxufVxyXG5cclxuLmFib3V0LXJlc3RhdXJhbnQgaW1nLFxyXG4udG9wLWRpc2ggaW1nLFxyXG4uYWRkcmVzcyBpbWcsXHJcbi53b3JraW5nLXRpbWUgaW1nLFxyXG4uZGlzaGVzIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDQwJSAyNSU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyBlYXNlLW91dCwgc2NhbGUgMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi50b3AtZGlzaDpob3ZlciBpbWcge1xyXG4gICAgc2NhbGU6IDEuMDI1O1xyXG59XHJcblxyXG4uZGlzaGVzOmhvdmVyIC5kaXNoZXMtaW1hZ2UtMSxcclxuLmRpc2hlczpob3ZlciAuZGlzaGVzLWltYWdlLTIsXHJcbi5kaXNoZXM6aG92ZXIgLmRpc2hlcy1pbWFnZS0zIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudDo6YWZ0ZXIsXHJcbi50b3AtZGlzaDo6YWZ0ZXIsXHJcbi5hZGRyZXNzOjphZnRlcixcclxuLndvcmtpbmctdGltZTo6YWZ0ZXIsXHJcbi5kaXNoZXM6OmFmdGVyLFxyXG4uc29jaWFsLW1lZGlhOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IGgyLFxyXG4udG9wLWRpc2ggaDIsXHJcbi5hZGRyZXNzIGgyLFxyXG4ud29ya2luZy10aW1lIGgyLFxyXG4uZGlzaGVzIGgyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxcHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSBoMixcclxuLnNvY2lhbC1tZWRpYSBzdmcge1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB0O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxcHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmFkZHJlc3MgaDIge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHQ7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjRwdCwgMTZwdCwgMTJwdCk7XHJcbn1cclxuXHJcbi5kaXNoZXMgaDIsXHJcbi50b3AtZGlzaCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBOb3JtYWwnO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCg1MHB0LCAyNHB0LCAxMnB0KTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB0O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHQ7XHJcbn1cclxuXHJcbiNkaXNoZXMtaW1hZ2UtMSB7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jZGlzaGVzLWltYWdlLTIge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2NSU7XHJcbiAgICB0cmFuc2xhdGU6IDEwMCUgMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNkaXNoZXMtaW1hZ2UtMyB7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDc1JTtcclxuICAgIHRyYW5zbGF0ZTogMjAwJSAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLyoqL1xyXG4uZGlzaGVzLWltYWdlLTEtc2xpZGUtMSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uZGlzaGVzLWltYWdlLTItc2xpZGUtMSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uZGlzaGVzLWltYWdlLTMtc2xpZGUtMSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4vKiovXHJcbi5kaXNoZXMtaW1hZ2UtMS1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMi1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuXHJcbi5kaXNoZXMtaW1hZ2UtMy1zbGlkZS0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmZlZWRNZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDAgNXJlbSAwO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgIFwiYlwiXHJcbiAgICAgICAgICAgIFwiYVwiXHJcbiAgICAgICAgICAgIFwiY1wiXHJcbiAgICAgICAgICAgIFwiZFwiXHJcbiAgICAgICAgICAgIFwiZVwiXHJcbiAgICAgICAgICAgIFwiZlwiO1xyXG5cclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1cmVtIHJlcGVhdCg1LCA3cmVtKTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlZWRNZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYjs7O2VBR1c7O0lBRVgsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOzs7OztJQUtJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQix3REFBd0Q7SUFDeEQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3REFBd0Q7O0lBRXhELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7O0lBTUksd0JBQXdCO0FBQzVCOztBQUVBOzs7OztJQUtJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksV0FBVztBQUNmOztBQUVBOzs7Ozs7SUFNSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCw2RUFBNkU7SUFDN0UsV0FBVzs7SUFFWCxvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7O0lBS0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiw2REFBNkQ7QUFDakU7O0FBRUEsR0FBRztBQUNIO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLEdBQUc7QUFDSDtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCOzs7Ozs7ZUFNTzs7UUFFUCwwQkFBMEI7UUFDMUIseUNBQXlDO0lBQzdDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZlZWRNZS1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwiYSBhIGJcXFwiXFxyXFxuICAgICAgICBcXFwiYyBkIGJcXFwiXFxyXFxuICAgICAgICBcXFwiZSBmIGJcXFwiO1xcclxcblxcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogYTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1kaXNoIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya2luZy10aW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50LFxcclxcbi50b3AtZGlzaCxcXHJcXG4uYWRkcmVzcyxcXHJcXG4ud29ya2luZy10aW1lLFxcclxcbi5kaXNoZXMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1zZWNvbmRhcnkpIHIgZyBiIC8gMzclKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGdyaWQtYXJlYTogZjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1zZWNvbmRhcnkpIHIgZyBiIC8gMzclKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbi1jb250YWluZXI+aDIge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbi1jb250YWluZXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLWFjY2VudCkgciBnIGIgLyAzMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyOmhvdmVyPmgyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDclKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQgKixcXHJcXG4udG9wLWRpc2ggKixcXHJcXG4uYWRkcmVzcyAqLFxcclxcbi53b3JraW5nLXRpbWUgKixcXHJcXG4uZGlzaGVzICosXFxyXFxuLnNvY2lhbC1tZWRpYSAqIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCBpbWcsXFxyXFxuLnRvcC1kaXNoIGltZyxcXHJcXG4uYWRkcmVzcyBpbWcsXFxyXFxuLndvcmtpbmctdGltZSBpbWcsXFxyXFxuLmRpc2hlcyBpbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogNDAlIDI1JTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMTAwbXMgZWFzZS1vdXQsIHNjYWxlIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLWRpc2g6aG92ZXIgaW1nIHtcXHJcXG4gICAgc2NhbGU6IDEuMDI1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzOmhvdmVyIC5kaXNoZXMtaW1hZ2UtMSxcXHJcXG4uZGlzaGVzOmhvdmVyIC5kaXNoZXMtaW1hZ2UtMixcXHJcXG4uZGlzaGVzOmhvdmVyIC5kaXNoZXMtaW1hZ2UtMyB7XFxyXFxuICAgIHdpZHRoOiAxMDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudDo6YWZ0ZXIsXFxyXFxuLnRvcC1kaXNoOjphZnRlcixcXHJcXG4uYWRkcmVzczo6YWZ0ZXIsXFxyXFxuLndvcmtpbmctdGltZTo6YWZ0ZXIsXFxyXFxuLmRpc2hlczo6YWZ0ZXIsXFxyXFxuLnNvY2lhbC1tZWRpYTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50IGgyLFxcclxcbi50b3AtZGlzaCBoMixcXHJcXG4uYWRkcmVzcyBoMixcXHJcXG4ud29ya2luZy10aW1lIGgyLFxcclxcbi5kaXNoZXMgaDIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDExO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogMXB0O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSBoMixcXHJcXG4uc29jaWFsLW1lZGlhIHN2ZyB7XFxyXFxuICAgIHotaW5kZXg6IDExO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDFwdDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIGgyIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDJwdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQgaDIge1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHQsIDE2cHQsIDEycHQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIGgyLFxcclxcbi50b3AtZGlzaCBoMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBwdCwgMjRwdCwgMTJwdCk7XFxyXFxuICAgIGJvdHRvbTogMTAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVwdDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAycHQ7XFxyXFxufVxcclxcblxcclxcbiNkaXNoZXMtaW1hZ2UtMSB7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpc2hlcy1pbWFnZS0yIHtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2NSU7XFxyXFxuICAgIHRyYW5zbGF0ZTogMTAwJSAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGlzaGVzLWltYWdlLTMge1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDAlIDc1JTtcXHJcXG4gICAgdHJhbnNsYXRlOiAyMDAlIDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qKi9cXHJcXG4uZGlzaGVzLWltYWdlLTEtc2xpZGUtMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMi1zbGlkZS0xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2hlcy1pbWFnZS0zLXNsaWRlLTEge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiovXFxyXFxuLmRpc2hlcy1pbWFnZS0xLXNsaWRlLTIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzLWltYWdlLTItc2xpZGUtMiB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMy1zbGlkZS0yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XFxyXFxuICAgIC5mZWVkTWUtY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcmVtIDAgNXJlbSAwO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgICAgICBcXFwiYlxcXCJcXHJcXG4gICAgICAgICAgICBcXFwiYVxcXCJcXHJcXG4gICAgICAgICAgICBcXFwiY1xcXCJcXHJcXG4gICAgICAgICAgICBcXFwiZFxcXCJcXHJcXG4gICAgICAgICAgICBcXFwiZVxcXCJcXHJcXG4gICAgICAgICAgICBcXFwiZlxcXCI7XFxyXFxuXFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVyZW0gcmVwZWF0KDUsIDdyZW0pO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpIDVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbj5oMSB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm5hdi1idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uOmhvdmVyPmgxIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTE1JSk7XHJcbn1cclxuXHJcbi5uYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLWFjY2VudCkgciBnIGIgLyAzMCUpO1xyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uPnN2ZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7O0lBRWYsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7O0lBRVosOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpIDVyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbj5oMSB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uOmhvdmVyPmgxIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMTUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10aGVtZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLWFjY2VudCkgciBnIGIgLyAzMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtYnV0dG9uPnN2ZyB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGtCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsa05vcm1hbC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGtTbGltLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS10ZXh0LXdoaXRlOiByZ2IoMjQxLCAyMjcsIDIxOCk7XHJcbiAgICAtLXRleHQtYmxhY2s6IHJnYigzNywgMjMsIDE0KTtcclxuICAgIC0tYmFja2dyb3VuZC1ibGFjazogcmdiKDEyLCA2LCAzKTtcclxuICAgIC0tYmFja2dyb3VuZC13aGl0ZTogcmdiKDI1MiwgMjQ2LCAyNDMpO1xyXG4gICAgLS1wcmltYXJ5LWJsYWNrOiByZ2IoMTc1LCA2NiwgNCk7XHJcbiAgICAtLXByaW1hcnktd2hpdGU6IHJnYigyNTEsIDE0MywgODApO1xyXG4gICAgLS1zZWNvbmRhcnktYmxhY2s6IHJnYigxMzgsIDY4LCAyOCk7XHJcbiAgICAtLXNlY29uZGFyeS13aGl0ZTogcmdiKDIzNSwgMTYwLCAxMTcpO1xyXG4gICAgLS1hY2NlbnQtYmxhY2s6IHJnYigyMzgsIDExNywgNDcpO1xyXG4gICAgLS1hY2NlbnQtd2hpdGU6IHJnYigyMDgsIDg3LCAxNyk7XHJcbn1cclxuXHJcbjpyb290W2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XHJcbiAgICAtLXRleHQ6IHJnYigzNywgMjMsIDE0KTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MiwgMjQ2LCAyNDMpO1xyXG4gICAgLS1wcmltYXJ5OiByZ2IoMjUxLCAxNDMsIDgwKTtcclxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjM1LCAxNjAsIDExNyk7XHJcbiAgICAtLWFjY2VudDogcmdiKDIwOCwgODcsIDE3KTtcclxufVxyXG5cclxuOnJvb3RbZGF0YS10aGVtZT1cImRhcmtcIl0ge1xyXG4gICAgLS10ZXh0OiByZ2IoMjQxLCAyMjcsIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMiwgNiwgMyk7XHJcbiAgICAtLXByaW1hcnk6IHJnYigxNzUsIDY2LCA0KTtcclxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMTM4LCA2OCwgMjgpO1xyXG4gICAgLS1hY2NlbnQ6IHJnYigyMzgsIDExNywgNDcpO1xyXG59XHJcblxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBCb2xkJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBTbGltJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMGR2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYm9keSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIFNsaW0nLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDVyZW0pO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQ+aW1nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMjUlIDc1JTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTJDO0FBQy9DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUErQztBQUNuRDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw0Q0FBaUQ7QUFDckQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNENBQStDO0FBQ25EOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFLQUFxSztJQUNySyxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tdGV4dC13aGl0ZTogcmdiKDI0MSwgMjI3LCAyMTgpO1xcclxcbiAgICAtLXRleHQtYmxhY2s6IHJnYigzNywgMjMsIDE0KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWJsYWNrOiByZ2IoMTIsIDYsIDMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtd2hpdGU6IHJnYigyNTIsIDI0NiwgMjQzKTtcXHJcXG4gICAgLS1wcmltYXJ5LWJsYWNrOiByZ2IoMTc1LCA2NiwgNCk7XFxyXFxuICAgIC0tcHJpbWFyeS13aGl0ZTogcmdiKDI1MSwgMTQzLCA4MCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWJsYWNrOiByZ2IoMTM4LCA2OCwgMjgpO1xcclxcbiAgICAtLXNlY29uZGFyeS13aGl0ZTogcmdiKDIzNSwgMTYwLCAxMTcpO1xcclxcbiAgICAtLWFjY2VudC1ibGFjazogcmdiKDIzOCwgMTE3LCA0Nyk7XFxyXFxuICAgIC0tYWNjZW50LXdoaXRlOiByZ2IoMjA4LCA4NywgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdFtkYXRhLXRoZW1lPVxcXCJsaWdodFxcXCJdIHtcXHJcXG4gICAgLS10ZXh0OiByZ2IoMzcsIDIzLCAxNCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MiwgMjQ2LCAyNDMpO1xcclxcbiAgICAtLXByaW1hcnk6IHJnYigyNTEsIDE0MywgODApO1xcclxcbiAgICAtLXNlY29uZGFyeTogcmdiKDIzNSwgMTYwLCAxMTcpO1xcclxcbiAgICAtLWFjY2VudDogcmdiKDIwOCwgODcsIDE3KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3RbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG4gICAgLS10ZXh0OiByZ2IoMjQxLCAyMjcsIDIxOCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDEyLCA2LCAzKTtcXHJcXG4gICAgLS1wcmltYXJ5OiByZ2IoMTc1LCA2NiwgNCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMTM4LCA2OCwgMjgpO1xcclxcbiAgICAtLWFjY2VudDogcmdiKDIzOCwgMTE3LCA0Nyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGsudHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBCb2xkJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsa0JvbGQudHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBOb3JtYWwnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrTm9ybWFsLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgU2xpbSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGtTbGltLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHkgKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIFNsaW0nLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNXJlbSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50PmltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAyNSUgNzUlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mZWVkTWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mZWVkTWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUlucHV0LCBjcmVhdGVJbWFnZSwgZ2V0QnlJZCB9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcclxuaW1wb3J0IHsgc3VuU3ZnLCBtb29uU3ZnLCBiYWNrZ3JvdW5kLCBzdGVhaywgc3VzaGksIHJpY2UsIHhMb2dvU3ZnLCBpbnN0YWdyYW1Mb2dvU3ZnLCBlbWFpbFN2ZyB9IGZyb20gJy4vbWVkaWEuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL25hdkJhci5jc3MnO1xyXG5pbXBvcnQgJy4vZmVlZE1lLmNzcyc7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIEJhclxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ25hdicsICduYXZCYXInLCAnbmF2QmFyJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2QmFyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ25hdi1idXR0b24nLCAnbmF2LXRpdGxlLWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdkJhcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICduYXYtYnV0dG9uJywgJ25hdi1tZW51LWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdkJhcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICduYXYtYnV0dG9uJywgJ25hdi1jb250YWN0LWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdi10aXRsZS1idXR0b24nKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMScsICduYXYtdGl0bGUnLCAnbmF2LXRpdGxlJywgJ0ZlZWQgTWUnKSk7XHJcbmdldEJ5SWQoJ25hdi1tZW51LWJ1dHRvbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ25hdi1tZW51JywgJ25hdi1tZW51JywgJ01lbnUnKSk7XHJcbmdldEJ5SWQoJ25hdi1jb250YWN0LWJ1dHRvbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ25hdi1jb250YWN0JywgJ25hdi1jb250YWN0JywgJ0NvbnRhY3QnKSk7XHJcblxyXG5nZXRCeUlkKCduYXZCYXInKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXInLCAnbmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXInKSk7XHJcblxyXG5nZXRCeUlkKCduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpLmlubmVySFRNTCArPSBzdW5TdmcgKyBtb29uU3ZnO1xyXG5nZXRCeUlkKCduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCdjaGVja2JveCcsICd0aGVtZS1idXR0b24nLCAndGhlbWUtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnc3VuLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5nZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5cclxuLy8gTWFpbiBjb250ZW50XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnbWFpbicsICdtYWluJywgJ21haW4nKSk7XHJcbmdldEJ5SWQoJ21haW4nKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbWFpbi1jb250ZW50JywgJ21haW4tY29udGVudCcpKTtcclxuZ2V0QnlJZCgnbWFpbi1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UoJycsICcnLCBiYWNrZ3JvdW5kKSk7XHJcblxyXG5nZXRCeUlkKCdtYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnZmVlZE1lLWNvbnRlbnQnLCAnZmVlZE1lLWNvbnRlbnQnKSk7XHJcbmdldEJ5SWQoJ21haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtZW51LWNvbnRlbnQnLCAnbWVudS1jb250ZW50JykpO1xyXG5nZXRCeUlkKCdtYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnY29udGFjdC1jb250ZW50JywgJ2NvbnRhY3QtY29udGVudCcpKTtcclxuZ2V0QnlJZCgnbWVudS1jb250ZW50JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5nZXRCeUlkKCdjb250YWN0LWNvbnRlbnQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4vLyBGZWVkTWUgY29udGVudFxyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdhYm91dC1yZXN0YXVyYW50JywgJ2Fib3V0LXJlc3RhdXJhbnQnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3RvcC1kaXNoJywgJ3RvcC1kaXNoJykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdhZGRyZXNzJywgJ2FkZHJlc3MnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3dvcmtpbmctdGltZScsICd3b3JraW5nLXRpbWUnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ2Rpc2hlcycsICdkaXNoZXMnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYScsICdzb2NpYWwtbWVkaWEnKSk7XHJcblxyXG5nZXRCeUlkKCdhYm91dC1yZXN0YXVyYW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdhYm91dCByZXN0YXVyYW50JykpO1xyXG5cclxuZ2V0QnlJZCgndG9wLWRpc2gnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnJywgJycsIHN0ZWFrKSk7XHJcbmdldEJ5SWQoJ3RvcC1kaXNoJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdUb3AgRGlzaCcpKTtcclxuXHJcbmdldEJ5SWQoJ2FkZHJlc3MnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsICcnLCAnJywgJ0xvY2F0aW9uOiA4NjIgRm9yZXN0IEF2ZW51ZSwgRWxtc2ZvcmQsIE5ldyBZb3JrJykpO1xyXG5cclxuZ2V0QnlJZCgnd29ya2luZy10aW1lJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICc3OjAwIEFNIOKGkiAxMDowMCBQTScpKTtcclxuXHJcbmdldEJ5SWQoJ2Rpc2hlcycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnZGlzaGVzJykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTEnLCAnZGlzaGVzLWltYWdlLTEnLCBzdGVhaykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTInLCAnZGlzaGVzLWltYWdlLTInLCBzdXNoaSkpOyBnZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTMnLCAnZGlzaGVzLWltYWdlLTMnLCByaWNlKSk7XHJcblxyXG5nZXRCeUlkKCdzb2NpYWwtbWVkaWEnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyJywgJ3gtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ3gtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmlubmVySFRNTCArPSB4TG9nb1N2ZztcclxuZ2V0QnlJZCgneC1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdARmVlZE1lJykpO1xyXG5cclxuZ2V0QnlJZCgnc29jaWFsLW1lZGlhJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcicsICdpbnN0YWdyYW0tc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ2luc3RhZ3JhbS1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuaW5uZXJIVE1MICs9IGluc3RhZ3JhbUxvZ29Tdmc7XHJcbmdldEJ5SWQoJ2luc3RhZ3JhbS1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdARmVlZE1lJykpO1xyXG5cclxuZ2V0QnlJZCgnc29jaWFsLW1lZGlhJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcicsICdlbWFpbC1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykpO1xyXG5cclxuZ2V0QnlJZCgnZW1haWwtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmlubmVySFRNTCArPSBlbWFpbFN2ZztcclxuZ2V0QnlJZCgnZW1haWwtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnRmVlZE1lQEZlZWRNZS5jb20nKSk7IiwiaW1wb3J0ICcuL2NyZWF0ZURvbS5qcyc7XHJcbmltcG9ydCB7IGdldEJ5SWQgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbi8vIE5hdmlnYXRpb24gQmFyXHJcbmNvbnN0IG5hdkJhciA9IGdldEJ5SWQoJ25hdkJhcicpO1xyXG5cclxuY29uc3QgbmF2VGl0bGVCdXR0b24gPSBnZXRCeUlkKCduYXYtdGl0bGUtYnV0dG9uJyk7XHJcbmNvbnN0IG5hdk1lbnVCdXR0b24gPSBnZXRCeUlkKCduYXYtbWVudS1idXR0b24nKTtcclxuY29uc3QgbmF2Q29udGFjdEJ1dHRvbiA9IGdldEJ5SWQoJ25hdi1jb250YWN0LWJ1dHRvbicpO1xyXG5cclxuY29uc3QgbmF2VGl0bGUgPSBnZXRCeUlkKCduYXYtdGl0bGUnKTtcclxuY29uc3QgbmF2TWVudSA9IGdldEJ5SWQoJ25hdi1tZW51Jyk7XHJcbmNvbnN0IG5hdkNvbnRhY3QgPSBnZXRCeUlkKCduYXYtY29udGFjdCcpO1xyXG5cclxuY29uc3QgbmF2VGhlbWVCdXR0b25Db250YWluZXIgPSBnZXRCeUlkKCduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG5jb25zdCBzdW5UaGVtZUJ1dHRvbiA9IGdldEJ5SWQoJ3N1bi10aGVtZS1idXR0b24nKTtcclxuY29uc3QgbW9vblRoZW1lQnV0dG9uID0gZ2V0QnlJZCgnbW9vbi10aGVtZS1idXR0b24nKTtcclxuXHJcbi8vIE1haW4gY29udGVudFxyXG5jb25zdCBtYWluID0gZ2V0QnlJZCgnbWFpbicpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGdldEJ5SWQoJ21haW4tY29udGVudCcpO1xyXG5jb25zdCBmZWVkTWVDb250ZW50ID0gZ2V0QnlJZCgnZmVlZE1lLWNvbnRlbnQnKTtcclxuY29uc3QgbWVudUNvbnRlbnQgPSBnZXRCeUlkKCdtZW51LWNvbnRlbnQnKTtcclxuY29uc3QgY29udGFjdENvbnRlbnQgPSBnZXRCeUlkKCdjb250YWN0LWNvbnRlbnQnKTtcclxuXHJcbi8vIEZlZWRNZSBjb250ZW50XHJcbmNvbnN0IGFib3V0UmVzdGF1cmFudCA9IGdldEJ5SWQoJ2Fib3V0LXJlc3RhdXJhbnQnKTtcclxuY29uc3QgdG9wRGlzaCA9IGdldEJ5SWQoJ3RvcC1kaXNoJyk7XHJcbmNvbnN0IGFkZHJlc3MgPSBnZXRCeUlkKCdhZGRyZXNzJyk7XHJcbmNvbnN0IHdvcmtpbmdUaW1lID0gZ2V0QnlJZCgnd29ya2luZy10aW1lJyk7XHJcbmNvbnN0IGRpc2hlcyA9IGdldEJ5SWQoJ2Rpc2hlcycpO1xyXG5jb25zdCBzb2NpYWxNZWRpYSA9IGdldEJ5SWQoJ3NvY2lhbC1tZWRpYScpO1xyXG5jb25zdCBkaXNoZXNJbWFnZTEgPSBnZXRCeUlkKCdkaXNoZXMtaW1hZ2UtMScpO1xyXG5jb25zdCBkaXNoZXNJbWFnZTIgPSBnZXRCeUlkKCdkaXNoZXMtaW1hZ2UtMicpO1xyXG5jb25zdCBkaXNoZXNJbWFnZTMgPSBnZXRCeUlkKCdkaXNoZXMtaW1hZ2UtMycpO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGJvZHksXHJcbiAgICBuYXZCYXIsXHJcbiAgICBuYXZUaXRsZUJ1dHRvbixcclxuICAgIG5hdk1lbnVCdXR0b24sXHJcbiAgICBuYXZDb250YWN0QnV0dG9uLFxyXG4gICAgbmF2VGl0bGUsXHJcbiAgICBuYXZNZW51LFxyXG4gICAgbmF2Q29udGFjdCxcclxuICAgIG5hdlRoZW1lQnV0dG9uQ29udGFpbmVyLFxyXG4gICAgc3VuVGhlbWVCdXR0b24sXHJcbiAgICBtb29uVGhlbWVCdXR0b24sXHJcbiAgICBtYWluLFxyXG4gICAgbWFpbkNvbnRlbnQsXHJcbiAgICBhYm91dFJlc3RhdXJhbnQsXHJcbiAgICB0b3BEaXNoLFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHdvcmtpbmdUaW1lLFxyXG4gICAgZGlzaGVzLFxyXG4gICAgc29jaWFsTWVkaWEsXHJcbiAgICBkaXNoZXNJbWFnZTEsXHJcbiAgICBkaXNoZXNJbWFnZTIsXHJcbiAgICBkaXNoZXNJbWFnZTMsXHJcbiAgICBmZWVkTWVDb250ZW50LFxyXG4gICAgbWVudUNvbnRlbnQsXHJcbiAgICBjb250YWN0Q29udGVudFxyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZ2V0QnlJZCB9IGZyb20gXCIuL3RlbXBsYXRlcy5qc1wiO1xyXG5pbXBvcnQgeyBuYXZUaXRsZUJ1dHRvbiwgbmF2TWVudUJ1dHRvbiwgbmF2Q29udGFjdEJ1dHRvbiwgZmVlZE1lQ29udGVudCwgbWVudUNvbnRlbnQsIGNvbnRhY3RDb250ZW50IH0gZnJvbSBcIi4vZG9tRWxlbWVudHMuanNcIjtcclxuaW1wb3J0IHsgc2xpZGVTaG93IH0gZnJvbSBcIi4vc2xpZGVTaG93LmpzXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gcnVuU2xpZGVTaG93KCkge1xyXG4gICAgc2xpZGVTaG93KCk7XHJcblxyXG4gICAgc2V0VGltZW91dChydW5TbGlkZVNob3csIDUwMDApO1xyXG59XHJcblxyXG5ydW5TbGlkZVNob3coKTtcclxuXHJcbm5hdlRpdGxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmVlZE1lQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn0pO1xyXG5uYXZNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmVlZE1lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn0pO1xyXG5uYXZDb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZmVlZE1lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn0pOyIsImltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9tZWRpYS9pbWFnZXMvQmFja2dyb3VuZC5qcGcnO1xyXG5pbXBvcnQgc3RlYWtJbWFnZSBmcm9tICcuL21lZGlhL2ltYWdlcy9zdGVhay5qcGcnO1xyXG5pbXBvcnQgU3VzaGlJbWFnZSBmcm9tICcuL21lZGlhL2ltYWdlcy9TdXNoaS5qcGcnO1xyXG5pbXBvcnQgUmljZUltYWdlIGZyb20gJy4vbWVkaWEvaW1hZ2VzL1JpY2UuanBnJztcclxuXHJcbmNvbnN0IHN1blN2ZyA9IC8qaHRtbCovICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInN1bi10aGVtZS1idXR0b25cIiBpZD1cInN1bi10aGVtZS1idXR0b25cIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMTdxLTIuMDc1IDAtMy41MzctMS40NjNUNyAxMnEwLTIuMDc1IDEuNDYzLTMuNTM3VDEyIDdxMi4wNzUgMCAzLjUzOCAxLjQ2M1QxNyAxMnEwIDIuMDc1LTEuNDYzIDMuNTM4VDEyIDE3bS03LTRIMXYtMmg0em0xOCAwaC00di0yaDR6TTExIDVWMWgydjR6bTAgMTh2LTRoMnY0ek02LjQgNy43NUwzLjg3NSA1LjMyNUw1LjMgMy44NWwyLjQgMi41em0xMi4zIDEyLjRsLTIuNDI1LTIuNTI1TDE3LjYgMTYuMjVsMi41MjUgMi40MjV6TTE2LjI1IDYuNGwyLjQyNS0yLjUyNUwyMC4xNSA1LjNsLTIuNSAyLjR6TTMuODUgMTguN2wyLjUyNS0yLjQyNUw3Ljc1IDE3LjZsLTIuNDI1IDIuNTI1elwiLz48L3N2Zz4nXHJcblxyXG5jb25zdCBtb29uU3ZnID0gLypodG1sKi8gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwibW9vbi10aGVtZS1idXR0b25cIiBpZD1cIm1vb24tdGhlbWUtYnV0dG9uXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLjA1OCAyMHEtMy4zMzQgMC01LjY2Ny0yLjMzM1E0LjA1OCAxNS4zMzMgNC4wNTggMTJxMC0zLjAzOCAxLjk4LTUuMjdROC4wMiA0LjUgMTAuOTQyIDQuMDk3cS4wODEgMCAuMTU5LjAwNnQuMTUzLjAxN3EtLjUwNi43MDYtLjgwMSAxLjU3cS0uMjk1Ljg2NS0uMjk1IDEuODExcTAgMi42NjcgMS44NjYgNC41MzNxMS44NjcgMS44NjcgNC41MzQgMS44NjdxLjk1MiAwIDEuODEzLS4yOTVxLjg2Mi0uMjk1IDEuNTQ4LS44MDFxLjAxMi4wNzUuMDE4LjE1M3EuMDA1LjA3OC4wMDUuMTU4cS0uMzg0IDIuOTIzLTIuNjE1IDQuOTA0VDEyLjA1NyAyMFwiLz48L3N2Zz5gXHJcblxyXG5jb25zdCB4TG9nb1N2ZyA9IC8qaHRtbCovIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNOCAySDFsOC4yNiAxMS4wMTVMMS40NSAyMkg0LjFsNi4zODgtNy4zNDlMMTYgMjJoN2wtOC42MDgtMTEuNDc4TDIxLjggMmgtMi42NWwtNS45ODYgNi44ODZ6bTkgMThMNSA0aDJsMTIgMTZ6XCIvPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBpbnN0YWdyYW1Mb2dvU3ZnID0gLypodG1sKi8gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMi4wMDEgOWEzIDMgMCAxIDAgMCA2YTMgMyAwIDAgMCAwLTZtMC0yYTUgNSAwIDEgMSAwIDEwYTUgNSAwIDAgMSAwLTEwbTYuNS0uMjVhMS4yNSAxLjI1IDAgMCAxLTIuNSAwYTEuMjUgMS4yNSAwIDAgMSAyLjUgME0xMi4wMDEgNGMtMi40NzQgMC0yLjg3OC4wMDctNC4wMjkuMDU4Yy0uNzg0LjAzNy0xLjMxLjE0Mi0xLjc5OC4zMzJhMi44ODYgMi44ODYgMCAwIDAtMS4wOC43MDNhMi44OSAyLjg5IDAgMCAwLS43MDQgMS4wOGMtLjE5LjQ5LS4yOTUgMS4wMTUtLjMzMSAxLjc5OEM0LjAwNyA5LjA3NSA0IDkuNDYxIDQgMTJjMCAyLjQ3NS4wMDcgMi44NzguMDU4IDQuMDI5Yy4wMzcuNzgzLjE0MiAxLjMxLjMzMSAxLjc5N2MuMTcuNDM1LjM3Ljc0OC43MDIgMS4wOGMuMzM3LjMzNi42NS41MzcgMS4wOC43MDNjLjQ5NC4xOTEgMS4wMi4yOTcgMS44LjMzM0M5LjA3NSAxOS45OTQgOS40NjEgMjAgMTIgMjBjMi40NzUgMCAyLjg3OC0uMDA3IDQuMDI5LS4wNThjLjc4Mi0uMDM3IDEuMzA4LS4xNDIgMS43OTctLjMzMWEyLjkxIDIuOTEgMCAwIDAgMS4wOC0uNzAzYy4zMzctLjMzNi41MzgtLjY0OS43MDQtMS4wOGMuMTktLjQ5Mi4yOTYtMS4wMTguMzMyLTEuOGMuMDUyLTEuMTAzLjA1OC0xLjQ5LjA1OC00LjAyOGMwLTIuNDc0LS4wMDctMi44NzgtLjA1OC00LjAyOWMtLjAzNy0uNzgyLS4xNDMtMS4zMS0uMzMyLTEuNzk4YTIuOTEyIDIuOTEyIDAgMCAwLS43MDMtMS4wOGEyLjg4NCAyLjg4NCAwIDAgMC0xLjA4LS43MDRjLS40OS0uMTktMS4wMTYtLjI5NS0xLjc5OC0uMzMxQzE0LjkyNiA0LjAwNiAxNC41NCA0IDEyIDRtMC0yYzIuNzE3IDAgMy4wNTYuMDEgNC4xMjMuMDZjMS4wNjQuMDUgMS43OS4yMTcgMi40MjcuNDY1Yy42Ni4yNTQgMS4yMTYuNTk4IDEuNzcyIDEuMTUzYTQuOTA4IDQuOTA4IDAgMCAxIDEuMTUzIDEuNzcyYy4yNDcuNjM3LjQxNSAxLjM2My40NjUgMi40MjhjLjA0NyAxLjA2Ni4wNiAxLjQwNS4wNiA0LjEyMmMwIDIuNzE3LS4wMSAzLjA1Ni0uMDYgNC4xMjJjLS4wNSAxLjA2NS0uMjE4IDEuNzktLjQ2NSAyLjQyOGE0Ljg4NCA0Ljg4NCAwIDAgMS0xLjE1MyAxLjc3MmE0LjkxNSA0LjkxNSAwIDAgMS0xLjc3MiAxLjE1M2MtLjYzNy4yNDctMS4zNjMuNDE1LTIuNDI3LjQ2NWMtMS4wNjcuMDQ3LTEuNDA2LjA2LTQuMTIzLjA2Yy0yLjcxNyAwLTMuMDU2LS4wMS00LjEyMy0uMDZjLTEuMDY0LS4wNS0xLjc4OS0uMjE4LTIuNDI3LS40NjVhNC44OSA0Ljg5IDAgMCAxLTEuNzcyLTEuMTUzYTQuOTA1IDQuOTA1IDAgMCAxLTEuMTUzLTEuNzcyYy0uMjQ4LS42MzctLjQxNS0xLjM2My0uNDY1LTIuNDI4QzIuMDEyIDE1LjA1NiAyIDE0LjcxNyAyIDEyYzAtMi43MTcuMDEtMy4wNTYuMDYtNC4xMjJjLjA1LTEuMDY1LjIxNy0xLjc5LjQ2NS0yLjQyOGE0Ljg4IDQuODggMCAwIDEgMS4xNTMtMS43NzJBNC44OTcgNC44OTcgMCAwIDEgNS40NSAyLjUyNWMuNjM3LS4yNDggMS4zNjItLjQxNSAyLjQyNy0uNDY1QzguOTQ1IDIuMDEzIDkuMjg0IDIgMTIuMDAxIDJcIi8+PC9zdmc+YDtcclxuXHJcbmNvbnN0IGVtYWlsU3ZnID0gLypodG1sKi8gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zIDNoMThhMSAxIDAgMCAxIDEgMXYxNmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFtMTcgNC4yMzhsLTcuOTI4IDcuMUw0IDcuMjE2VjE5aDE2ek00LjUxMSA1bDcuNTUgNi42NjJMMTkuNTAyIDV6XCIvPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEltYWdlO1xyXG5cclxuY29uc3Qgc3RlYWsgPSBzdGVha0ltYWdlO1xyXG5jb25zdCBzdXNoaSA9IFN1c2hpSW1hZ2U7XHJcbmNvbnN0IHJpY2UgPSBSaWNlSW1hZ2U7XHJcblxyXG5leHBvcnQgeyBzdW5TdmcsIG1vb25TdmcsIGJhY2tncm91bmQsIHN0ZWFrLCBzdXNoaSwgcmljZSwgeExvZ29TdmcsIGluc3RhZ3JhbUxvZ29TdmcsIGVtYWlsU3ZnIH0iLCJpbXBvcnQgeyBkaXNoZXNJbWFnZTEsIGRpc2hlc0ltYWdlMiwgZGlzaGVzSW1hZ2UzIH0gZnJvbSAnLi9kb21FbGVtZW50cy5qcydcclxuXHJcbmxldCBhcnJheSA9IFsxLCAyLCAzXTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlU2hvdygpIHtcclxuICAgIGxldCBlbGUgPSBhcnJheS5zaGlmdCgpO1xyXG4gICAgYXJyYXkucHVzaChlbGUpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMS1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTEuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTEtc2xpZGUtMicpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMi1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTItc2xpZGUtMicpO1xyXG5cclxuICAgIGRpc2hlc0ltYWdlMy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNoZXMtaW1hZ2UtMy1zbGlkZS0xJyk7XHJcbiAgICBkaXNoZXNJbWFnZTMuY2xhc3NMaXN0LnJlbW92ZSgnZGlzaGVzLWltYWdlLTMtc2xpZGUtMicpO1xyXG5cclxuICAgIGlmIChhcnJheS50b1N0cmluZygpID09IFsxLCAyLCAzXSkge1xyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJyYXkudG9TdHJpbmcoKSA9PSBbMiwgMywgMV0pIHtcclxuXHJcbiAgICAgICAgZGlzaGVzSW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcy1pbWFnZS0xLXNsaWRlLTEnKTtcclxuICAgICAgICBkaXNoZXNJbWFnZTIuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWltYWdlLTItc2xpZGUtMScpO1xyXG4gICAgICAgIGRpc2hlc0ltYWdlMy5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtaW1hZ2UtMy1zbGlkZS0xJyk7XHJcbiAgICB9IGVsc2UgaWYgKGFycmF5LnRvU3RyaW5nKCkgPT0gWzMsIDEsIDJdKSB7XHJcblxyXG4gICAgICAgIGRpc2hlc0ltYWdlMS5jbGFzc0xpc3QuYWRkKCdkaXNoZXMtaW1hZ2UtMS1zbGlkZS0yJyk7XHJcbiAgICAgICAgZGlzaGVzSW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlcy1pbWFnZS0yLXNsaWRlLTInKTtcclxuICAgICAgICBkaXNoZXNJbWFnZTMuY2xhc3NMaXN0LmFkZCgnZGlzaGVzLWltYWdlLTMtc2xpZGUtMicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzbGlkZVNob3cgfSIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NOYW1lLCBpZCwgdGV4dENvbnRlbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUgfHwgJ2RpdicpO1xyXG5cclxuICAgIGNsYXNzTmFtZSAhPSBcIlwiID8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBudWxsO1xyXG5cclxuICAgIGlkICE9IFwiXCIgPyBlbGVtZW50LmlkID0gaWQgOiBudWxsO1xyXG5cclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgY2xhc3NOYW1lLCBpZCk7XHJcblxyXG4gICAgZWxlbWVudC50eXBlID0gdHlwZTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoY2xhc3NOYW1lLCBpZCwgc3JjKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnaW1nJywgY2xhc3NOYW1lLCBpZCk7XHJcblxyXG4gICAgZWxlbWVudC5zcmMgPSBzcmM7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBnZXRCeUlkLCBjcmVhdGVJbnB1dCwgY3JlYXRlSW1hZ2UgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW5wdXQsIGdldEJ5SWQgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XHJcblxyXG5jb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA6IFwibGlnaHRcIjtcclxuXHJcbmlmIChjdXJyZW50VGhlbWUpIHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIGN1cnJlbnRUaGVtZSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgICBnZXRCeUlkKCd0aGVtZS1idXR0b24nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBnZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRoZW1lKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGdldEJ5SWQoJ3N1bi10aGVtZS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBnZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgZ2V0QnlJZCgnc3VuLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIGdldEJ5SWQoJ21vb24tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdldEJ5SWQoJ3RoZW1lLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc3dpdGNoVGhlbWUpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbUVsZW1lbnRzLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RoZW1lLmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY3JlYXRlRG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9