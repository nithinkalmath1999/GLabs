const hours = +prompt("Enter the num of hours");
const mins = +prompt("eEnter the num of mins");

function convertToSeconds(){
    return ((hours*60*60)+(mins*60));
}
alert(convertToSeconds());


