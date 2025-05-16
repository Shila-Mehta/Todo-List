import createElement from "./createElement";

export default function createInput(className = '', type = '', placeHolder = '') {
    const input = createElement('input');
    
    if (className) {
        input.classList.add(...className.trim().split(/\s+/));
    }

    if (type) {
        input.type = type;
    }

    if (placeHolder) {
        input.placeholder = placeHolder;
    }

    return input;
}
