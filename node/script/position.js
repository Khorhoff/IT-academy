"use strict"
class Position {
    constructor(_elem) {
        if (_elem) {
            this.left = _elem.offsetLeft;
            this.right = _elem.offsetLeft + _elem.offsetWidth;
            this.top = _elem.offsetTop;
            this.bottom = _elem.offsetTop + _elem.offsetHeight;
            this.centerX = _elem.offsetLeft + (_elem.offsetWidth / 2);
            this.centerY = _elem.offsetTop + (_elem.offsetHeight / 2);
        }
    }

    updatePosition(_elem) {
        this.left = _elem.offsetLeft;
        this.right = _elem.offsetLeft + _elem.offsetWidth;
        this.top = _elem.offsetTop;
        this.bottom = _elem.offsetTop + _elem.offsetHeight;
        this.centerX = _elem.offsetLeft + (_elem.offsetWidth / 2);
        this.centerY = _elem.offsetTop + (_elem.offsetHeight / 2);
    }
}