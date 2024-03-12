function palindrome(str) {
    let str1 = (str + '').replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').replaceAll('ъ', '').replaceAll('ь', '');
    return checkPalindrome(str1);
}

function checkPalindrome(str){
    if(str.length == 1) return true;
    if(str.length == 2) return str[0] === str[1];
    if ((str[0] == 'е' && str.slice(-1) == 'ё') || (str[0] == 'ё' && str.slice(-1) == 'е')) return checkPalindrome(str.slice(1,-1));
    if(str[0] == str.slice(-1)) return checkPalindrome(str.slice(1,-1));
    return false;
}

console.log(palindrome('шалаш') ? `фраза 'шалаш' - палиндром` :  `фраза 'шалаш' - не палиндром`);
console.log(palindrome('Чин зван мечем навзничь.') ? `фраза 'Чин зван мечем навзничь.' - палиндром` :  `фраза 'Чин зван мечем навзничь.' - не палиндром`);