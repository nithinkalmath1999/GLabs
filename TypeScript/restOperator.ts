let displayColors = function(message, ...colors){
    console.log(message);
    // console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    };
}

let message= "List of colors";
displayColors(message,'red');
displayColors(message,'red','blue');
displayColors(message,'red','blue','green');