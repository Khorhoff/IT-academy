const deg = 6; //угол поворота секундной и минутной срелки
const degH = 30; //угол поворота часовой стрелки
let clockSize = 0; //размер часов, если пользователь ничего не введет в input, значение останется в 0
let date; //текущая дата/время
let hh, mm, ss; //углы поворота стрелок
const hr = document.getElementById('hr'); //блоки, вращающие стрелки часов
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const clock = document.getElementById('clock'); //часы
let numDiv; //здесь будет храниться/создаваться элементы с числами от 1 до 12
let angle = -90; //угол, в котором будет находится текущий элемент с числом 
const rad = Math.PI / 180; //формула 1 радиана
let r; //радиус, на котором будут находится числа
let cx, cy; //координаты центра окружности часов
let numSize; //размер блоков с числами, зависит от размера часов
let x, y; //позиция блоков с числами

window.addEventListener('load', () => {
    date = new Date();
    document.getElementById('time').innerHTML = date.toLocaleTimeString();
});

window.setInterval(() => {
    date = new Date();
    document.getElementById('time').innerHTML = date.toLocaleTimeString();
    document.getElementById('clock-time').innerHTML = date.toLocaleTimeString();
    hh = date.getHours() * degH;
    mm = date.getMinutes() * deg;
    ss = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`; //будет меняться каждую минуту, 
    //hh - переводит на нужный час, mm/12 - двигает часовую стрелку внутри часа в 12 раньше меньше, чем минутную
    mn.style.transform = `rotateZ(${mm}deg)`; //будет меняться каждую минуту
    sc.style.transform = `rotateZ(${ss}deg)`; //будет меняться каждую секунду
}, 1000);

document.getElementById('button').addEventListener('click', () => {
    clockSize = document.getElementById('input').value;
    if (clockSize < 200) {
        clockSize = 200;
    }
    if (clockSize > 800) {
        clockSize = 800;
    } //если введено значение больше/меньше, оставит максимальное/минимальное значение

    document.getElementById('input-space').style.display = 'none'; //скрыть блок для ввода размера часов
    document.getElementById('work-space').style.display = 'block'; //появление блока с часами
    clock.style.height = clockSize + 'px'; //создание размеров часов и блоков со стрелками
    clock.style.width = clockSize + 'px';
    
    document.getElementById('hour').style.height = clockSize * 0.5 + 'px';
    document.getElementById('hour').style.width = clockSize * 0.5 + 'px';
    hr.style.height = clockSize * 0.5 + 'px';
    hr.style.width = clockSize * 0.5 + 'px';

    document.getElementById('min').style.height = clockSize * 0.75 + 'px';
    document.getElementById('min').style.width = clockSize * 0.75 + 'px';
    mn.style.height = clockSize * 0.75 + 'px';
    mn.style.width = clockSize * 0.75 + 'px';

    document.getElementById('sec').style.height = clockSize * 0.8 + 'px';
    document.getElementById('sec').style.width = clockSize * 0.8 + 'px';
    sc.style.height = clockSize * 0.8 + 'px';
    sc.style.width = clockSize * 0.8 + 'px';

    document.getElementById('clock-time').style.fontSize = clockSize * 0.05 + 'px';

    cx = clockSize / 2; //центр окружности - половина размера(высоты и ширины) часов
    cy = clockSize / 2;
    r = clockSize * 0.85 / 2; //радиус - слегка меньше, чтобы числа не выходили за пределы часов
    numSize = clockSize * 0.1;

    for (let i = 0; i < 12; i++) {
        //создание циферблата
        angle += degH; //увеличение угла
        x = cx + r * Math.cos(angle * rad); //вычисление координат
        y = cy + r * Math.sin(angle * rad);
        numDiv = document.createElement('div');
        numDiv.setAttribute('class', 'number');
        //позиционирование блоков с числами
        numDiv.style.cssText += `
            top: ${y}px;
            left: ${x}px;
            height: ${numSize}px;
            width: ${numSize}px;
        `;
        numDiv.appendChild(document.createTextNode(i + 1));
        clock.appendChild(numDiv);
    }
    
})