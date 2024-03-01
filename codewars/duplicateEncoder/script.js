function duplicateEncode(word) {
    let result = '';
    let newWord = word.toLowerCase();
    for (let i = 0; i < newWord.length; i++) {
        if ((newWord.indexOf(newWord[i], i + 1) != -1 && i != newWord.length) ||
            (newWord.lastIndexOf(newWord[i], i - 1) != -1 && i != 0)) {
            result += ')';
        }
        else {
            result += '(';
        }
    }
    return result;
}

function duplicateEncode1(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

function duplicateEncode2(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

duplicateEncode("Success");