function isIsogram(str) {
    let letters = {};
    for (let letter of str.toLowerCase())
        if (!(letter in letters)) {
            letters[letter.toString()] = true;
        }
        else {
            return false;
        }
    return true;
}

isIsogram("Dermatoglyphics");
isIsogram("aba");
isIsogram("moOse");