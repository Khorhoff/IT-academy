function century(year) {
     return `${(Number(year) / 10 / 10 + 1).toFixed()} век`;
}

console.log(century(2024));