const area = document.getElementById('area');
const shot = document.getElementById('shot');
const startPos = parseInt(window.getComputedStyle(shot).getPropertyValue('left'));
const leftPos = parseInt(window.getComputedStyle(shot).getPropertyValue('left'));
const topPos = parseInt(window.getComputedStyle(shot).getPropertyValue('top'));
let startPos2 = {
    left: leftPos,
    top: topPos
};

// area.addEventListener('click', (e) => {
//     let start = Date.now();
//     let pos = startPos;
//     let timer = setInterval(() => {
//         let timePassed = Date.now() - start;

//         pos += 2;
//         shot.style.left = pos + 'px';

//         console.log(pos);
//         if (timePassed > 2000) clearInterval(timer);
//     }, 10)
// })

area.addEventListener('click', (e) => {
    const start = Date.now();
    let pos = startPos2;
    const clickPos = { left: e.pageX, top: e.pageY };
    const step = { left: (clickPos.left - pos.left) / 200, top: (clickPos.top - pos.top) / 200 };
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        pos.left += step.left;
        pos.top += step.top;
        shot.style.left = pos.left + 'px';
        shot.style.top = pos.top + 'px';

        console.log(pos.left, pos.top);
        if (timePassed > 2000) clearInterval(timer);
    }, 10);
})

