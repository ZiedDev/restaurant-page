import backgroundImage from '../media/images/Background.jpg';
import steakImage from '../media/images/steak.jpg';
import SushiImage from '../media/images/Sushi.jpg';
import RiceImage from '../media/images/Rice.jpg';

const sunSvg = /*html*/ '<svg xmlns="http://www.w3.org/2000/svg" class="sun-theme-button" id="sun-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>'

const moonSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" class="moon-theme-button" id="moon-theme-button" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"/></svg>`

const xLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"/></svg>`;

const instagramLogoSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>`;

const emailSvg = /*html*/ `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"/></svg>`;

const background = backgroundImage;

const steak = steakImage;
const sushi = SushiImage;
const rice = RiceImage;

const arrow = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"/></svg>`

const phoneSvg = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm0 0"/></svg>`

const addressSvg = /*html*/`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"/></svg>`

export { sunSvg, moonSvg, background, steak, sushi, rice, xLogoSvg, instagramLogoSvg, emailSvg, arrow, phoneSvg, addressSvg }