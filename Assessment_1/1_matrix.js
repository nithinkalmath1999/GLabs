let row = +prompt("Enter the value of n");
const x = row - 1;
let matrix = ""

for (let i = 65 + x; i >= 65; i--) {
    let c = 0;
    for (let j = i; j <= i + (row * x) && c < row; j = j + row) {
        c++;
        if (j > 90) {
            j = j - 26;
        }
        matrix = matrix + String.fromCharCode(j) + " ";
    }
    matrix += "\n";
}
console.log(matrix);
