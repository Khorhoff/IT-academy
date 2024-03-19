function buildWrapper(teg = "") {
    let func = (str = "", atribute = {}, t = teg) => {
        str = str.replaceAll('<', '$lt;').replaceAll('>', '$gt;').replaceAll('&', '$amp;').replaceAll("'", '$apos;').replaceAll('"', '$qout;');
        let atrText = "";
        for (const key in atribute) {
            atrText += ` ${key} = '${atribute[key].replaceAll('<', '$lt;').replaceAll('>', '$gt;').replaceAll('&', '$amp;').replaceAll("'", '$apos;').replaceAll('"', '$qout;')}'`;
        }
        return `<${teg}${atrText}>${str}</${teg}>`;
    }
    return func;
}

let wrapP = buildWrapper('P');
console.log(wrapP('text'));
console.log(wrapP('<text>'));
console.log(wrapP("M&M's", {title: "M&M's", align: 'center'}))