const width = +prompt("enter the width");
const height = +prompt("enter the height");

function checkMeasurement(width,height){
    (width>height)? alert("landscape") : alert("Protrait");
}

checkMeasurement(width,height);
