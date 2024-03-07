function checkConcatenatedSum(num, n) {
    return Math.abs(num) == (Math.abs(num) + '').split('').map(a => a = Number(a.padEnd(n, a))).reduce((a, b) => a + b);
}

const checkConcatenatedSum1 = (num, n) => {
    num = Math.abs(num);
    return (num + '').split('').map(d => d.repeat(n)).reduce((a, n) => a + (+n), 0) === num;
};

function checkConcatenatedSum2(sum, n) {
    let abs = Math.abs(sum);
    return abs === [...abs + ""].reduce((s, d) => +d.repeat(n) + s, 0);
}

function checkConcatenatedSum3(x, n) {
    x = Math.abs(x)

    return `${x}`
        .split``
        .map(x => Number(x.repeat(n)))
        .reduce((a, b) => a + b) === x;
}

checkConcatenatedSum(2997, 3);
checkConcatenatedSum(-2997, 3);