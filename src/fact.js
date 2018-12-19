function f(num) {
    var result = 1;
    while (num >= 1) {
        result = result * num;
        num--;
    }
    return result;
}
console.log(f("5"));
function g() {
    var m;
    for (var i = 1; i <= 10; i = i + 1) {
        m = i;
    }
    return m;
}
console.log(g());
