/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/feedMe.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/feedMe.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
}`, "",{"version":3,"sources":["webpack://./src/css/feedMe.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb;;;eAGW;;IAEX,iCAAiC;IACjC,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;;;;;IAKI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,mBAAmB;IACnB,wDAAwD;IACxD,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;;IAEZ,kBAAkB;IAClB,mBAAmB;IACnB,wDAAwD;;IAExD,aAAa;IACb,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;;;;;IAKI,kBAAkB;IAClB,wBAAwB;IACxB,sDAAsD;AAC1D;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;;;;;;IAMI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,6EAA6E;IAC7E,WAAW;;IAEX,oBAAoB;AACxB;;AAEA;;;;;IAKI,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;;IAEI,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;;IAEI,+BAA+B;IAC/B,kCAAkC;IAClC,WAAW;IACX,SAAS;IACT,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI;QACI,sBAAsB;QACtB;;;;;;eAMO;;QAEP,0BAA0B;QAC1B,yCAAyC;IAC7C;AACJ","sourcesContent":[".feedMe-content {\r\n    width: 80%;\r\n    height: 80%;\r\n    display: grid;\r\n    grid-template-areas:\r\n        \"a a b\"\r\n        \"c d b\"\r\n        \"e f b\";\r\n\r\n    grid-template-rows: 1fr 0.5fr 1fr;\r\n    grid-template-columns: 1fr 0.5fr 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n.about-restaurant {\r\n    grid-area: a;\r\n}\r\n\r\n.top-dish {\r\n    grid-area: b;\r\n    cursor: pointer;\r\n}\r\n\r\n.address {\r\n    grid-area: c;\r\n}\r\n\r\n.working-time {\r\n    grid-area: d;\r\n}\r\n\r\n.dishes {\r\n    grid-area: e;\r\n    cursor: pointer;\r\n}\r\n\r\n.about-restaurant,\r\n.top-dish,\r\n.address,\r\n.working-time,\r\n.dishes {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 1rem;\r\n    background-color: rgb(from var(--secondary) r g b / 37%);\r\n    overflow: hidden;\r\n}\r\n\r\n.social-media {\r\n    overflow: hidden;\r\n    grid-area: f;\r\n\r\n    position: relative;\r\n    border-radius: 1rem;\r\n    background-color: rgb(from var(--secondary) r g b / 37%);\r\n\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n\r\n.social-media-icon-container {\r\n    align-items: center;\r\n    height: 100%;\r\n    padding: 0 1rem;\r\n    display: flex;\r\n    gap: 0.75rem;\r\n}\r\n\r\n.social-media-icon-container>h2 {\r\n    transition: transform 100ms ease-in-out;\r\n}\r\n\r\n.social-media-icon-container:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.social-media-icon-container:hover>h2 {\r\n    transform: scale(107%);\r\n}\r\n\r\n.about-restaurant *,\r\n.top-dish *,\r\n.address *,\r\n.working-time *,\r\n.dishes *,\r\n.social-media * {\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    color: var(--text-white);\r\n}\r\n\r\n.about-restaurant img,\r\n.top-dish img,\r\n.address img,\r\n.working-time img,\r\n.dishes img {\r\n    position: absolute;\r\n    object-position: 40% 25%;\r\n    transition: width 100ms ease-out, scale 100ms ease-out;\r\n}\r\n\r\n.top-dish:hover img {\r\n    scale: 1.025;\r\n}\r\n\r\n.dishes:hover .dishes-image-1,\r\n.dishes:hover .dishes-image-2,\r\n.dishes:hover .dishes-image-3 {\r\n    width: 105%;\r\n}\r\n\r\n.about-restaurant::after,\r\n.top-dish::after,\r\n.address::after,\r\n.working-time::after,\r\n.dishes::after,\r\n.social-media::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));\r\n    z-index: 10;\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n.about-restaurant h2,\r\n.top-dish h2,\r\n.address h2,\r\n.working-time h2,\r\n.dishes h2 {\r\n    position: absolute;\r\n    z-index: 11;\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n}\r\n\r\n.social-media h2,\r\n.social-media svg {\r\n    z-index: 11;\r\n    letter-spacing: 2pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n}\r\n\r\n.address h2 {\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n.about-restaurant h2 {\r\n    font-size: clamp(24pt, 16pt, 12pt);\r\n}\r\n\r\n.dishes h2,\r\n.top-dish h2 {\r\n    font-family: 'BiteChalk Normal';\r\n    font-size: clamp(50pt, 24pt, 12pt);\r\n    bottom: 10%;\r\n    left: 10%;\r\n    letter-spacing: 2.5pt;\r\n    word-spacing: 2pt;\r\n}\r\n\r\n#dishes-image-1 {\r\n    object-position: 50% 50%;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-2 {\r\n    object-position: 0% 65%;\r\n    translate: 100% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#dishes-image-3 {\r\n    object-position: 0% 75%;\r\n    translate: 200% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.dishes-image-2-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.dishes-image-3-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n/**/\r\n.dishes-image-1-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-2-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.dishes-image-3-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n@media only screen and (max-width:768px) {\r\n    .feedMe-content {\r\n        padding: 0rem 0 5rem 0;\r\n        grid-template-areas:\r\n            \"b\"\r\n            \"a\"\r\n            \"c\"\r\n            \"d\"\r\n            \"e\"\r\n            \"f\";\r\n\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 15rem repeat(5, 7rem);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu-content {
    width: 80%;
    height: 80%;
    display: grid;
    grid-template-columns: 5rem auto 5rem;
}

.menu-items {
    width: 100%;
    height: 100%;

    overflow: hidden;
    display: flex;
    position: relative;

    border-radius: 1rem;
}

.menu-item {
    padding: 0 2rem;

    position: absolute;
    width: calc(100% - 4rem);
    height: 100%;
    display: flex;
    /* grid-template-columns: 2fr 1fr; */
    overflow: hidden;
    border-radius: 1rem;
}

.menu-image-container {
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    overflow: hidden;
    position: relative;
}

.menu-image-container::after {
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

.menu-image-container:hover img {
    cursor: pointer;
    scale: 1.025;
}

.menu-image-container h2 {
    position: absolute;
    z-index: 11;
    letter-spacing: 1.5pt;
    word-spacing: 1pt;
    user-select: none;

    font-family: 'BiteChalk Normal';
    font-size: clamp(50pt, 24pt, 12pt);
    bottom: 5%;
    left: 5%;
    letter-spacing: 2.5pt;
    word-spacing: 2pt;
    color: var(--text-white);
}

.menu-item img {
    object-fit: cover;
    position: absolute;
    transition: width 100ms ease-out, height 100ms ease-out, scale 100ms ease-out;

    flex: 2;
}

.menu-item-description {
    background-image: -moz-linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    border-radius: 0 1rem 1rem 0;

    width: 33%;
    height: 100%;
    transform: scaleX(100%);

    overflow: hidden;
    overflow-y: auto;

    transition: width 200ms cubic-bezier(.19, -0.1, .18, 1.19), transform 200ms cubic-bezier(.19, -0.1, .18, 1.19);
}

.hide-item-description {
    width: 0;
    transform: scaleX(0);
}

.menu-item-description h2 {
    padding: 1rem;
    color: var(--text-white);
    font-size: x-large;
}

.menu-slide-left-button,
.menu-slide-right-button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.menu-slide-left-button svg,
.menu-slide-right-button svg {
    height: 100%;
    width: 100%;
}

.menu-slide-left-button svg path,
.menu-slide-right-button svg path {
    color: var(--text-white);
}

.menu-slide-left-button svg {
    rotate: 180deg;
}

#menu-item-1 {
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

#menu-item-1 img {
    object-position: 40% 25%;
}

#menu-item-2 {
    translate: 100% 0;
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

#menu-item-2 img {
    object-position: 0% 65%;
}

#menu-item-3 {
    translate: 200% 0;
    transition: transform 700ms ease-in-out, width 100ms ease-out;
}

#menu-item-3 img {
    object-position: 0% 75%;
}

/**/
.menu-item-1-slide-1 {
    transform: translateX(-100%);
}

.menu-item-2-slide-1 {
    transform: translateX(-100%);
}

.menu-item-3-slide-1 {
    transform: translateX(-100%);
}

/**/
.menu-item-1-slide-2 {
    transform: translateX(-200%);
}

.menu-item-2-slide-2 {
    transform: translateX(-200%);
}

.menu-item-3-slide-2 {
    transform: translateX(-200%);
}

@media only screen and (max-width:768px) {
    .menu-content {
        grid-template-columns: 2rem auto 2rem;
        height: 100%;
        width: 100%;
        grid-template-columns: auto;
        position: relative;
    }

    .menu-item {
        flex-direction: column;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .menu-item-description {
        border-radius: 0;
        width: 100%;
        height: 50%;

        background-image: -moz-linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

        transition: height 200ms cubic-bezier(.19, -0.1, .18, 1.19), transform 200ms cubic-bezier(.19, -0.1, .18, 1.19);
    }

    .menu-image-container {
        height: 100%;
        border-radius: 0;
    }

    .menu-item img {
        border-radius: 0;
    }

    .hide-item-description {
        height: 0;
        transform: scaleY(0);
    }

    .menu-slide-left-button {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5rem;
        z-index: 15;
        opacity: 0.5;
    }

    .menu-slide-right-button {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 5rem;
        z-index: 15;
        opacity: 0.5;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;IAChB,aAAa;IACb,kBAAkB;;IAElB,mBAAmB;AACvB;;AAEA;IACI,eAAe;;IAEf,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,6EAA6E;IAC7E,WAAW;;IAEX,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;;IAEjB,+BAA+B;IAC/B,kCAAkC;IAClC,UAAU;IACV,QAAQ;IACR,qBAAqB;IACrB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,6EAA6E;;IAE7E,OAAO;AACX;;AAEA;IACI,sGAAsG;IACtG,iGAAiG;;IAEjG,4BAA4B;;IAE5B,UAAU;IACV,YAAY;IACZ,uBAAuB;;IAEvB,gBAAgB;IAChB,gBAAgB;;IAEhB,8GAA8G;AAClH;;AAEA;IACI,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,GAAG;AACH;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI;QACI,qCAAqC;QACrC,YAAY;QACZ,WAAW;QACX,2BAA2B;QAC3B,kBAAkB;IACtB;;IAEA;QACI,sBAAsB;QACtB,UAAU;QACV,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,WAAW;QACX,WAAW;;QAEX,uGAAuG;QACvG,kGAAkG;;QAElG,+GAA+G;IACnH;;IAEA;QACI,YAAY;QACZ,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,SAAS;QACT,oBAAoB;IACxB;;IAEA;QACI,kBAAkB;QAClB,OAAO;QACP,MAAM;QACN,SAAS;QACT,WAAW;QACX,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,kBAAkB;QAClB,QAAQ;QACR,MAAM;QACN,SAAS;QACT,WAAW;QACX,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":[".menu-content {\r\n    width: 80%;\r\n    height: 80%;\r\n    display: grid;\r\n    grid-template-columns: 5rem auto 5rem;\r\n}\r\n\r\n.menu-items {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    overflow: hidden;\r\n    display: flex;\r\n    position: relative;\r\n\r\n    border-radius: 1rem;\r\n}\r\n\r\n.menu-item {\r\n    padding: 0 2rem;\r\n\r\n    position: absolute;\r\n    width: calc(100% - 4rem);\r\n    height: 100%;\r\n    display: flex;\r\n    /* grid-template-columns: 2fr 1fr; */\r\n    overflow: hidden;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.menu-image-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 1rem 0 0 1rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.menu-image-container::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));\r\n    z-index: 10;\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n.menu-image-container:hover img {\r\n    cursor: pointer;\r\n    scale: 1.025;\r\n}\r\n\r\n.menu-image-container h2 {\r\n    position: absolute;\r\n    z-index: 11;\r\n    letter-spacing: 1.5pt;\r\n    word-spacing: 1pt;\r\n    user-select: none;\r\n\r\n    font-family: 'BiteChalk Normal';\r\n    font-size: clamp(50pt, 24pt, 12pt);\r\n    bottom: 5%;\r\n    left: 5%;\r\n    letter-spacing: 2.5pt;\r\n    word-spacing: 2pt;\r\n    color: var(--text-white);\r\n}\r\n\r\n.menu-item img {\r\n    object-fit: cover;\r\n    position: absolute;\r\n    transition: width 100ms ease-out, height 100ms ease-out, scale 100ms ease-out;\r\n\r\n    flex: 2;\r\n}\r\n\r\n.menu-item-description {\r\n    background-image: -moz-linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\r\n\r\n    border-radius: 0 1rem 1rem 0;\r\n\r\n    width: 33%;\r\n    height: 100%;\r\n    transform: scaleX(100%);\r\n\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n\r\n    transition: width 200ms cubic-bezier(.19, -0.1, .18, 1.19), transform 200ms cubic-bezier(.19, -0.1, .18, 1.19);\r\n}\r\n\r\n.hide-item-description {\r\n    width: 0;\r\n    transform: scaleX(0);\r\n}\r\n\r\n.menu-item-description h2 {\r\n    padding: 1rem;\r\n    color: var(--text-white);\r\n    font-size: x-large;\r\n}\r\n\r\n.menu-slide-left-button,\r\n.menu-slide-right-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-slide-left-button svg,\r\n.menu-slide-right-button svg {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.menu-slide-left-button svg path,\r\n.menu-slide-right-button svg path {\r\n    color: var(--text-white);\r\n}\r\n\r\n.menu-slide-left-button svg {\r\n    rotate: 180deg;\r\n}\r\n\r\n#menu-item-1 {\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#menu-item-1 img {\r\n    object-position: 40% 25%;\r\n}\r\n\r\n#menu-item-2 {\r\n    translate: 100% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#menu-item-2 img {\r\n    object-position: 0% 65%;\r\n}\r\n\r\n#menu-item-3 {\r\n    translate: 200% 0;\r\n    transition: transform 700ms ease-in-out, width 100ms ease-out;\r\n}\r\n\r\n#menu-item-3 img {\r\n    object-position: 0% 75%;\r\n}\r\n\r\n/**/\r\n.menu-item-1-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.menu-item-2-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.menu-item-3-slide-1 {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n/**/\r\n.menu-item-1-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.menu-item-2-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n.menu-item-3-slide-2 {\r\n    transform: translateX(-200%);\r\n}\r\n\r\n@media only screen and (max-width:768px) {\r\n    .menu-content {\r\n        grid-template-columns: 2rem auto 2rem;\r\n        height: 100%;\r\n        width: 100%;\r\n        grid-template-columns: auto;\r\n        position: relative;\r\n    }\r\n\r\n    .menu-item {\r\n        flex-direction: column;\r\n        padding: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .menu-item-description {\r\n        border-radius: 0;\r\n        width: 100%;\r\n        height: 50%;\r\n\r\n        background-image: -moz-linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\r\n        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\r\n\r\n        transition: height 200ms cubic-bezier(.19, -0.1, .18, 1.19), transform 200ms cubic-bezier(.19, -0.1, .18, 1.19);\r\n    }\r\n\r\n    .menu-image-container {\r\n        height: 100%;\r\n        border-radius: 0;\r\n    }\r\n\r\n    .menu-item img {\r\n        border-radius: 0;\r\n    }\r\n\r\n    .hide-item-description {\r\n        height: 0;\r\n        transform: scaleY(0);\r\n    }\r\n\r\n    .menu-slide-left-button {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 5rem;\r\n        z-index: 15;\r\n        opacity: 0.5;\r\n    }\r\n\r\n    .menu-slide-right-button {\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 5rem;\r\n        z-index: 15;\r\n        opacity: 0.5;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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
    position: relative;

    transition: background-color 100ms ease-in-out;
}

.nav-button:hover {
    cursor: pointer;
    background-color: rgb(from var(--accent) r g b / 30%);
}

.nav-button:hover>h1 {
    transform: scale(115%);
}

.nav-button-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
    background-color: var(--text-alt);
    z-index: 10;
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
}`, "",{"version":3,"sources":["webpack://./src/css/navBar.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,0CAA0C;IAC1C,6BAA6B;IAC7B,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,qBAAqB;IACrB,eAAe;;IAEf,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;;IAElB,8CAA8C;AAClD;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;IACR,cAAc;IACd,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,eAAe;IACf,qDAAqD;AACzD;;AAEA;IACI,UAAU;IACV,WAAW;AACf","sourcesContent":["nav {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr) 5rem;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    background-color: var(--secondary);\r\n}\r\n\r\n.nav-button>h1 {\r\n    user-select: none;\r\n    padding: 0;\r\n    letter-spacing: 1.5pt;\r\n    font-size: 20pt;\r\n\r\n    transition: transform 100ms ease-in-out;\r\n}\r\n\r\n.nav-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n\r\n    transition: background-color 100ms ease-in-out;\r\n}\r\n\r\n.nav-button:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.nav-button:hover>h1 {\r\n    transform: scale(115%);\r\n}\r\n\r\n.nav-button-active::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 0.5rem;\r\n    background-color: var(--text-alt);\r\n    z-index: 10;\r\n}\r\n\r\n.nav-theme-button-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.theme-button {\r\n    margin: 0;\r\n    padding: 0;\r\n    appearance: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.theme-button:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(from var(--accent) r g b / 30%);\r\n}\r\n\r\n.theme-button>svg {\r\n    width: 50%;\r\n    height: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/BiteChalk/BiteChalk.ttf */ "./src/media/fonts/BiteChalk/BiteChalk.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/BiteChalk/BiteChalkBold.ttf */ "./src/media/fonts/BiteChalk/BiteChalkBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/BiteChalk/BiteChalkNormal.ttf */ "./src/media/fonts/BiteChalk/BiteChalkNormal.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/BiteChalk/BiteChalkSlim.ttf */ "./src/media/fonts/BiteChalk/BiteChalkSlim.ttf"), __webpack_require__.b);
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

    --text-alt: rgb(241, 227, 218);
    --background-alt: rgb(12, 6, 3);
    --primary-alt: rgb(175, 66, 4);
    --secondary-alt: rgb(138, 68, 28);
    --accent-alt: rgb(238, 117, 47);
}

