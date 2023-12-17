function createElement(type, className, id, textContent) {
    const element = document.createElement(type || 'div');

    className != "" ? element.classList.add(className) : null;

    id != "" ? element.id = id : null;

    element.textContent = textContent;

    return element;
}

document.body.appendChild(createElement('div', 'content', 'content', ''));
document.getElementById('content').appendChild(createElement('h1', 'title', 'title', 'Hello World!'));