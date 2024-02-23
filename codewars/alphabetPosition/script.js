function alphabetPosition(text) {
    const alphabet = {
      a: '1',
      b: '2',
      c: '3',
      d: '4',
      e: '5',
      f: '6',
      g: '7',
      h: '8',
      i: '9',
      j: '10',
      k: '11',
      l: '12',
      m: '13',
      n: '14',
      o: '15',
      p: '16',
      q: '17',
      r: '18',
      s: '19',
      t: '20',
      u: '21',
      v: '22',
      w: '23',
      x: '24',
      y: '25',
      z: '26',
    }
    let newText = '';
    for(let letter of text.toLowerCase())
    if(letter in alphabet)
      newText += alphabet[letter] + ' ';
      
  return newText.slice(0, -1);
}

function alphabetPosition1(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

function alphabetPosition2(text) {
  return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));