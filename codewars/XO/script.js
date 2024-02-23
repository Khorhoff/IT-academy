function XO(str) {
    let xo = {
      x: 0,
      o: 0,
    }
    
    for(let letter of str.toLowerCase()){
      if(letter == 'x')
        xo.x++;
      if(letter == 'o')
        xo.o++;
    }
  return xo.x == xo.o;
}

console.log(XO('xoxo'));
console.log(XO('xoxox'));
console.log(XO('ytyt'));
console.log(XO(''));
console.log(XO('1111'));

function XO1(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

function XO2(str){
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO3(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}