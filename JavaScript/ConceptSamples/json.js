// if we want to transfer the obj over the network we need to convert obj to JSON

let user =  {
    name : "Nithin",
    age : 23,
    place : "Udupi",
    job : "Robosoft",
    doj : 22
}

let x = JSON.stringify(user);
console.log(x);

let y = JSON.parse(x);
console.log(y);
