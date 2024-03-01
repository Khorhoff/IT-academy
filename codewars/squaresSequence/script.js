function squares(x, n) {
    var ret = [];
    for (var i = 0; i < n; i++) {
        ret.push(x);
        x *= x;
    }
    return ret;
}

function squares1(x, n) {
    return Array.from({ length: n }, (v, k) => Math.pow(x, Math.pow(2, k)))
}

function squares2(x, n, arr = []) {
    return n > 0 ? squares(Math.pow(x, 2), n - 1, [...arr, x]) : arr;
}

squares(2, 5);