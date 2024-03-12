function spaceRemove(str) {
    let isFirst = true;
    let answ = '';
    let pos1, pos2;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' && isFirst == true) {
            isFirst = false;
        }
        if (isFirst == false) {
            pos1 = i;
            break;
        }
    }
    isFirst = true;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ' && isFirst == true) {
            isFirst = false;
        }
        if (isFirst == false) {
            pos2 = i;
            break;
        }
    }
    for (let i = pos1; i <= pos2; i++) {
        answ += str[i];
    }

    return `*${answ}*`;
}

console.log(spaceRemove('   str   '));