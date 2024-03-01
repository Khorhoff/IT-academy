function accum(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            str += s[i].toUpperCase() + '-';
            continue;
        }
        for (let y = 0; y <= i; y++) {
            if (y == 0) {
                str += s[i].toUpperCase();
            }
            else {
                str += s[i].toLowerCase();
            }
        }
        str += '-';
    }
    return str.slice(0, -1);
}

function accum1(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum2(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}

accum('ZpglnRxqenU');