"use strict"
class Shot {
    constructor(_shot, _startX, _startY, _endX, _endY, _speed) {
        this.shotBlock = _shot;
        this.position = new Position(_shot);
        this.startX = _startX;
        this.startY = _startY;
        this.endX = _endX;
        this.endY = _endY;  
        this.speedX = this.checkSpeed(this.startX, this.endX, _speed);
        this.speedY = this.checkSpeed(this.startY, this.endY, _speed);     
    }

    checkSpeed(_start, _end, _speed) {
        let diag = Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2));
        return (_end - _start) * _speed / diag;
    }

    updatePosition(_elem) {
        this.left = _elem.offsetLeft;
        this.right = _elem.offsetLeft + _elem.offsetWidth;
        this.top = _elem.offsetTop;
        this.bottom = _elem.offsetTop + _elem.offsetHeight;
        this.centerX = _elem.offsetLeft + (_elem.offsetWidth / 2);
        this.centerY = _elem.offsetTop + (_elem.offsetHeight / 2);
    }

    animate() {
        this.shotBlock.style.top = this.position.top + this.speedY + 'px';
        this.shotBlock.style.left = this.position.left + this.speedX + 'px';
        this.position.updatePosition(this.shotBlock);
        return 1;
    }
}