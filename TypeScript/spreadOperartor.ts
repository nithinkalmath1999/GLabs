let displayColor = function(message, ...colors){
    console.log(message);
    // console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    };
}

let messages= "List of colors";
let colorArray=['Blue','Orange','Yellow'];
displayColor(messages,...colorArray);