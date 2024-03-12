function revers(str) {
    return (str + '').split('').map(mapFunc).join('');
}

function mapFunc(value, index, array) {
    return array[array.length - index - 1];
}

console.log(`картошка - ${revers('картошка')}`);