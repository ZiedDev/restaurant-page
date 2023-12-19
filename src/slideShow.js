import { dishesImage1, dishesImage2, dishesImage3 } from './domElements.js'

let array = [1, 2, 3];

function slideShow() {
    let ele = array.shift();
    array.push(ele);

    dishesImage1.classList.remove('dishes-image-1-slide-1');
    dishesImage1.classList.remove('dishes-image-1-slide-2');

    dishesImage2.classList.remove('dishes-image-2-slide-1');
    dishesImage2.classList.remove('dishes-image-2-slide-2');

    dishesImage3.classList.remove('dishes-image-3-slide-1');
    dishesImage3.classList.remove('dishes-image-3-slide-2');

    if (array.toString() == [1, 2, 3]) {

    } else if (array.toString() == [2, 3, 1]) {

        dishesImage1.classList.add('dishes-image-1-slide-1');
        dishesImage2.classList.add('dishes-image-2-slide-1');
        dishesImage3.classList.add('dishes-image-3-slide-1');
    } else if (array.toString() == [3, 1, 2]) {

        dishesImage1.classList.add('dishes-image-1-slide-2');
        dishesImage2.classList.add('dishes-image-2-slide-2');
        dishesImage3.classList.add('dishes-image-3-slide-2');
    }
}

export { slideShow }