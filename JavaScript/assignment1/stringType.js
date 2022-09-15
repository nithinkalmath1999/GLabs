let str = {
    name : "Nithin",
    age : 22,
    empId : 3416,
    loc : "Udupi",
    fatherName : "Basavaraj",
    add :{
        ward : 5,
        nagar : "ss"
    }
}

for ( let item in str){
    if(typeof(str[item])== "string")
    alert(str[item]);
}

