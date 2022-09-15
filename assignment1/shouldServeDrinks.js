let n = +prompt("enter the age");
let str = prompt("enter the string");

function shouldServeDrinks() {
    if ((n >= 18) && (str == "false")) {
        alert("Serve Drinks");
    }
    else if ((n >= 18) && (str == "true")) 
    {
        alert("Shouldn't serve drinks");
    }
    else
     alert ("Invalid input");
        
}
shouldServeDrinks();
