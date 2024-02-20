let x = null;
let y = null;
let sing = null;

function getNumber(num) {
    if (x === null) {
        x = num;
    } else {
        y = num;
    }
}

function getSing(param) {
    sing = param;
}

function calc() {
    switch (sing) {
        case "+":
            console.log(`${x} + ${y} = ${x + y}`);
            break;
        case "-":
            console.log(`${x} - ${y} = ${x - y}`);
            break;
        case "*":
            console.log(`${x} * ${y} = ${x * y}`);
            break;
        case "/":
            console.log(`${x} / ${y} = ${x / y}`);
            break;
    }
}