:root[data-theme="dark"] {
    --text: rgb(241, 227, 218);
    --background: rgb(12, 6, 3);
    --primary: rgb(175, 66, 4);
    --secondary: rgb(138, 68, 28);
    --accent: rgb(238, 117, 47);

    --text-alt: rgb(37, 23, 14);
    --background-alt: rgb(252, 246, 243);
    --primary-alt: rgb(251, 143, 80);
    --secondary-alt: rgb(235, 160, 117);
    --accent-alt: rgb(208, 87, 17);
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

    -moz-user-select: none;
    user-select: none;
}

.main-content>img {
    position: fixed;
    object-position: 25% 75%;
    z-index: -1;
    filter: brightness(0.5);
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,iCAAiC;IACjC,sCAAsC;IACtC,gCAAgC;IAChC,kCAAkC;IAClC,mCAAmC;IACnC,qCAAqC;IACrC,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;IAC5B,+BAA+B;IAC/B,0BAA0B;;IAE1B,8BAA8B;IAC9B,+BAA+B;IAC/B,8BAA8B;IAC9B,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,0BAA0B;IAC1B,6BAA6B;IAC7B,2BAA2B;;IAE3B,2BAA2B;IAC3B,oCAAoC;IACpC,gCAAgC;IAChC,mCAAmC;IACnC,8BAA8B;AAClC;;;AAGA;IACI,wBAAwB;IACxB,4CAAkD;AACtD;;AAEA;IACI,6BAA6B;IAC7B,4CAAsD;AAC1D;;AAEA;IACI,+BAA+B;IAC/B,4CAAwD;AAC5D;;AAEA;IACI,6BAA6B;IAC7B,4CAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,aAAa;IACb,cAAc;IACd,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,qKAAqK;IACrK,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;;IAEhB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,uBAAuB;AAC3B","sourcesContent":[":root {\r\n    --text-white: rgb(241, 227, 218);\r\n    --text-black: rgb(37, 23, 14);\r\n    --background-black: rgb(12, 6, 3);\r\n    --background-white: rgb(252, 246, 243);\r\n    --primary-black: rgb(175, 66, 4);\r\n    --primary-white: rgb(251, 143, 80);\r\n    --secondary-black: rgb(138, 68, 28);\r\n    --secondary-white: rgb(235, 160, 117);\r\n    --accent-black: rgb(238, 117, 47);\r\n    --accent-white: rgb(208, 87, 17);\r\n}\r\n\r\n:root[data-theme=\"light\"] {\r\n    --text: rgb(37, 23, 14);\r\n    --background: rgb(252, 246, 243);\r\n    --primary: rgb(251, 143, 80);\r\n    --secondary: rgb(235, 160, 117);\r\n    --accent: rgb(208, 87, 17);\r\n\r\n    --text-alt: rgb(241, 227, 218);\r\n    --background-alt: rgb(12, 6, 3);\r\n    --primary-alt: rgb(175, 66, 4);\r\n    --secondary-alt: rgb(138, 68, 28);\r\n    --accent-alt: rgb(238, 117, 47);\r\n}\r\n\r\n:root[data-theme=\"dark\"] {\r\n    --text: rgb(241, 227, 218);\r\n    --background: rgb(12, 6, 3);\r\n    --primary: rgb(175, 66, 4);\r\n    --secondary: rgb(138, 68, 28);\r\n    --accent: rgb(238, 117, 47);\r\n\r\n    --text-alt: rgb(37, 23, 14);\r\n    --background-alt: rgb(252, 246, 243);\r\n    --primary-alt: rgb(251, 143, 80);\r\n    --secondary-alt: rgb(235, 160, 117);\r\n    --accent-alt: rgb(208, 87, 17);\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk';\r\n    src: url('../media/fonts/BiteChalk/BiteChalk.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Bold';\r\n    src: url('../media/fonts/BiteChalk/BiteChalkBold.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Normal';\r\n    src: url('../media/fonts/BiteChalk/BiteChalkNormal.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'BiteChalk Slim';\r\n    src: url('../media/fonts/BiteChalk/BiteChalkSlim.ttf');\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    height: 100vh;\r\n    height: 100dvh;\r\n    background-color: var(--background);\r\n    overflow: hidden;\r\n}\r\n\r\nbody * {\r\n    font-family: 'BiteChalk Slim', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    color: var(--text);\r\n    margin: 0;\r\n}\r\n\r\n.hide {\r\n    display: none !important;\r\n}\r\n\r\nnav {\r\n    height: 5rem;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nmain {\r\n    height: calc(100dvh - 5rem);\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.main-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    position: relative;\r\n    overflow-y: auto;\r\n\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.main-content>img {\r\n    position: fixed;\r\n    object-position: 25% 75%;\r\n    z-index: -1;\r\n    filter: brightness(0.5);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/feedMe.css":
/*!****************************!*\
  !*** ./src/css/feedMe.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./feedMe.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/feedMe.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_feedMe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/navBar.css":
/*!****************************!*\
  !*** ./src/css/navBar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/js/createDom.js":
/*!*****************************!*\
  !*** ./src/js/createDom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/js/templates.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.js */ "./src/js/media.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/navBar.css */ "./src/css/navBar.css");
/* harmony import */ var _css_feedMe_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/feedMe.css */ "./src/css/feedMe.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");







// Navigation Bar
document.body.appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav', 'navBar', 'navBar'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-menu-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-title-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-button', 'nav-contact-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-title', 'nav-title', 'Feed Me'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-menu-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-menu', 'nav-menu', 'Menu'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-contact-button').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'nav-contact', 'nav-contact', 'Contact'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title-button').classList.add('nav-button-active');

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'nav-theme-button-container', 'nav-theme-button-container'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-theme-button-container').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.sunSvg + _media_js__WEBPACK_IMPORTED_MODULE_1__.moonSvg;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-theme-button-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('checkbox', 'theme-button', 'theme-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button').classList.add("hide");
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button').classList.add("hide");

// Main content
document.body.appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main', 'main', 'main'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'main-content', 'main-content'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.background));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-content', 'menu-content'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'feedMe-content', 'feedMe-content'));
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

// Menu content
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-slide-left-button', 'menu-slide-left-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-items', 'menu-items'));


(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-slide-right-button', 'menu-slide-right-button'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-slide-left-button').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.arrow;
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-slide-right-button').innerHTML += _media_js__WEBPACK_IMPORTED_MODULE_1__.arrow;


(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-items').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item', 'menu-item-1'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-items').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item', 'menu-item-2'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-items').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item', 'menu-item-3'));

// Menu Item 1
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-1').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-image-container', 'menu-image-1-container'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-1-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.steak));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-1-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Steak'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-1').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item-description', 'menu-item-description-1'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-1').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'menu-description-text', 'menu-description-text-1'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-description-text-1').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Menu Item 2
;(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-2').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-image-container', 'menu-image-2-container'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-2-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.sushi));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-2-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Sushi'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-2').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item-description', 'menu-item-description-2'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-2').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'menu-description-text', 'menu-description-text-2'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-description-text-2').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Menu Item 3
;(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-3').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-image-container', 'menu-image-3-container'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-3-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createImage)('', '', _media_js__WEBPACK_IMPORTED_MODULE_1__.rice));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-image-3-container').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', '', '', 'Rice'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-3').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('', 'menu-item-description', 'menu-item-description-3'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-3').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'menu-description-text', 'menu-description-text-3'));

(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-description-text-3').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis quisquam tempore. Eligendi suscipit, labore perferendis tempore earum enim impedit reprehenderit dolores aliquid doloremque ipsam! Nesciunt repellat incidunt consequuntur est libero? Perferendis culpa deleniti qui tenetur reiciendis, ducimus cum magni neque nulla nobis, minus quo a vel modi similique excepturi!'

// Contact menu
;(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('contact-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'contact-1', 'contact-1', 'contact-1'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('contact-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'contact-2', 'contact-2', 'contact-2'));
(0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('contact-content').appendChild((0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'contact-3', 'contact-3', 'contact-3'));

/***/ }),

/***/ "./src/js/domElements.js":
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
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
/* harmony export */   menuItem1: () => (/* binding */ menuItem1),
/* harmony export */   menuItem2: () => (/* binding */ menuItem2),
/* harmony export */   menuItem3: () => (/* binding */ menuItem3),
/* harmony export */   menuItemDescription1: () => (/* binding */ menuItemDescription1),
/* harmony export */   menuItemDescription2: () => (/* binding */ menuItemDescription2),
/* harmony export */   menuItemDescription3: () => (/* binding */ menuItemDescription3),
/* harmony export */   menuSlideLeftButton: () => (/* binding */ menuSlideLeftButton),
/* harmony export */   menuSlideRightButton: () => (/* binding */ menuSlideRightButton),
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
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/js/templates.js");
/* harmony import */ var _createDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDom.js */ "./src/js/createDom.js");



