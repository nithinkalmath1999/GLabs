let rows = +prompt("enter the num of rows");

let string = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows-i; j++) {
        string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string +="\n";
}
// alert(string);
console.log(string);


//         *
//        ***
//       *****
//      *******