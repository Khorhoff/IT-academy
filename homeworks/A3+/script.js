function palindrome(str) {
    let str1 = (str + '').replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').replaceAll('ъ', '').replaceAll('ь', '');
    let isPalindrome = true;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str1[str1.length - i - 1]) {
            if ((str1[i] == 'е' && str1[str1.length - 1] == 'ё') || (str1[i] == 'ё' && str1[str1.length - 1] == 'е')) {
                continue;
            }
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

console.log(palindrome('шалаш') ? `фраза 'шалаш' - палиндром` :  `фраза 'шалаш' - не палиндром`);
console.log(palindrome('Чин зван мечем навзничь.') ? `фраза 'Чин зван мечем навзничь.' - палиндром` :  `фраза 'Чин зван мечем навзничь.' - не палиндром`);