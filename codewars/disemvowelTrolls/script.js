function disemvowel(str) {
    const arr = ['a','e','u','i','o','A','E','U','I','O'];
    let newStr = '';
    for(let letter of str)
      if(!arr.includes(letter))
        newStr += letter;
          
    return newStr;
  }

function disemvowel1(str) {
    return str.replace(/[aeiou]/gi, '');
}

function disemvowel2(str) {
    const vowels = 'aeiou';
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}

disemvowel('rareriroruRARERURIRO');