let a = +prompt("enter the num1");
let b = +prompt("enter the num2");

function maxNum(a, b) {
    let max = 0;
    (a > b)? max = a : max = b;
    return max;
}
alert(maxNum(a, b));