const body = document.body;

// Navigation Bar
const navBar = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('navBar');

const navTitleButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title-button');
const navMenuButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-menu-button');
const navContactButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-contact-button');

const navTitle = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-title');
const navMenu = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-menu');
const navContact = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-contact');

const navThemeButtonContainer = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('nav-theme-button-container');
const sunThemeButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('sun-theme-button');
const moonThemeButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('moon-theme-button');

// Main content
const main = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main');
const mainContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('main-content');
const feedMeContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('feedMe-content');
const menuContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-content');
const contactContent = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('contact-content');

// FeedMe content
const aboutRestaurant = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('about-restaurant');
const topDish = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('top-dish');
const address = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('address');
const workingTime = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('working-time');
const dishes = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes');
const socialMedia = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('social-media');
const dishesImage1 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes-image-1');
const dishesImage2 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes-image-2');
const dishesImage3 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('dishes-image-3');

const menuItem1 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-1');
const menuItem2 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-2');
const menuItem3 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-3');

const menuSlideLeftButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-slide-left-button');
const menuSlideRightButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-slide-right-button');

const menuItemDescription1 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-1');
const menuItemDescription2 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-2');
const menuItemDescription3 = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.getById)('menu-item-description-3');



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/js/templates.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/js/domElements.js");
/* harmony import */ var _slideShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideShow.js */ "./src/js/slideShow.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");





const dishesArray = [1, 2, 3];

function runSlideShow() {
    (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)(_domElements_js__WEBPACK_IMPORTED_MODULE_1__.dishesImage1, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.dishesImage2, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.dishesImage3, 'dishes-image', dishesArray, 'right');

    setTimeout(runSlideShow, 5000);
}

runSlideShow();

_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navTitleButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navTitleButton.classList.add('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navMenuButton.classList.remove('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navContactButton.classList.remove('nav-button-active');

    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.remove('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.add('hide');
});
_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navMenuButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navTitleButton.classList.remove('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navMenuButton.classList.add('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navContactButton.classList.remove('nav-button-active');

    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.remove('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.add('hide');
});
_domElements_js__WEBPACK_IMPORTED_MODULE_1__.navContactButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navTitleButton.classList.remove('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navMenuButton.classList.remove('nav-button-active');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.navContactButton.classList.add('nav-button-active');

    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.feedMeContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuContent.classList.add('hide');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.contactContent.classList.remove('hide');
});

let menuItemsArray = [1, 2, 3];

_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuSlideLeftButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.add('hide-item-description');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.add('hide-item-description');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.add('hide-item-description');
    setTimeout(() => {
        (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)(_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem1, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem2, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem3, 'menu-item', menuItemsArray, 'left');
        setTimeout(() => {
            _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.remove('hide-item-description');
        }, 700);
    }, 150);
});

_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuSlideRightButton.addEventListener('click', function () {
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.add('hide-item-description');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.add('hide-item-description');
    _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.add('hide-item-description');
    setTimeout(() => {
        (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)(_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem1, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem2, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem3, 'menu-item', menuItemsArray, 'right');
        setTimeout(() => {
            _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.remove('hide-item-description');
        }, 700);
    }, 150);
});

document.addEventListener("keydown", (event) => {
    if (event.key == 'ArrowLeft') {
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.add('hide-item-description');
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.add('hide-item-description');
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.add('hide-item-description');
        setTimeout(() => {
            (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)(_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem1, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem2, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem3, 'menu-item', menuItemsArray, 'left');
            setTimeout(() => {
                _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.remove('hide-item-description');
            }, 700);
        }, 150);
    } else if (event.key == 'ArrowRight') {
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.add('hide-item-description');
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.add('hide-item-description');
        _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.add('hide-item-description');
        setTimeout(() => {
            (0,_slideShow_js__WEBPACK_IMPORTED_MODULE_2__.slideShow)(_domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem1, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem2, _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItem3, 'menu-item', menuItemsArray, 'right');
            setTimeout(() => {
                _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription1.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription2.classList.remove('hide-item-description'); _domElements_js__WEBPACK_IMPORTED_MODULE_1__.menuItemDescription3.classList.remove('hide-item-description');
            }, 700);
        }, 150);
    }
})

/***/ }),

/***/ "./src/js/media.js":
/*!*************************!*\
  !*** ./src/js/media.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
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
/* harmony import */ var _media_images_Background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/Background.jpg */ "./src/media/images/Background.jpg");
/* harmony import */ var _media_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/steak.jpg */ "./src/media/images/steak.jpg");
/* harmony import */ var _media_images_Sushi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/Sushi.jpg */ "./src/media/images/Sushi.jpg");
/* harmony import */ var _media_images_Rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/Rice.jpg */ "./src/media/images/Rice.jpg");





const sunSvg = /*html*/ '<svg xmlns="http://www.w3.org/2000/svg" class="sun-theme-button" id="sun-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>'

const moonSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" class="moon-theme-button" id="moon-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"/></svg>`

const xLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"/></svg>`;

const instagramLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>`;

const emailSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"/></svg>`;

const background = _media_images_Background_jpg__WEBPACK_IMPORTED_MODULE_0__;

const steak = _media_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__;
const sushi = _media_images_Sushi_jpg__WEBPACK_IMPORTED_MODULE_2__;
const rice = _media_images_Rice_jpg__WEBPACK_IMPORTED_MODULE_3__;

const arrow = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"/></svg>`



/***/ }),

/***/ "./src/js/slideShow.js":
/*!*****************************!*\
  !*** ./src/js/slideShow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideShow: () => (/* binding */ slideShow)
/* harmony export */ });
function slideShow(slide1, slide2, slide3, className, array, direction) {
    if (direction == 'right') {
        let ele = array.shift();
        array.push(ele);

        slide1.classList.remove(`${className}-1-slide-1`);
        slide1.classList.remove(`${className}-1-slide-2`);

        slide2.classList.remove(`${className}-2-slide-1`);
        slide2.classList.remove(`${className}-2-slide-2`);

        slide3.classList.remove(`${className}-3-slide-1`);
        slide3.classList.remove(`${className}-3-slide-2`);

        if (array.toString() == [1, 2, 3]) {

        } else if (array.toString() == [2, 3, 1]) {

            slide1.classList.add(`${className}-1-slide-1`);
            slide2.classList.add(`${className}-2-slide-1`);
            slide3.classList.add(`${className}-3-slide-1`);
        } else if (array.toString() == [3, 1, 2]) {

            slide1.classList.add(`${className}-1-slide-2`);
            slide2.classList.add(`${className}-2-slide-2`);
            slide3.classList.add(`${className}-3-slide-2`);
        }
    } else if (direction == 'left') {
        let ele = array.pop();
        array.unshift(ele);

        slide1.classList.remove(`${className}-1-slide-1`);
        slide1.classList.remove(`${className}-1-slide-2`);

        slide2.classList.remove(`${className}-2-slide-1`);
        slide2.classList.remove(`${className}-2-slide-2`);

        slide3.classList.remove(`${className}-3-slide-1`);
        slide3.classList.remove(`${className}-3-slide-2`);

        if (array.toString() == [1, 2, 3]) {

        } else if (array.toString() == [2, 3, 1]) {
            slide1.classList.add(`${className}-1-slide-1`);
            slide2.classList.add(`${className}-2-slide-1`);
            slide3.classList.add(`${className}-3-slide-1`);
        } else if (array.toString() == [3, 1, 2]) {

            slide1.classList.add(`${className}-1-slide-2`);
            slide2.classList.add(`${className}-2-slide-2`);
            slide3.classList.add(`${className}-3-slide-2`);
        }
    }
}



/***/ }),

/***/ "./src/js/templates.js":
/*!*****************************!*\
  !*** ./src/js/templates.js ***!
  \*****************************/
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

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/js/templates.js");


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

/***/ "./src/media/fonts/BiteChalk/BiteChalk.ttf":
/*!*************************************************!*\
  !*** ./src/media/fonts/BiteChalk/BiteChalk.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66504b1326be5629ec10.ttf";

/***/ }),

/***/ "./src/media/fonts/BiteChalk/BiteChalkBold.ttf":
/*!*****************************************************!*\
  !*** ./src/media/fonts/BiteChalk/BiteChalkBold.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c408ab66fee2a2f12f59.ttf";

/***/ }),

/***/ "./src/media/fonts/BiteChalk/BiteChalkNormal.ttf":
/*!*******************************************************!*\
  !*** ./src/media/fonts/BiteChalk/BiteChalkNormal.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dfb148ceb150f5a1f8f.ttf";

/***/ }),

