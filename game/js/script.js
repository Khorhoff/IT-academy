const area = document.querySelector('.area');
const square = document.querySelector('.square');

let x = 0;
let y = 0;
let step = 10;
let timer = 0;

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                if (parseInt(window.getComputedStyle(square).top) >= step) {
                    y -= step;
                    square.style.top = y + 'px';
                }
            }, 20)
            break;
        case 's':
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                if (parseInt(window.getComputedStyle(square).top) + parseInt(window.getComputedStyle(square).height) <=
                    parseInt(window.getComputedStyle(area).height) - step) {
                    y += step;
                    square.style.top = y + 'px';
                }
            }, 20)
            break;
        case 'a':
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                if (parseInt(window.getComputedStyle(square).left) >= step) {
                    x -= step;
                    square.style.left = x + 'px';
                }
            }, 20)
            break;
        case 'd':
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                if (parseInt(window.getComputedStyle(square).left) + parseInt(window.getComputedStyle(square).width) <=
                    parseInt(window.getComputedStyle(area).width) - step) {
                    x += step;
                    square.style.left = x + 'px';
                }
            }, 20)
            break;

        default:
            break;
    }
})