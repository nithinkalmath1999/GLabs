let row = +prompt("Enter the value of n");
const x = row - 1;
let matrix = ""

for (let i = 65 + x; i >= 65; i--) {
    for (let j = 0; j < row*row; j = j + row) {
        let add = i + j;
        if (add > 90) {
            add = add - 26;
        }
        matrix = matrix + String.fromCharCode(add) + " ";
    }
    matrix += "\n";
}
console.log(matrix);