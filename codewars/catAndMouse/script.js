function catMouse(map, moves) {
    let mPos = { i: -1, y: -1 };
    let cPos = { i: -1, y: -1 };
    let newMap = map.split('\n');
    for (let i = 0; i < newMap.length; i++) {
        if (newMap[i].indexOf('C') == -1 && newMap[i].indexOf('m') == -1)
            continue;
        else {
            if (newMap[i].indexOf('C') != -1) {
                cPos.i = i;
                cPos.y = newMap[i].indexOf('C');
            }
            if (newMap[i].indexOf('m') != -1) {
                mPos.i = i;
                mPos.y = newMap[i].indexOf('m');
            }
        }
    }
    return mPos.i == -1 || cPos.i == -1 ? 'boring without two animals' :
        ((Math.abs(mPos.i - cPos.i) + Math.abs(mPos.y - cPos.y)) <= moves ? "Caught!" : "Escaped!")
}

var map =
    `...................
    ...................
    ..........m........
    ...C...............
    ...................
    ...................
    ...................
    ...................
    ...................
    ...................
    ...................
    ...................`

catMouse(map, 7)