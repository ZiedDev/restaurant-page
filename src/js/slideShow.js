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

export { slideShow }