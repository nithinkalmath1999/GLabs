// import {fname,lname,obj} from './moduleB.js';

// obj.name = "shetty"

// console.log(obj.name);
// console.log(`${fname} ${lname}`);

//we cant change the imported variables as they are read only




/*------------------ Default export---------------------------- */


// import {default as f } from `./moduleB.js`
// import {default as f} from './moduleB.js'

// console.log(f);


/*--------------------export functions and classes----------------------*/

// import {greet, GreetMessage} from './moduleB.js';

// greet("Hello");

// let gm = new GreetMessage();
//     gm.greet();


/*--------------example--------------- */
import { Calculator } from './moduleB.js';

let a = +prompt("enter the 1st num");
let b = +prompt("enter the 2nd num");
let op = prompt("enter the operator");

let c = new Calculator();
if (op === "add") {
    console.log(c.add(a, b));
}
else if (op === "sub") {
    console.log(c.sub(a, b));
}