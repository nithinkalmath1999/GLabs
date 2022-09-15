let sum = (a, b) => a + b; //passing double argument
alert(sum(1, 2));

let double = n => n * 2; // passing single argument
alert(double(2));

let sayHi = () => alert('Hello');  // no arguments
sayHi();

//dynamically create a func
let age = prompt('What is your age?');

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert('Greetings');

welcome();

//multiline arrow func
let add = (a, b) => {
    let result = a + b;
    return result;
};
alert(add(1, 3));
