function calc(x) {
    return x.split('')
    .map(a => a.charCodeAt(0))
    .join('')
    .split('')
    .map(a => Number(a))
    .reduce(function (a, b) { return a + b }) -
        x.split('').
    map(a => a.charCodeAt(0))
    .join('')
    .replaceAll('7', '1')
    .split('')
    .map(a => Number(a))
    .reduce(function (a, b) { return a + b });
}

const calc1 = x => (x.replace(/./g, x => x.charCodeAt()).match(/7/g) || []).length * 6;

calc('abcdef');