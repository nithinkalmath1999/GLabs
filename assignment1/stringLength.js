const str = prompt("Enter the string");
let c = 0;
let i = str.length;
function stringLength() {
    if(i--){
        c++;
        stringLength();
    }
    return c;
}
alert(stringLength());