/***/ "./src/media/fonts/BiteChalk/BiteChalkSlim.ttf":
/*!*****************************************************!*\
  !*** ./src/media/fonts/BiteChalk/BiteChalkSlim.ttf ***!
  \*****************************************************/
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
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/domElements.js");
/******/ 	__webpack_require__("./src/js/theme.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/createDom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFNBQVMsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFNBQVMsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sU0FBUyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLGNBQWMsV0FBVyxVQUFVLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxV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c0RBQU87QUFDZixRQUFRLHNEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFPO0FBQ2YsUUFBUSxzREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLHNEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlCUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9mZWVkTWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9uYXZCYXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2ZlZWRNZS5jc3M/ODNlNiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL21lbnUuY3NzP2RkZWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9uYXZCYXIuY3NzP2M2NTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jcmVhdGVEb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3NsaWRlU2hvdy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZlZWRNZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiYSBhIGJcIlxyXG4gICAgICAgIFwiYyBkIGJcIlxyXG4gICAgICAgIFwiZSBmIGJcIjtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjVmciAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IHtcclxuICAgIGdyaWQtYXJlYTogYTtcclxufVxyXG5cclxuLnRvcC1kaXNoIHtcclxuICAgIGdyaWQtYXJlYTogYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG59XHJcblxyXG4ud29ya2luZy10aW1lIHtcclxuICAgIGdyaWQtYXJlYTogZDtcclxufVxyXG5cclxuLmRpc2hlcyB7XHJcbiAgICBncmlkLWFyZWE6IGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50LFxyXG4udG9wLWRpc2gsXHJcbi5hZGRyZXNzLFxyXG4ud29ya2luZy10aW1lLFxyXG4uZGlzaGVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1zZWNvbmRhcnkpIHIgZyBiIC8gMzclKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGdyaWQtYXJlYTogZjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tc2Vjb25kYXJ5KSByIGcgYiAvIDM3JSk7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyPmgyIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1hY2NlbnQpIHIgZyBiIC8gMzAlKTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcjpob3Zlcj5oMiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwNyUpO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCAqLFxyXG4udG9wLWRpc2ggKixcclxuLmFkZHJlc3MgKixcclxuLndvcmtpbmctdGltZSAqLFxyXG4uZGlzaGVzICosXHJcbi5zb2NpYWwtbWVkaWEgKiB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XHJcbn1cclxuXHJcbi5hYm91dC1yZXN0YXVyYW50IGltZyxcclxuLnRvcC1kaXNoIGltZyxcclxuLmFkZHJlc3MgaW1nLFxyXG4ud29ya2luZy10aW1lIGltZyxcclxuLmRpc2hlcyBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA0MCUgMjUlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMTAwbXMgZWFzZS1vdXQsIHNjYWxlIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udG9wLWRpc2g6aG92ZXIgaW1nIHtcclxuICAgIHNjYWxlOiAxLjAyNTtcclxufVxyXG5cclxuLmRpc2hlczpob3ZlciAuZGlzaGVzLWltYWdlLTEsXHJcbi5kaXNoZXM6aG92ZXIgLmRpc2hlcy1pbWFnZS0yLFxyXG4uZGlzaGVzOmhvdmVyIC5kaXNoZXMtaW1hZ2UtMyB7XHJcbiAgICB3aWR0aDogMTA1JTtcclxufVxyXG5cclxuLmFib3V0LXJlc3RhdXJhbnQ6OmFmdGVyLFxyXG4udG9wLWRpc2g6OmFmdGVyLFxyXG4uYWRkcmVzczo6YWZ0ZXIsXHJcbi53b3JraW5nLXRpbWU6OmFmdGVyLFxyXG4uZGlzaGVzOjphZnRlcixcclxuLnNvY2lhbC1tZWRpYTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCBoMixcclxuLnRvcC1kaXNoIGgyLFxyXG4uYWRkcmVzcyBoMixcclxuLndvcmtpbmctdGltZSBoMixcclxuLmRpc2hlcyBoMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcclxuICAgIHdvcmQtc3BhY2luZzogMXB0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEgaDIsXHJcbi5zb2NpYWwtbWVkaWEgc3ZnIHtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJwdDtcclxuICAgIHdvcmQtc3BhY2luZzogMXB0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGRyZXNzIGgyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB0O1xyXG59XHJcblxyXG4uYWJvdXQtcmVzdGF1cmFudCBoMiB7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHQsIDE2cHQsIDEycHQpO1xyXG59XHJcblxyXG4uZGlzaGVzIGgyLFxyXG4udG9wLWRpc2ggaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgTm9ybWFsJztcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBwdCwgMjRwdCwgMTJwdCk7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVwdDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB0O1xyXG59XHJcblxyXG4jZGlzaGVzLWltYWdlLTEge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuI2Rpc2hlcy1pbWFnZS0yIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjUlO1xyXG4gICAgdHJhbnNsYXRlOiAxMDAlIDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jZGlzaGVzLWltYWdlLTMge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA3NSU7XHJcbiAgICB0cmFuc2xhdGU6IDIwMCUgMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi8qKi9cclxuLmRpc2hlcy1pbWFnZS0xLXNsaWRlLTEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLmRpc2hlcy1pbWFnZS0yLXNsaWRlLTEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLmRpc2hlcy1pbWFnZS0zLXNsaWRlLTEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLyoqL1xyXG4uZGlzaGVzLWltYWdlLTEtc2xpZGUtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG59XHJcblxyXG4uZGlzaGVzLWltYWdlLTItc2xpZGUtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG59XHJcblxyXG4uZGlzaGVzLWltYWdlLTMtc2xpZGUtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5mZWVkTWUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAwIDVyZW0gMDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICBcImJcIlxyXG4gICAgICAgICAgICBcImFcIlxyXG4gICAgICAgICAgICBcImNcIlxyXG4gICAgICAgICAgICBcImRcIlxyXG4gICAgICAgICAgICBcImVcIlxyXG4gICAgICAgICAgICBcImZcIjtcclxuXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXJlbSByZXBlYXQoNSwgN3JlbSk7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZmVlZE1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiOzs7ZUFHVzs7SUFFWCxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7Ozs7O0lBS0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLHdEQUF3RDtJQUN4RCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdEQUF3RDs7SUFFeEQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7OztJQU1JLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7Ozs7SUFLSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLFdBQVc7QUFDZjs7QUFFQTs7Ozs7O0lBTUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsNkVBQTZFO0lBQzdFLFdBQVc7O0lBRVgsb0JBQW9CO0FBQ3hCOztBQUVBOzs7OztJQUtJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsNkRBQTZEO0FBQ2pFOztBQUVBLEdBQUc7QUFDSDtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSxHQUFHO0FBQ0g7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qjs7Ozs7O2VBTU87O1FBRVAsMEJBQTBCO1FBQzFCLHlDQUF5QztJQUM3QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mZWVkTWUtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgXFxcImEgYSBiXFxcIlxcclxcbiAgICAgICAgXFxcImMgZCBiXFxcIlxcclxcbiAgICAgICAgXFxcImUgZiBiXFxcIjtcXHJcXG5cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC41ZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjVmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQge1xcclxcbiAgICBncmlkLWFyZWE6IGE7XFxyXFxufVxcclxcblxcclxcbi50b3AtZGlzaCB7XFxyXFxuICAgIGdyaWQtYXJlYTogYjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICAgIGdyaWQtYXJlYTogYztcXHJcXG59XFxyXFxuXFxyXFxuLndvcmtpbmctdGltZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2hlcyB7XFxyXFxuICAgIGdyaWQtYXJlYTogZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCxcXHJcXG4udG9wLWRpc2gsXFxyXFxuLmFkZHJlc3MsXFxyXFxuLndvcmtpbmctdGltZSxcXHJcXG4uZGlzaGVzIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tc2Vjb25kYXJ5KSByIGcgYiAvIDM3JSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBncmlkLWFyZWE6IGY7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tc2Vjb25kYXJ5KSByIGcgYiAvIDM3JSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEtaWNvbi1jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyPmgyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1hY2NlbnQpIHIgZyBiIC8gMzAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcjpob3Zlcj5oMiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTA3JSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50ICosXFxyXFxuLnRvcC1kaXNoICosXFxyXFxuLmFkZHJlc3MgKixcXHJcXG4ud29ya2luZy10aW1lICosXFxyXFxuLmRpc2hlcyAqLFxcclxcbi5zb2NpYWwtbWVkaWEgKiB7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQgaW1nLFxcclxcbi50b3AtZGlzaCBpbWcsXFxyXFxuLmFkZHJlc3MgaW1nLFxcclxcbi53b3JraW5nLXRpbWUgaW1nLFxcclxcbi5kaXNoZXMgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDQwJSAyNSU7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2Utb3V0LCBzY2FsZSAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1kaXNoOmhvdmVyIGltZyB7XFxyXFxuICAgIHNjYWxlOiAxLjAyNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2hlczpob3ZlciAuZGlzaGVzLWltYWdlLTEsXFxyXFxuLmRpc2hlczpob3ZlciAuZGlzaGVzLWltYWdlLTIsXFxyXFxuLmRpc2hlczpob3ZlciAuZGlzaGVzLWltYWdlLTMge1xcclxcbiAgICB3aWR0aDogMTA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQ6OmFmdGVyLFxcclxcbi50b3AtZGlzaDo6YWZ0ZXIsXFxyXFxuLmFkZHJlc3M6OmFmdGVyLFxcclxcbi53b3JraW5nLXRpbWU6OmFmdGVyLFxcclxcbi5kaXNoZXM6OmFmdGVyLFxcclxcbi5zb2NpYWwtbWVkaWE6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuXFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudCBoMixcXHJcXG4udG9wLWRpc2ggaDIsXFxyXFxuLmFkZHJlc3MgaDIsXFxyXFxuLndvcmtpbmctdGltZSBoMixcXHJcXG4uZGlzaGVzIGgyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDFwdDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEgaDIsXFxyXFxuLnNvY2lhbC1tZWRpYSBzdmcge1xcclxcbiAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJwdDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAxcHQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyBoMiB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAycHQ7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyNHB0LCAxNnB0LCAxMnB0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2hlcyBoMixcXHJcXG4udG9wLWRpc2ggaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBOb3JtYWwnO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHQsIDI0cHQsIDEycHQpO1xcclxcbiAgICBib3R0b206IDEwJTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHQ7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogMnB0O1xcclxcbn1cXHJcXG5cXHJcXG4jZGlzaGVzLWltYWdlLTEge1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNkaXNoZXMtaW1hZ2UtMiB7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjUlO1xcclxcbiAgICB0cmFuc2xhdGU6IDEwMCUgMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zIGVhc2UtaW4tb3V0LCB3aWR0aCAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpc2hlcy1pbWFnZS0zIHtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA3NSU7XFxyXFxuICAgIHRyYW5zbGF0ZTogMjAwJSAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiovXFxyXFxuLmRpc2hlcy1pbWFnZS0xLXNsaWRlLTEge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzLWltYWdlLTItc2xpZGUtMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMtaW1hZ2UtMy1zbGlkZS0xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqL1xcclxcbi5kaXNoZXMtaW1hZ2UtMS1zbGlkZS0yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2hlcy1pbWFnZS0yLXNsaWRlLTIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzLWltYWdlLTMtc2xpZGUtMiB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xcclxcbiAgICAuZmVlZE1lLWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogMHJlbSAwIDVyZW0gMDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICAgICAgXFxcImJcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImFcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImNcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImRcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImVcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImZcXFwiO1xcclxcblxcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1cmVtIHJlcGVhdCg1LCA3cmVtKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSBhdXRvIDVyZW07XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLm1lbnUtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDAgMXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZW51LWltYWdlLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubWVudS1pbWFnZS1jb250YWluZXI6aG92ZXIgaW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHNjYWxlOiAxLjAyNTtcclxufVxyXG5cclxuLm1lbnUtaW1hZ2UtY29udGFpbmVyIGgyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxcHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBOb3JtYWwnO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCg1MHB0LCAyNHB0LCAxMnB0KTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVwdDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB0O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xyXG59XHJcblxyXG4ubWVudS1pdGVtIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2Utb3V0LCBoZWlnaHQgMTAwbXMgZWFzZS1vdXQsIHNjYWxlIDEwMG1zIGVhc2Utb3V0O1xyXG5cclxuICAgIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xyXG5cclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxMDAlKTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBjdWJpYy1iZXppZXIoLjE5LCAtMC4xLCAuMTgsIDEuMTkpLCB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKC4xOSwgLTAuMSwgLjE4LCAxLjE5KTtcclxufVxyXG5cclxuLmhpZGUtaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIGgyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5tZW51LXNsaWRlLWxlZnQtYnV0dG9uLFxyXG4ubWVudS1zbGlkZS1yaWdodC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LXNsaWRlLWxlZnQtYnV0dG9uIHN2ZyxcclxuLm1lbnUtc2xpZGUtcmlnaHQtYnV0dG9uIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lbnUtc2xpZGUtbGVmdC1idXR0b24gc3ZnIHBhdGgsXHJcbi5tZW51LXNsaWRlLXJpZ2h0LWJ1dHRvbiBzdmcgcGF0aCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XHJcbn1cclxuXHJcbi5tZW51LXNsaWRlLWxlZnQtYnV0dG9uIHN2ZyB7XHJcbiAgICByb3RhdGU6IDE4MGRlZztcclxufVxyXG5cclxuI21lbnUtaXRlbS0xIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNtZW51LWl0ZW0tMSBpbWcge1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA0MCUgMjUlO1xyXG59XHJcblxyXG4jbWVudS1pdGVtLTIge1xyXG4gICAgdHJhbnNsYXRlOiAxMDAlIDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jbWVudS1pdGVtLTIgaW1nIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNjUlO1xyXG59XHJcblxyXG4jbWVudS1pdGVtLTMge1xyXG4gICAgdHJhbnNsYXRlOiAyMDAlIDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jbWVudS1pdGVtLTMgaW1nIHtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMCUgNzUlO1xyXG59XHJcblxyXG4vKiovXHJcbi5tZW51LWl0ZW0tMS1zbGlkZS0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tMi1zbGlkZS0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tMy1zbGlkZS0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi8qKi9cclxuLm1lbnUtaXRlbS0xLXNsaWRlLTIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxufVxyXG5cclxuLm1lbnUtaXRlbS0yLXNsaWRlLTIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxufVxyXG5cclxuLm1lbnUtaXRlbS0zLXNsaWRlLTIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAubWVudS1jb250ZW50IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0byAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zIGN1YmljLWJlemllciguMTksIC0wLjEsIC4xOCwgMS4xOSksIHRyYW5zZm9ybSAyMDBtcyBjdWJpYy1iZXppZXIoLjE5LCAtMC4xLCAuMTgsIDEuMTkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbSBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGUtaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXNsaWRlLWxlZnQtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1zbGlkZS1yaWdodC1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCw2RUFBNkU7SUFDN0UsV0FBVzs7SUFFWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkVBQTZFOztJQUU3RSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxzR0FBc0c7SUFDdEcsaUdBQWlHOztJQUVqRyw0QkFBNEI7O0lBRTVCLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQiw4R0FBOEc7QUFDbEg7O0FBRUE7SUFDSSxRQUFRO0lBQ1Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsR0FBRztBQUNIO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLEdBQUc7QUFDSDtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLFlBQVk7UUFDWixXQUFXO1FBQ1gsMkJBQTJCO1FBQzNCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFdBQVc7O1FBRVgsdUdBQXVHO1FBQ3ZHLGtHQUFrRzs7UUFFbEcsK0dBQStHO0lBQ25IOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51LWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIGF1dG8gNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjsgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAwIDAgMXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZS1jb250YWluZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuXFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZS1jb250YWluZXI6aG92ZXIgaW1nIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBzY2FsZTogMS4wMjU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWltYWdlLWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTE7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVwdDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAxcHQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBOb3JtYWwnO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHQsIDI0cHQsIDEycHQpO1xcclxcbiAgICBib3R0b206IDUlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB0O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IDJwdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2Utb3V0LCBoZWlnaHQgMTAwbXMgZWFzZS1vdXQsIHNjYWxlIDEwMG1zIGVhc2Utb3V0O1xcclxcblxcclxcbiAgICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xcclxcblxcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEwMCUpO1xcclxcblxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBjdWJpYy1iZXppZXIoLjE5LCAtMC4xLCAuMTgsIDEuMTkpLCB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKC4xOSwgLTAuMSwgLjE4LCAxLjE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiBoMiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zbGlkZS1sZWZ0LWJ1dHRvbixcXHJcXG4ubWVudS1zbGlkZS1yaWdodC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zbGlkZS1sZWZ0LWJ1dHRvbiBzdmcsXFxyXFxuLm1lbnUtc2xpZGUtcmlnaHQtYnV0dG9uIHN2ZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXNsaWRlLWxlZnQtYnV0dG9uIHN2ZyBwYXRoLFxcclxcbi5tZW51LXNsaWRlLXJpZ2h0LWJ1dHRvbiBzdmcgcGF0aCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2xpZGUtbGVmdC1idXR0b24gc3ZnIHtcXHJcXG4gICAgcm90YXRlOiAxODBkZWc7XFxyXFxufVxcclxcblxcclxcbiNtZW51LWl0ZW0tMSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3MDBtcyBlYXNlLWluLW91dCwgd2lkdGggMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNtZW51LWl0ZW0tMSBpbWcge1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDQwJSAyNSU7XFxyXFxufVxcclxcblxcclxcbiNtZW51LWl0ZW0tMiB7XFxyXFxuICAgIHRyYW5zbGF0ZTogMTAwJSAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1pdGVtLTIgaW1nIHtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA2NSU7XFxyXFxufVxcclxcblxcclxcbiNtZW51LWl0ZW0tMyB7XFxyXFxuICAgIHRyYW5zbGF0ZTogMjAwJSAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXMgZWFzZS1pbi1vdXQsIHdpZHRoIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1pdGVtLTMgaW1nIHtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwJSA3NSU7XFxyXFxufVxcclxcblxcclxcbi8qKi9cXHJcXG4ubWVudS1pdGVtLTEtc2xpZGUtMSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tMi1zbGlkZS0xIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS0zLXNsaWRlLTEge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiovXFxyXFxuLm1lbnUtaXRlbS0xLXNsaWRlLTIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLTItc2xpZGUtMiB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tMy1zbGlkZS0yIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XFxyXFxuICAgIC5tZW51LWNvbnRlbnQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG8gMnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWl0ZW0ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNTAlO1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcclxcblxcclxcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zIGN1YmljLWJlemllciguMTksIC0wLjEsIC4xOCwgMS4xOSksIHRyYW5zZm9ybSAyMDBtcyBjdWJpYy1iZXppZXIoLjE5LCAtMC4xLCAuMTgsIDEuMTkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWl0ZW0gaW1nIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUtaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1zbGlkZS1sZWZ0LWJ1dHRvbiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDVyZW07XFxyXFxuICAgICAgICB6LWluZGV4OiAxNTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1zbGlkZS1yaWdodC1idXR0b24ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE1O1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpIDVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbj5oMSB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm5hdi1idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uOmhvdmVyPmgxIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTE1JSk7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLWFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtYWx0KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1hY2NlbnQpIHIgZyBiIC8gMzAlKTtcclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbj5zdmcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTs7SUFFZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSA1cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24+aDEge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB0O1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uOmhvdmVyPmgxIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMTUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b24tYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGhlaWdodDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tYWNjZW50KSByIGcgYiAvIDMwJSk7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1idXR0b24+c3ZnIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvZm9udHMvQml0ZUNoYWxrL0JpdGVDaGFsay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrTm9ybWFsLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ZvbnRzL0JpdGVDaGFsay9CaXRlQ2hhbGtTbGltLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS10ZXh0LXdoaXRlOiByZ2IoMjQxLCAyMjcsIDIxOCk7XHJcbiAgICAtLXRleHQtYmxhY2s6IHJnYigzNywgMjMsIDE0KTtcclxuICAgIC0tYmFja2dyb3VuZC1ibGFjazogcmdiKDEyLCA2LCAzKTtcclxuICAgIC0tYmFja2dyb3VuZC13aGl0ZTogcmdiKDI1MiwgMjQ2LCAyNDMpO1xyXG4gICAgLS1wcmltYXJ5LWJsYWNrOiByZ2IoMTc1LCA2NiwgNCk7XHJcbiAgICAtLXByaW1hcnktd2hpdGU6IHJnYigyNTEsIDE0MywgODApO1xyXG4gICAgLS1zZWNvbmRhcnktYmxhY2s6IHJnYigxMzgsIDY4LCAyOCk7XHJcbiAgICAtLXNlY29uZGFyeS13aGl0ZTogcmdiKDIzNSwgMTYwLCAxMTcpO1xyXG4gICAgLS1hY2NlbnQtYmxhY2s6IHJnYigyMzgsIDExNywgNDcpO1xyXG4gICAgLS1hY2NlbnQtd2hpdGU6IHJnYigyMDgsIDg3LCAxNyk7XHJcbn1cclxuXHJcbjpyb290W2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XHJcbiAgICAtLXRleHQ6IHJnYigzNywgMjMsIDE0KTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MiwgMjQ2LCAyNDMpO1xyXG4gICAgLS1wcmltYXJ5OiByZ2IoMjUxLCAxNDMsIDgwKTtcclxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjM1LCAxNjAsIDExNyk7XHJcbiAgICAtLWFjY2VudDogcmdiKDIwOCwgODcsIDE3KTtcclxuXHJcbiAgICAtLXRleHQtYWx0OiByZ2IoMjQxLCAyMjcsIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQtYWx0OiByZ2IoMTIsIDYsIDMpO1xyXG4gICAgLS1wcmltYXJ5LWFsdDogcmdiKDE3NSwgNjYsIDQpO1xyXG4gICAgLS1zZWNvbmRhcnktYWx0OiByZ2IoMTM4LCA2OCwgMjgpO1xyXG4gICAgLS1hY2NlbnQtYWx0OiByZ2IoMjM4LCAxMTcsIDQ3KTtcclxufVxyXG5cclxuOnJvb3RbZGF0YS10aGVtZT1cImRhcmtcIl0ge1xyXG4gICAgLS10ZXh0OiByZ2IoMjQxLCAyMjcsIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMiwgNiwgMyk7XHJcbiAgICAtLXByaW1hcnk6IHJnYigxNzUsIDY2LCA0KTtcclxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMTM4LCA2OCwgMjgpO1xyXG4gICAgLS1hY2NlbnQ6IHJnYigyMzgsIDExNywgNDcpO1xyXG5cclxuICAgIC0tdGV4dC1hbHQ6IHJnYigzNywgMjMsIDE0KTtcclxuICAgIC0tYmFja2dyb3VuZC1hbHQ6IHJnYigyNTIsIDI0NiwgMjQzKTtcclxuICAgIC0tcHJpbWFyeS1hbHQ6IHJnYigyNTEsIDE0MywgODApO1xyXG4gICAgLS1zZWNvbmRhcnktYWx0OiByZ2IoMjM1LCAxNjAsIDExNyk7XHJcbiAgICAtLWFjY2VudC1hbHQ6IHJnYigyMDgsIDg3LCAxNyk7XHJcbn1cclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIEJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgTm9ybWFsJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIFNsaW0nO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwZHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5ib2R5ICoge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgU2xpbScsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNXJlbSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQ+aW1nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMjUlIDc1JTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsc0NBQXNDO0lBQ3RDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDBCQUEwQjs7SUFFMUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QiwyQkFBMkI7O0lBRTNCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyw4QkFBOEI7QUFDbEM7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBc0Q7QUFDMUQ7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNENBQXdEO0FBQzVEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRDQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxS0FBcUs7SUFDckssa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXRleHQtd2hpdGU6IHJnYigyNDEsIDIyNywgMjE4KTtcXHJcXG4gICAgLS10ZXh0LWJsYWNrOiByZ2IoMzcsIDIzLCAxNCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1ibGFjazogcmdiKDEyLCA2LCAzKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLXdoaXRlOiByZ2IoMjUyLCAyNDYsIDI0Myk7XFxyXFxuICAgIC0tcHJpbWFyeS1ibGFjazogcmdiKDE3NSwgNjYsIDQpO1xcclxcbiAgICAtLXByaW1hcnktd2hpdGU6IHJnYigyNTEsIDE0MywgODApO1xcclxcbiAgICAtLXNlY29uZGFyeS1ibGFjazogcmdiKDEzOCwgNjgsIDI4KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktd2hpdGU6IHJnYigyMzUsIDE2MCwgMTE3KTtcXHJcXG4gICAgLS1hY2NlbnQtYmxhY2s6IHJnYigyMzgsIDExNywgNDcpO1xcclxcbiAgICAtLWFjY2VudC13aGl0ZTogcmdiKDIwOCwgODcsIDE3KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3RbZGF0YS10aGVtZT1cXFwibGlnaHRcXFwiXSB7XFxyXFxuICAgIC0tdGV4dDogcmdiKDM3LCAyMywgMTQpO1xcclxcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTIsIDI0NiwgMjQzKTtcXHJcXG4gICAgLS1wcmltYXJ5OiByZ2IoMjUxLCAxNDMsIDgwKTtcXHJcXG4gICAgLS1zZWNvbmRhcnk6IHJnYigyMzUsIDE2MCwgMTE3KTtcXHJcXG4gICAgLS1hY2NlbnQ6IHJnYigyMDgsIDg3LCAxNyk7XFxyXFxuXFxyXFxuICAgIC0tdGV4dC1hbHQ6IHJnYigyNDEsIDIyNywgMjE4KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWFsdDogcmdiKDEyLCA2LCAzKTtcXHJcXG4gICAgLS1wcmltYXJ5LWFsdDogcmdiKDE3NSwgNjYsIDQpO1xcclxcbiAgICAtLXNlY29uZGFyeS1hbHQ6IHJnYigxMzgsIDY4LCAyOCk7XFxyXFxuICAgIC0tYWNjZW50LWFsdDogcmdiKDIzOCwgMTE3LCA0Nyk7XFxyXFxufVxcclxcblxcclxcbjpyb290W2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuICAgIC0tdGV4dDogcmdiKDI0MSwgMjI3LCAyMTgpO1xcclxcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxMiwgNiwgMyk7XFxyXFxuICAgIC0tcHJpbWFyeTogcmdiKDE3NSwgNjYsIDQpO1xcclxcbiAgICAtLXNlY29uZGFyeTogcmdiKDEzOCwgNjgsIDI4KTtcXHJcXG4gICAgLS1hY2NlbnQ6IHJnYigyMzgsIDExNywgNDcpO1xcclxcblxcclxcbiAgICAtLXRleHQtYWx0OiByZ2IoMzcsIDIzLCAxNCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1hbHQ6IHJnYigyNTIsIDI0NiwgMjQzKTtcXHJcXG4gICAgLS1wcmltYXJ5LWFsdDogcmdiKDI1MSwgMTQzLCA4MCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWFsdDogcmdiKDIzNSwgMTYwLCAxMTcpO1xcclxcbiAgICAtLWFjY2VudC1hbHQ6IHJnYigyMDgsIDg3LCAxNyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgQm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrQm9sZC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0ZUNoYWxrIE5vcm1hbCc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrTm9ybWFsLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCaXRlQ2hhbGsgU2xpbSc7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9tZWRpYS9mb250cy9CaXRlQ2hhbGsvQml0ZUNoYWxrU2xpbS50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ICoge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JpdGVDaGFsayBTbGltJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDVyZW0pO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQ+aW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IDI1JSA3NSU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZlZWRNZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZlZWRNZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUlucHV0LCBjcmVhdGVJbWFnZSwgZ2V0QnlJZCB9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcclxuaW1wb3J0IHsgc3VuU3ZnLCBtb29uU3ZnLCBiYWNrZ3JvdW5kLCBzdGVhaywgc3VzaGksIHJpY2UsIHhMb2dvU3ZnLCBpbnN0YWdyYW1Mb2dvU3ZnLCBlbWFpbFN2ZywgYXJyb3cgfSBmcm9tICcuL21lZGlhLmpzJztcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbmF2QmFyLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2ZlZWRNZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tZW51LmNzcyc7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIEJhclxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ25hdicsICduYXZCYXInLCAnbmF2QmFyJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2QmFyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ25hdi1idXR0b24nLCAnbmF2LW1lbnUtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnbmF2QmFyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ25hdi1idXR0b24nLCAnbmF2LXRpdGxlLWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdkJhcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICduYXYtYnV0dG9uJywgJ25hdi1jb250YWN0LWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdi10aXRsZS1idXR0b24nKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMScsICduYXYtdGl0bGUnLCAnbmF2LXRpdGxlJywgJ0ZlZWQgTWUnKSk7XHJcbmdldEJ5SWQoJ25hdi1tZW51LWJ1dHRvbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ25hdi1tZW51JywgJ25hdi1tZW51JywgJ01lbnUnKSk7XHJcbmdldEJ5SWQoJ25hdi1jb250YWN0LWJ1dHRvbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ25hdi1jb250YWN0JywgJ25hdi1jb250YWN0JywgJ0NvbnRhY3QnKSk7XHJcblxyXG5nZXRCeUlkKCduYXYtdGl0bGUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbi1hY3RpdmUnKTtcclxuXHJcbmdldEJ5SWQoJ25hdkJhcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicsICduYXYtdGhlbWUtYnV0dG9uLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ25hdi10aGVtZS1idXR0b24tY29udGFpbmVyJykuaW5uZXJIVE1MICs9IHN1blN2ZyArIG1vb25Tdmc7XHJcbmdldEJ5SWQoJ25hdi10aGVtZS1idXR0b24tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoJ2NoZWNrYm94JywgJ3RoZW1lLWJ1dHRvbicsICd0aGVtZS1idXR0b24nKSk7XHJcblxyXG5nZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbmdldEJ5SWQoJ21vb24tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcblxyXG4vLyBNYWluIGNvbnRlbnRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdtYWluJywgJ21haW4nLCAnbWFpbicpKTtcclxuZ2V0QnlJZCgnbWFpbicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtYWluLWNvbnRlbnQnLCAnbWFpbi1jb250ZW50JykpO1xyXG5nZXRCeUlkKCdtYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnJywgJycsIGJhY2tncm91bmQpKTtcclxuXHJcbmdldEJ5SWQoJ21haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtZW51LWNvbnRlbnQnLCAnbWVudS1jb250ZW50JykpO1xyXG5nZXRCeUlkKCdtYWluLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnZmVlZE1lLWNvbnRlbnQnLCAnZmVlZE1lLWNvbnRlbnQnKSk7XHJcbmdldEJ5SWQoJ21haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdjb250YWN0LWNvbnRlbnQnLCAnY29udGFjdC1jb250ZW50JykpO1xyXG5cclxuZ2V0QnlJZCgnbWVudS1jb250ZW50JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5nZXRCeUlkKCdjb250YWN0LWNvbnRlbnQnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4vLyBGZWVkTWUgY29udGVudFxyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdhYm91dC1yZXN0YXVyYW50JywgJ2Fib3V0LXJlc3RhdXJhbnQnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3RvcC1kaXNoJywgJ3RvcC1kaXNoJykpO1xyXG5nZXRCeUlkKCdmZWVkTWUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdhZGRyZXNzJywgJ2FkZHJlc3MnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3dvcmtpbmctdGltZScsICd3b3JraW5nLXRpbWUnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ2Rpc2hlcycsICdkaXNoZXMnKSk7XHJcbmdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYScsICdzb2NpYWwtbWVkaWEnKSk7XHJcblxyXG5nZXRCeUlkKCdhYm91dC1yZXN0YXVyYW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdhYm91dCByZXN0YXVyYW50JykpO1xyXG5cclxuZ2V0QnlJZCgndG9wLWRpc2gnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnJywgJycsIHN0ZWFrKSk7XHJcbmdldEJ5SWQoJ3RvcC1kaXNoJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdUb3AgRGlzaCcpKTtcclxuXHJcbmdldEJ5SWQoJ2FkZHJlc3MnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsICcnLCAnJywgJ0xvY2F0aW9uOiA4NjIgRm9yZXN0IEF2ZW51ZSwgRWxtc2ZvcmQsIE5ldyBZb3JrJykpO1xyXG5cclxuZ2V0QnlJZCgnd29ya2luZy10aW1lJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICc3OjAwIEFNIOKGkiAxMDowMCBQTScpKTtcclxuXHJcbmdldEJ5SWQoJ2Rpc2hlcycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnZGlzaGVzJykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTEnLCAnZGlzaGVzLWltYWdlLTEnLCBzdGVhaykpO1xyXG5nZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTInLCAnZGlzaGVzLWltYWdlLTInLCBzdXNoaSkpOyBnZXRCeUlkKCdkaXNoZXMnKS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnZGlzaGVzLWltYWdlLTMnLCAnZGlzaGVzLWltYWdlLTMnLCByaWNlKSk7XHJcblxyXG5nZXRCeUlkKCdzb2NpYWwtbWVkaWEnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnc29jaWFsLW1lZGlhLWljb24tY29udGFpbmVyJywgJ3gtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ3gtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmlubmVySFRNTCArPSB4TG9nb1N2ZztcclxuZ2V0QnlJZCgneC1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdARmVlZE1lJykpO1xyXG5cclxuZ2V0QnlJZCgnc29jaWFsLW1lZGlhJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcicsICdpbnN0YWdyYW0tc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpKTtcclxuXHJcbmdldEJ5SWQoJ2luc3RhZ3JhbS1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuaW5uZXJIVE1MICs9IGluc3RhZ3JhbUxvZ29Tdmc7XHJcbmdldEJ5SWQoJ2luc3RhZ3JhbS1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdARmVlZE1lJykpO1xyXG5cclxuZ2V0QnlJZCgnc29jaWFsLW1lZGlhJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ3NvY2lhbC1tZWRpYS1pY29uLWNvbnRhaW5lcicsICdlbWFpbC1zb2NpYWwtbWVkaWEtY29udGFpbmVyJykpO1xyXG5cclxuZ2V0QnlJZCgnZW1haWwtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmlubmVySFRNTCArPSBlbWFpbFN2ZztcclxuZ2V0QnlJZCgnZW1haWwtc29jaWFsLW1lZGlhLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnRmVlZE1lQEZlZWRNZS5jb20nKSk7XHJcblxyXG4vLyBNZW51IGNvbnRlbnRcclxuZ2V0QnlJZCgnbWVudS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtc2xpZGUtbGVmdC1idXR0b24nLCAnbWVudS1zbGlkZS1sZWZ0LWJ1dHRvbicpKTtcclxuXHJcbmdldEJ5SWQoJ21lbnUtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtZW51LWl0ZW1zJywgJ21lbnUtaXRlbXMnKSk7XHJcblxyXG5cclxuZ2V0QnlJZCgnbWVudS1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtc2xpZGUtcmlnaHQtYnV0dG9uJywgJ21lbnUtc2xpZGUtcmlnaHQtYnV0dG9uJykpO1xyXG5cclxuZ2V0QnlJZCgnbWVudS1zbGlkZS1sZWZ0LWJ1dHRvbicpLmlubmVySFRNTCArPSBhcnJvdztcclxuZ2V0QnlJZCgnbWVudS1zbGlkZS1yaWdodC1idXR0b24nKS5pbm5lckhUTUwgKz0gYXJyb3c7XHJcblxyXG5cclxuZ2V0QnlJZCgnbWVudS1pdGVtcycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtZW51LWl0ZW0nLCAnbWVudS1pdGVtLTEnKSk7XHJcblxyXG5nZXRCeUlkKCdtZW51LWl0ZW1zJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtaXRlbScsICdtZW51LWl0ZW0tMicpKTtcclxuXHJcbmdldEJ5SWQoJ21lbnUtaXRlbXMnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbWVudS1pdGVtJywgJ21lbnUtaXRlbS0zJykpO1xyXG5cclxuLy8gTWVudSBJdGVtIDFcclxuZ2V0QnlJZCgnbWVudS1pdGVtLTEnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbWVudS1pbWFnZS1jb250YWluZXInLCAnbWVudS1pbWFnZS0xLWNvbnRhaW5lcicpKTtcclxuZ2V0QnlJZCgnbWVudS1pbWFnZS0xLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKCcnLCAnJywgc3RlYWspKTtcclxuZ2V0QnlJZCgnbWVudS1pbWFnZS0xLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnU3RlYWsnKSk7XHJcbmdldEJ5SWQoJ21lbnUtaXRlbS0xJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicsICdtZW51LWl0ZW0tZGVzY3JpcHRpb24tMScpKTtcclxuXHJcbmdldEJ5SWQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbi0xJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnbWVudS1kZXNjcmlwdGlvbi10ZXh0JywgJ21lbnUtZGVzY3JpcHRpb24tdGV4dC0xJykpO1xyXG5cclxuZ2V0QnlJZCgnbWVudS1kZXNjcmlwdGlvbi10ZXh0LTEnKS5pbm5lckhUTUwgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIERpZ25pc3NpbW9zIGRlYml0aXMgcXVpc3F1YW0gdGVtcG9yZS4gRWxpZ2VuZGkgc3VzY2lwaXQsIGxhYm9yZSBwZXJmZXJlbmRpcyB0ZW1wb3JlIGVhcnVtIGVuaW0gaW1wZWRpdCByZXByZWhlbmRlcml0IGRvbG9yZXMgYWxpcXVpZCBkb2xvcmVtcXVlIGlwc2FtISBOZXNjaXVudCByZXBlbGxhdCBpbmNpZHVudCBjb25zZXF1dW50dXIgZXN0IGxpYmVybz8gUGVyZmVyZW5kaXMgY3VscGEgZGVsZW5pdGkgcXVpIHRlbmV0dXIgcmVpY2llbmRpcywgZHVjaW11cyBjdW0gbWFnbmkgbmVxdWUgbnVsbGEgbm9iaXMsIG1pbnVzIHF1byBhIHZlbCBtb2RpIHNpbWlsaXF1ZSBleGNlcHR1cmkhJ1xyXG5cclxuLy8gTWVudSBJdGVtIDJcclxuZ2V0QnlJZCgnbWVudS1pdGVtLTInKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbWVudS1pbWFnZS1jb250YWluZXInLCAnbWVudS1pbWFnZS0yLWNvbnRhaW5lcicpKTtcclxuZ2V0QnlJZCgnbWVudS1pbWFnZS0yLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKCcnLCAnJywgc3VzaGkpKTtcclxuZ2V0QnlJZCgnbWVudS1pbWFnZS0yLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJycsICcnLCAnU3VzaGknKSk7XHJcbmdldEJ5SWQoJ21lbnUtaXRlbS0yJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnJywgJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicsICdtZW51LWl0ZW0tZGVzY3JpcHRpb24tMicpKTtcclxuXHJcbmdldEJ5SWQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbi0yJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnbWVudS1kZXNjcmlwdGlvbi10ZXh0JywgJ21lbnUtZGVzY3JpcHRpb24tdGV4dC0yJykpO1xyXG5cclxuZ2V0QnlJZCgnbWVudS1kZXNjcmlwdGlvbi10ZXh0LTInKS5pbm5lckhUTUwgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIERpZ25pc3NpbW9zIGRlYml0aXMgcXVpc3F1YW0gdGVtcG9yZS4gRWxpZ2VuZGkgc3VzY2lwaXQsIGxhYm9yZSBwZXJmZXJlbmRpcyB0ZW1wb3JlIGVhcnVtIGVuaW0gaW1wZWRpdCByZXByZWhlbmRlcml0IGRvbG9yZXMgYWxpcXVpZCBkb2xvcmVtcXVlIGlwc2FtISBOZXNjaXVudCByZXBlbGxhdCBpbmNpZHVudCBjb25zZXF1dW50dXIgZXN0IGxpYmVybz8gUGVyZmVyZW5kaXMgY3VscGEgZGVsZW5pdGkgcXVpIHRlbmV0dXIgcmVpY2llbmRpcywgZHVjaW11cyBjdW0gbWFnbmkgbmVxdWUgbnVsbGEgbm9iaXMsIG1pbnVzIHF1byBhIHZlbCBtb2RpIHNpbWlsaXF1ZSBleGNlcHR1cmkhJ1xyXG5cclxuLy8gTWVudSBJdGVtIDNcclxuZ2V0QnlJZCgnbWVudS1pdGVtLTMnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCcnLCAnbWVudS1pbWFnZS1jb250YWluZXInLCAnbWVudS1pbWFnZS0zLWNvbnRhaW5lcicpKTtcclxuZ2V0QnlJZCgnbWVudS1pbWFnZS0zLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKCcnLCAnJywgcmljZSkpO1xyXG5nZXRCeUlkKCdtZW51LWltYWdlLTMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnJywgJycsICdSaWNlJykpO1xyXG5nZXRCeUlkKCdtZW51LWl0ZW0tMycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJycsICdtZW51LWl0ZW0tZGVzY3JpcHRpb24nLCAnbWVudS1pdGVtLWRlc2NyaXB0aW9uLTMnKSk7XHJcblxyXG5nZXRCeUlkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24tMycpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ21lbnUtZGVzY3JpcHRpb24tdGV4dCcsICdtZW51LWRlc2NyaXB0aW9uLXRleHQtMycpKTtcclxuXHJcbmdldEJ5SWQoJ21lbnUtZGVzY3JpcHRpb24tdGV4dC0zJykuaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBEaWduaXNzaW1vcyBkZWJpdGlzIHF1aXNxdWFtIHRlbXBvcmUuIEVsaWdlbmRpIHN1c2NpcGl0LCBsYWJvcmUgcGVyZmVyZW5kaXMgdGVtcG9yZSBlYXJ1bSBlbmltIGltcGVkaXQgcmVwcmVoZW5kZXJpdCBkb2xvcmVzIGFsaXF1aWQgZG9sb3JlbXF1ZSBpcHNhbSEgTmVzY2l1bnQgcmVwZWxsYXQgaW5jaWR1bnQgY29uc2VxdXVudHVyIGVzdCBsaWJlcm8/IFBlcmZlcmVuZGlzIGN1bHBhIGRlbGVuaXRpIHF1aSB0ZW5ldHVyIHJlaWNpZW5kaXMsIGR1Y2ltdXMgY3VtIG1hZ25pIG5lcXVlIG51bGxhIG5vYmlzLCBtaW51cyBxdW8gYSB2ZWwgbW9kaSBzaW1pbGlxdWUgZXhjZXB0dXJpISdcclxuXHJcbi8vIENvbnRhY3QgbWVudVxyXG5nZXRCeUlkKCdjb250YWN0LWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsICdjb250YWN0LTEnLCAnY29udGFjdC0xJywgJ2NvbnRhY3QtMScpKTtcclxuZ2V0QnlJZCgnY29udGFjdC1jb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCAnY29udGFjdC0yJywgJ2NvbnRhY3QtMicsICdjb250YWN0LTInKSk7XHJcbmdldEJ5SWQoJ2NvbnRhY3QtY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ2NvbnRhY3QtMycsICdjb250YWN0LTMnLCAnY29udGFjdC0zJykpOyIsImltcG9ydCB7IGdldEJ5SWQgfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XHJcbmltcG9ydCAnLi9jcmVhdGVEb20uanMnO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIEJhclxyXG5jb25zdCBuYXZCYXIgPSBnZXRCeUlkKCduYXZCYXInKTtcclxuXHJcbmNvbnN0IG5hdlRpdGxlQnV0dG9uID0gZ2V0QnlJZCgnbmF2LXRpdGxlLWJ1dHRvbicpO1xyXG5jb25zdCBuYXZNZW51QnV0dG9uID0gZ2V0QnlJZCgnbmF2LW1lbnUtYnV0dG9uJyk7XHJcbmNvbnN0IG5hdkNvbnRhY3RCdXR0b24gPSBnZXRCeUlkKCduYXYtY29udGFjdC1idXR0b24nKTtcclxuXHJcbmNvbnN0IG5hdlRpdGxlID0gZ2V0QnlJZCgnbmF2LXRpdGxlJyk7XHJcbmNvbnN0IG5hdk1lbnUgPSBnZXRCeUlkKCduYXYtbWVudScpO1xyXG5jb25zdCBuYXZDb250YWN0ID0gZ2V0QnlJZCgnbmF2LWNvbnRhY3QnKTtcclxuXHJcbmNvbnN0IG5hdlRoZW1lQnV0dG9uQ29udGFpbmVyID0gZ2V0QnlJZCgnbmF2LXRoZW1lLWJ1dHRvbi1jb250YWluZXInKTtcclxuY29uc3Qgc3VuVGhlbWVCdXR0b24gPSBnZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJyk7XHJcbmNvbnN0IG1vb25UaGVtZUJ1dHRvbiA9IGdldEJ5SWQoJ21vb24tdGhlbWUtYnV0dG9uJyk7XHJcblxyXG4vLyBNYWluIGNvbnRlbnRcclxuY29uc3QgbWFpbiA9IGdldEJ5SWQoJ21haW4nKTtcclxuY29uc3QgbWFpbkNvbnRlbnQgPSBnZXRCeUlkKCdtYWluLWNvbnRlbnQnKTtcclxuY29uc3QgZmVlZE1lQ29udGVudCA9IGdldEJ5SWQoJ2ZlZWRNZS1jb250ZW50Jyk7XHJcbmNvbnN0IG1lbnVDb250ZW50ID0gZ2V0QnlJZCgnbWVudS1jb250ZW50Jyk7XHJcbmNvbnN0IGNvbnRhY3RDb250ZW50ID0gZ2V0QnlJZCgnY29udGFjdC1jb250ZW50Jyk7XHJcblxyXG4vLyBGZWVkTWUgY29udGVudFxyXG5jb25zdCBhYm91dFJlc3RhdXJhbnQgPSBnZXRCeUlkKCdhYm91dC1yZXN0YXVyYW50Jyk7XHJcbmNvbnN0IHRvcERpc2ggPSBnZXRCeUlkKCd0b3AtZGlzaCcpO1xyXG5jb25zdCBhZGRyZXNzID0gZ2V0QnlJZCgnYWRkcmVzcycpO1xyXG5jb25zdCB3b3JraW5nVGltZSA9IGdldEJ5SWQoJ3dvcmtpbmctdGltZScpO1xyXG5jb25zdCBkaXNoZXMgPSBnZXRCeUlkKCdkaXNoZXMnKTtcclxuY29uc3Qgc29jaWFsTWVkaWEgPSBnZXRCeUlkKCdzb2NpYWwtbWVkaWEnKTtcclxuY29uc3QgZGlzaGVzSW1hZ2UxID0gZ2V0QnlJZCgnZGlzaGVzLWltYWdlLTEnKTtcclxuY29uc3QgZGlzaGVzSW1hZ2UyID0gZ2V0QnlJZCgnZGlzaGVzLWltYWdlLTInKTtcclxuY29uc3QgZGlzaGVzSW1hZ2UzID0gZ2V0QnlJZCgnZGlzaGVzLWltYWdlLTMnKTtcclxuXHJcbmNvbnN0IG1lbnVJdGVtMSA9IGdldEJ5SWQoJ21lbnUtaXRlbS0xJyk7XHJcbmNvbnN0IG1lbnVJdGVtMiA9IGdldEJ5SWQoJ21lbnUtaXRlbS0yJyk7XHJcbmNvbnN0IG1lbnVJdGVtMyA9IGdldEJ5SWQoJ21lbnUtaXRlbS0zJyk7XHJcblxyXG5jb25zdCBtZW51U2xpZGVMZWZ0QnV0dG9uID0gZ2V0QnlJZCgnbWVudS1zbGlkZS1sZWZ0LWJ1dHRvbicpO1xyXG5jb25zdCBtZW51U2xpZGVSaWdodEJ1dHRvbiA9IGdldEJ5SWQoJ21lbnUtc2xpZGUtcmlnaHQtYnV0dG9uJyk7XHJcblxyXG5jb25zdCBtZW51SXRlbURlc2NyaXB0aW9uMSA9IGdldEJ5SWQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbi0xJyk7XHJcbmNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24yID0gZ2V0QnlJZCgnbWVudS1pdGVtLWRlc2NyaXB0aW9uLTInKTtcclxuY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbjMgPSBnZXRCeUlkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24tMycpO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGJvZHksXHJcbiAgICBuYXZCYXIsXHJcbiAgICBuYXZUaXRsZUJ1dHRvbixcclxuICAgIG5hdk1lbnVCdXR0b24sXHJcbiAgICBuYXZDb250YWN0QnV0dG9uLFxyXG4gICAgbmF2VGl0bGUsXHJcbiAgICBuYXZNZW51LFxyXG4gICAgbmF2Q29udGFjdCxcclxuICAgIG5hdlRoZW1lQnV0dG9uQ29udGFpbmVyLFxyXG4gICAgc3VuVGhlbWVCdXR0b24sXHJcbiAgICBtb29uVGhlbWVCdXR0b24sXHJcbiAgICBtYWluLFxyXG4gICAgbWFpbkNvbnRlbnQsXHJcbiAgICBhYm91dFJlc3RhdXJhbnQsXHJcbiAgICB0b3BEaXNoLFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHdvcmtpbmdUaW1lLFxyXG4gICAgZGlzaGVzLFxyXG4gICAgc29jaWFsTWVkaWEsXHJcbiAgICBkaXNoZXNJbWFnZTEsXHJcbiAgICBkaXNoZXNJbWFnZTIsXHJcbiAgICBkaXNoZXNJbWFnZTMsXHJcbiAgICBmZWVkTWVDb250ZW50LFxyXG4gICAgbWVudUNvbnRlbnQsXHJcbiAgICBjb250YWN0Q29udGVudCxcclxuICAgIG1lbnVTbGlkZUxlZnRCdXR0b24sXHJcbiAgICBtZW51U2xpZGVSaWdodEJ1dHRvbixcclxuICAgIG1lbnVJdGVtMSxcclxuICAgIG1lbnVJdGVtMixcclxuICAgIG1lbnVJdGVtMyxcclxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24xLFxyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbjIsXHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uM1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZ2V0QnlJZCB9IGZyb20gXCIuL3RlbXBsYXRlcy5qc1wiO1xyXG5pbXBvcnQgeyBuYXZUaXRsZUJ1dHRvbiwgbmF2TWVudUJ1dHRvbiwgbmF2Q29udGFjdEJ1dHRvbiwgZmVlZE1lQ29udGVudCwgbWVudUNvbnRlbnQsIGNvbnRhY3RDb250ZW50LCBkaXNoZXNJbWFnZTEsIGRpc2hlc0ltYWdlMiwgZGlzaGVzSW1hZ2UzLCBtZW51U2xpZGVMZWZ0QnV0dG9uLCBtZW51U2xpZGVSaWdodEJ1dHRvbiwgbWVudUl0ZW0xLCBtZW51SXRlbTIsIG1lbnVJdGVtMywgbWVudUl0ZW1EZXNjcmlwdGlvbjEsIG1lbnVJdGVtRGVzY3JpcHRpb24yLCBtZW51SXRlbURlc2NyaXB0aW9uMywgbWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9kb21FbGVtZW50cy5qc1wiO1xyXG5pbXBvcnQgeyBzbGlkZVNob3cgfSBmcm9tIFwiLi9zbGlkZVNob3cuanNcIjtcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGRpc2hlc0FycmF5ID0gWzEsIDIsIDNdO1xyXG5cclxuZnVuY3Rpb24gcnVuU2xpZGVTaG93KCkge1xyXG4gICAgc2xpZGVTaG93KGRpc2hlc0ltYWdlMSwgZGlzaGVzSW1hZ2UyLCBkaXNoZXNJbWFnZTMsICdkaXNoZXMtaW1hZ2UnLCBkaXNoZXNBcnJheSwgJ3JpZ2h0Jyk7XHJcblxyXG4gICAgc2V0VGltZW91dChydW5TbGlkZVNob3csIDUwMDApO1xyXG59XHJcblxyXG5ydW5TbGlkZVNob3coKTtcclxuXHJcbm5hdlRpdGxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmF2VGl0bGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIG5hdk1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWJ1dHRvbi1hY3RpdmUnKTtcclxuICAgIG5hdkNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWJ1dHRvbi1hY3RpdmUnKTtcclxuXHJcbiAgICBmZWVkTWVDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufSk7XHJcbm5hdk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZUaXRsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgbmF2TWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgbmF2Q29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtYnV0dG9uLWFjdGl2ZScpO1xyXG5cclxuICAgIGZlZWRNZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59KTtcclxubmF2Q29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdlRpdGxlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBuYXZNZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBuYXZDb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24tYWN0aXZlJyk7XHJcblxyXG4gICAgZmVlZE1lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxubGV0IG1lbnVJdGVtc0FycmF5ID0gWzEsIDIsIDNdO1xyXG5cclxubWVudVNsaWRlTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24xLmNsYXNzTGlzdC5hZGQoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpO1xyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbjIuY2xhc3NMaXN0LmFkZCgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uMy5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlU2hvdyhtZW51SXRlbTEsIG1lbnVJdGVtMiwgbWVudUl0ZW0zLCAnbWVudS1pdGVtJywgbWVudUl0ZW1zQXJyYXksICdsZWZ0Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtRGVzY3JpcHRpb24xLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpOyBtZW51SXRlbURlc2NyaXB0aW9uMi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTsgbWVudUl0ZW1EZXNjcmlwdGlvbjMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgfSwgNzAwKTtcclxuICAgIH0sIDE1MCk7XHJcbn0pO1xyXG5cclxubWVudVNsaWRlUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24yLmNsYXNzTGlzdC5hZGQoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpO1xyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbjMuY2xhc3NMaXN0LmFkZCgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzbGlkZVNob3cobWVudUl0ZW0xLCBtZW51SXRlbTIsIG1lbnVJdGVtMywgJ21lbnUtaXRlbScsIG1lbnVJdGVtc0FycmF5LCAncmlnaHQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbjEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7IG1lbnVJdGVtRGVzY3JpcHRpb24yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpOyBtZW51SXRlbURlc2NyaXB0aW9uMy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICB9LCA3MDApO1xyXG4gICAgfSwgMTUwKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMi5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMy5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2xpZGVTaG93KG1lbnVJdGVtMSwgbWVudUl0ZW0yLCBtZW51SXRlbTMsICdtZW51LWl0ZW0nLCBtZW51SXRlbXNBcnJheSwgJ2xlZnQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTsgbWVudUl0ZW1EZXNjcmlwdGlvbjIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7IG1lbnVJdGVtRGVzY3JpcHRpb24zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgIH0sIDE1MCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMi5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uMy5jbGFzc0xpc3QuYWRkKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2xpZGVTaG93KG1lbnVJdGVtMSwgbWVudUl0ZW0yLCBtZW51SXRlbTMsICdtZW51LWl0ZW0nLCBtZW51SXRlbXNBcnJheSwgJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbjEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1pdGVtLWRlc2NyaXB0aW9uJyk7IG1lbnVJdGVtRGVzY3JpcHRpb24yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtaXRlbS1kZXNjcmlwdGlvbicpOyBtZW51SXRlbURlc2NyaXB0aW9uMy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWl0ZW0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG59KSIsImltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL0JhY2tncm91bmQuanBnJztcclxuaW1wb3J0IHN0ZWFrSW1hZ2UgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL3N0ZWFrLmpwZyc7XHJcbmltcG9ydCBTdXNoaUltYWdlIGZyb20gJy4uL21lZGlhL2ltYWdlcy9TdXNoaS5qcGcnO1xyXG5pbXBvcnQgUmljZUltYWdlIGZyb20gJy4uL21lZGlhL2ltYWdlcy9SaWNlLmpwZyc7XHJcblxyXG5jb25zdCBzdW5TdmcgPSAvKmh0bWwqLyAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJzdW4tdGhlbWUtYnV0dG9uXCIgaWQ9XCJzdW4tdGhlbWUtYnV0dG9uXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDE3cS0yLjA3NSAwLTMuNTM3LTEuNDYzVDcgMTJxMC0yLjA3NSAxLjQ2My0zLjUzN1QxMiA3cTIuMDc1IDAgMy41MzggMS40NjNUMTcgMTJxMCAyLjA3NS0xLjQ2MyAzLjUzOFQxMiAxN20tNy00SDF2LTJoNHptMTggMGgtNHYtMmg0ek0xMSA1VjFoMnY0em0wIDE4di00aDJ2NHpNNi40IDcuNzVMMy44NzUgNS4zMjVMNS4zIDMuODVsMi40IDIuNXptMTIuMyAxMi40bC0yLjQyNS0yLjUyNUwxNy42IDE2LjI1bDIuNTI1IDIuNDI1ek0xNi4yNSA2LjRsMi40MjUtMi41MjVMMjAuMTUgNS4zbC0yLjUgMi40ek0zLjg1IDE4LjdsMi41MjUtMi40MjVMNy43NSAxNy42bC0yLjQyNSAyLjUyNXpcIi8+PC9zdmc+J1xyXG5cclxuY29uc3QgbW9vblN2ZyA9IC8qaHRtbCovIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cIm1vb24tdGhlbWUtYnV0dG9uXCIgaWQ9XCJtb29uLXRoZW1lLWJ1dHRvblwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMi4wNTggMjBxLTMuMzM0IDAtNS42NjctMi4zMzNRNC4wNTggMTUuMzMzIDQuMDU4IDEycTAtMy4wMzggMS45OC01LjI3UTguMDIgNC41IDEwLjk0MiA0LjA5N3EuMDgxIDAgLjE1OS4wMDZ0LjE1My4wMTdxLS41MDYuNzA2LS44MDEgMS41N3EtLjI5NS44NjUtLjI5NSAxLjgxMXEwIDIuNjY3IDEuODY2IDQuNTMzcTEuODY3IDEuODY3IDQuNTM0IDEuODY3cS45NTIgMCAxLjgxMy0uMjk1cS44NjItLjI5NSAxLjU0OC0uODAxcS4wMTIuMDc1LjAxOC4xNTNxLjAwNS4wNzguMDA1LjE1OHEtLjM4NCAyLjkyMy0yLjYxNSA0LjkwNFQxMi4wNTcgMjBcIi8+PC9zdmc+YFxyXG5cclxuY29uc3QgeExvZ29TdmcgPSAvKmh0bWwqLyBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTggMkgxbDguMjYgMTEuMDE1TDEuNDUgMjJINC4xbDYuMzg4LTcuMzQ5TDE2IDIyaDdsLTguNjA4LTExLjQ3OEwyMS44IDJoLTIuNjVsLTUuOTg2IDYuODg2em05IDE4TDUgNGgybDEyIDE2elwiLz48L3N2Zz5gO1xyXG5cclxuY29uc3QgaW5zdGFncmFtTG9nb1N2ZyA9IC8qaHRtbCovIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIuMDAxIDlhMyAzIDAgMSAwIDAgNmEzIDMgMCAwIDAgMC02bTAtMmE1IDUgMCAxIDEgMCAxMGE1IDUgMCAwIDEgMC0xMG02LjUtLjI1YTEuMjUgMS4yNSAwIDAgMS0yLjUgMGExLjI1IDEuMjUgMCAwIDEgMi41IDBNMTIuMDAxIDRjLTIuNDc0IDAtMi44NzguMDA3LTQuMDI5LjA1OGMtLjc4NC4wMzctMS4zMS4xNDItMS43OTguMzMyYTIuODg2IDIuODg2IDAgMCAwLTEuMDguNzAzYTIuODkgMi44OSAwIDAgMC0uNzA0IDEuMDhjLS4xOS40OS0uMjk1IDEuMDE1LS4zMzEgMS43OThDNC4wMDcgOS4wNzUgNCA5LjQ2MSA0IDEyYzAgMi40NzUuMDA3IDIuODc4LjA1OCA0LjAyOWMuMDM3Ljc4My4xNDIgMS4zMS4zMzEgMS43OTdjLjE3LjQzNS4zNy43NDguNzAyIDEuMDhjLjMzNy4zMzYuNjUuNTM3IDEuMDguNzAzYy40OTQuMTkxIDEuMDIuMjk3IDEuOC4zMzNDOS4wNzUgMTkuOTk0IDkuNDYxIDIwIDEyIDIwYzIuNDc1IDAgMi44NzgtLjAwNyA0LjAyOS0uMDU4Yy43ODItLjAzNyAxLjMwOC0uMTQyIDEuNzk3LS4zMzFhMi45MSAyLjkxIDAgMCAwIDEuMDgtLjcwM2MuMzM3LS4zMzYuNTM4LS42NDkuNzA0LTEuMDhjLjE5LS40OTIuMjk2LTEuMDE4LjMzMi0xLjhjLjA1Mi0xLjEwMy4wNTgtMS40OS4wNTgtNC4wMjhjMC0yLjQ3NC0uMDA3LTIuODc4LS4wNTgtNC4wMjljLS4wMzctLjc4Mi0uMTQzLTEuMzEtLjMzMi0xLjc5OGEyLjkxMiAyLjkxMiAwIDAgMC0uNzAzLTEuMDhhMi44ODQgMi44ODQgMCAwIDAtMS4wOC0uNzA0Yy0uNDktLjE5LTEuMDE2LS4yOTUtMS43OTgtLjMzMUMxNC45MjYgNC4wMDYgMTQuNTQgNCAxMiA0bTAtMmMyLjcxNyAwIDMuMDU2LjAxIDQuMTIzLjA2YzEuMDY0LjA1IDEuNzkuMjE3IDIuNDI3LjQ2NWMuNjYuMjU0IDEuMjE2LjU5OCAxLjc3MiAxLjE1M2E0LjkwOCA0LjkwOCAwIDAgMSAxLjE1MyAxLjc3MmMuMjQ3LjYzNy40MTUgMS4zNjMuNDY1IDIuNDI4Yy4wNDcgMS4wNjYuMDYgMS40MDUuMDYgNC4xMjJjMCAyLjcxNy0uMDEgMy4wNTYtLjA2IDQuMTIyYy0uMDUgMS4wNjUtLjIxOCAxLjc5LS40NjUgMi40MjhhNC44ODQgNC44ODQgMCAwIDEtMS4xNTMgMS43NzJhNC45MTUgNC45MTUgMCAwIDEtMS43NzIgMS4xNTNjLS42MzcuMjQ3LTEuMzYzLjQxNS0yLjQyNy40NjVjLTEuMDY3LjA0Ny0xLjQwNi4wNi00LjEyMy4wNmMtMi43MTcgMC0zLjA1Ni0uMDEtNC4xMjMtLjA2Yy0xLjA2NC0uMDUtMS43ODktLjIxOC0yLjQyNy0uNDY1YTQuODkgNC44OSAwIDAgMS0xLjc3Mi0xLjE1M2E0LjkwNSA0LjkwNSAwIDAgMS0xLjE1My0xLjc3MmMtLjI0OC0uNjM3LS40MTUtMS4zNjMtLjQ2NS0yLjQyOEMyLjAxMiAxNS4wNTYgMiAxNC43MTcgMiAxMmMwLTIuNzE3LjAxLTMuMDU2LjA2LTQuMTIyYy4wNS0xLjA2NS4yMTctMS43OS40NjUtMi40MjhhNC44OCA0Ljg4IDAgMCAxIDEuMTUzLTEuNzcyQTQuODk3IDQuODk3IDAgMCAxIDUuNDUgMi41MjVjLjYzNy0uMjQ4IDEuMzYyLS40MTUgMi40MjctLjQ2NUM4Ljk0NSAyLjAxMyA5LjI4NCAyIDEyLjAwMSAyXCIvPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBlbWFpbFN2ZyA9IC8qaHRtbCovIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyAzaDE4YTEgMSAwIDAgMSAxIDF2MTZhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xbTE3IDQuMjM4bC03LjkyOCA3LjFMNCA3LjIxNlYxOWgxNnpNNC41MTEgNWw3LjU1IDYuNjYyTDE5LjUwMiA1elwiLz48L3N2Zz5gO1xyXG5cclxuY29uc3QgYmFja2dyb3VuZCA9IGJhY2tncm91bmRJbWFnZTtcclxuXHJcbmNvbnN0IHN0ZWFrID0gc3RlYWtJbWFnZTtcclxuY29uc3Qgc3VzaGkgPSBTdXNoaUltYWdlO1xyXG5jb25zdCByaWNlID0gUmljZUltYWdlO1xyXG5cclxuY29uc3QgYXJyb3cgPSAvKmh0bWwqL2A8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTQuNDc1IDEybC03LjM1LTcuMzVxLS4zNzUtLjM3NS0uMzYzLS44ODh0LjM4OC0uODg3cS4zNzUtLjM3NS44ODgtLjM3NXQuODg3LjM3NWw3LjY3NSA3LjdxLjMuMy40NS42NzV0LjE1Ljc1cTAgLjM3NS0uMTUuNzV0LS40NS42NzVsLTcuNyA3LjdxLS4zNzUuMzc1LS44NzUuMzYzVDcuMTUgMjEuMXEtLjM3NS0uMzc1LS4zNzUtLjg4OHQuMzc1LS44ODd6XCIvPjwvc3ZnPmBcclxuXHJcbmV4cG9ydCB7IHN1blN2ZywgbW9vblN2ZywgYmFja2dyb3VuZCwgc3RlYWssIHN1c2hpLCByaWNlLCB4TG9nb1N2ZywgaW5zdGFncmFtTG9nb1N2ZywgZW1haWxTdmcsIGFycm93IH0iLCJmdW5jdGlvbiBzbGlkZVNob3coc2xpZGUxLCBzbGlkZTIsIHNsaWRlMywgY2xhc3NOYW1lLCBhcnJheSwgZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcclxuICAgICAgICBsZXQgZWxlID0gYXJyYXkuc2hpZnQoKTtcclxuICAgICAgICBhcnJheS5wdXNoKGVsZSk7XHJcblxyXG4gICAgICAgIHNsaWRlMS5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzTmFtZX0tMS1zbGlkZS0xYCk7XHJcbiAgICAgICAgc2xpZGUxLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfS0xLXNsaWRlLTJgKTtcclxuXHJcbiAgICAgICAgc2xpZGUyLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfS0yLXNsaWRlLTFgKTtcclxuICAgICAgICBzbGlkZTIuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc05hbWV9LTItc2xpZGUtMmApO1xyXG5cclxuICAgICAgICBzbGlkZTMuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc05hbWV9LTMtc2xpZGUtMWApO1xyXG4gICAgICAgIHNsaWRlMy5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzTmFtZX0tMy1zbGlkZS0yYCk7XHJcblxyXG4gICAgICAgIGlmIChhcnJheS50b1N0cmluZygpID09IFsxLCAyLCAzXSkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5LnRvU3RyaW5nKCkgPT0gWzIsIDMsIDFdKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZTEuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTEtc2xpZGUtMWApO1xyXG4gICAgICAgICAgICBzbGlkZTIuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTItc2xpZGUtMWApO1xyXG4gICAgICAgICAgICBzbGlkZTMuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTMtc2xpZGUtMWApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXkudG9TdHJpbmcoKSA9PSBbMywgMSwgMl0pIHtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlMS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX0tMS1zbGlkZS0yYCk7XHJcbiAgICAgICAgICAgIHNsaWRlMi5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX0tMi1zbGlkZS0yYCk7XHJcbiAgICAgICAgICAgIHNsaWRlMy5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX0tMy1zbGlkZS0yYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgbGV0IGVsZSA9IGFycmF5LnBvcCgpO1xyXG4gICAgICAgIGFycmF5LnVuc2hpZnQoZWxlKTtcclxuXHJcbiAgICAgICAgc2xpZGUxLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfS0xLXNsaWRlLTFgKTtcclxuICAgICAgICBzbGlkZTEuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc05hbWV9LTEtc2xpZGUtMmApO1xyXG5cclxuICAgICAgICBzbGlkZTIuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc05hbWV9LTItc2xpZGUtMWApO1xyXG4gICAgICAgIHNsaWRlMi5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzTmFtZX0tMi1zbGlkZS0yYCk7XHJcblxyXG4gICAgICAgIHNsaWRlMy5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzTmFtZX0tMy1zbGlkZS0xYCk7XHJcbiAgICAgICAgc2xpZGUzLmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NOYW1lfS0zLXNsaWRlLTJgKTtcclxuXHJcbiAgICAgICAgaWYgKGFycmF5LnRvU3RyaW5nKCkgPT0gWzEsIDIsIDNdKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXkudG9TdHJpbmcoKSA9PSBbMiwgMywgMV0pIHtcclxuICAgICAgICAgICAgc2xpZGUxLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS0xLXNsaWRlLTFgKTtcclxuICAgICAgICAgICAgc2xpZGUyLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS0yLXNsaWRlLTFgKTtcclxuICAgICAgICAgICAgc2xpZGUzLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfS0zLXNsaWRlLTFgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5LnRvU3RyaW5nKCkgPT0gWzMsIDEsIDJdKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZTEuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTEtc2xpZGUtMmApO1xyXG4gICAgICAgICAgICBzbGlkZTIuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTItc2xpZGUtMmApO1xyXG4gICAgICAgICAgICBzbGlkZTMuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LTMtc2xpZGUtMmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2xpZGVTaG93IH0iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzTmFtZSwgaWQsIHRleHRDb250ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlIHx8ICdkaXYnKTtcclxuXHJcbiAgICBjbGFzc05hbWUgIT0gXCJcIiA/IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogbnVsbDtcclxuXHJcbiAgICBpZCAhPSBcIlwiID8gZWxlbWVudC5pZCA9IGlkIDogbnVsbDtcclxuXHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGNsYXNzTmFtZSwgaWQpO1xyXG5cclxuICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKGNsYXNzTmFtZSwgaWQsIHNyYykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIGNsYXNzTmFtZSwgaWQpO1xyXG5cclxuICAgIGVsZW1lbnQuc3JjID0gc3JjO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgZ2V0QnlJZCwgY3JlYXRlSW5wdXQsIGNyZWF0ZUltYWdlIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUlucHV0LCBnZXRCeUlkIH0gZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xyXG5cclxuY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgOiBcImxpZ2h0XCI7XHJcblxyXG5pZiAoY3VycmVudFRoZW1lKSB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBjdXJyZW50VGhlbWUpO1xyXG5cclxuICAgIGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XHJcbiAgICAgICAgZ2V0QnlJZCgndGhlbWUtYnV0dG9uJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZ2V0QnlJZCgnbW9vbi10aGVtZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2V0QnlJZCgnc3VuLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUaGVtZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICBnZXRCeUlkKCdzdW4tdGhlbWUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgZ2V0QnlJZCgnbW9vbi10aGVtZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgICAgIGdldEJ5SWQoJ3N1bi10aGVtZS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICBnZXRCeUlkKCdtb29uLXRoZW1lLWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5nZXRCeUlkKCd0aGVtZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHN3aXRjaFRoZW1lKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9kb21FbGVtZW50cy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy90aGVtZS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2NyZWF0ZURvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==