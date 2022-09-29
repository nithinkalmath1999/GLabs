// let multiply = function ( x, y){
//     console.log(x*y);
// }

// //By bind method
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(4);


//currying By closure method
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}
let multiplyByThree = multiply(3);
multiplyByThree(4);