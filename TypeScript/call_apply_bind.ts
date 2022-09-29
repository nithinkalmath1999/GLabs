let name1 = {
    fName : "Nithin",
    lName : "Kalamth",
    city : "Siruguppa"
}

let name2 = {
    fName : "Rahul",
    lName : "Shetty",
    city : "Bellary"
}

let fullName = function(state,pincode){
    console.log(this.fName + " " + this.lName + " from "+ this.city +","+ state+", Pincode:"+pincode);
}


//function borrowing
fullName.call(name1,"Karnataka",583121);
fullName.call(name2,"Kerala",583122);

//similar to call but have to pass 2nd parameter as an array
fullName.apply(name1,["Karnataka",583121]);
fullName.apply(name2,["Kerala",583122]);

//bind method
let printMyName = fullName.bind(name1,"Karnataka",583121);
console.log(printMyName); //returns the method
printMyName();