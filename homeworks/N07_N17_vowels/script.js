function vowels(str) {
    const arr = ['ё', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
    let count = 0;
    for(let letter of str)
        if (arr.includes(letter.toLowerCase())) {
            count++;
        }
    return count;
}

function vowelsForEach(str) {
    const arr = ['ё', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
    let count = 0;
    (str + '').split('').forEach((a) => {if(arr.includes(a.toLowerCase())) count++;});
    return count;
}

function vowelsFilter(str) {
    const arr = ['ё', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
    return (str + '').split('').filter((a) => {return arr.includes(a.toLowerCase());}).length;
}

function vowelsReduce(str) {
    const arr = ['ё', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
    return (str + '').split('').reduce((answ, a) => {
        if (arr.includes(a.toLowerCase())) {
            return answ + a;
        }
        return answ + '';
    }, '').length;
}

console.log(vowels('привет'));
console.log(vowelsForEach('привет'));
console.log(vowelsFilter('привет'));
console.log(vowelsReduce('привет'));