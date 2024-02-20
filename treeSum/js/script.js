function getTreeSum(mas = [5,7,[4,[2],8,[1,3],2],[9,[]],1,8], sum = 0) {
    for (let i = 0; i < mas.length; i++) {
        if (typeof(mas[i]) == "number") {
            sum += mas[i];
            continue;
        }
        if (mas[i] instanceof Array) {
            sum = getTreeSum(mas[i], sum);
        }
    }
    return sum;
}