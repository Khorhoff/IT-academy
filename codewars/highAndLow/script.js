function highAndLow(numbers){
    return Math.max.apply(null, numbers.split(" ").map(a => Number(a))) + ' ' + Math.min.apply(null, numbers.split(" ").map(a => Number(a)));
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));