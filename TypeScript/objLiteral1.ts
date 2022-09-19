// let firstname = "nithin";
// let lastname = "kalmath";

// let person ={
//     firstname,
//     lastname
// };


// console.log(firstname);
// console.log(lastname);




function createPerson(firstname,lastname,age){
    let fullname = firstname +" "+ lastname;
    return {firstname, 
        lastname, 
        fullname,
        isSenior(){
            return age>60;
        }
    }
}
let p = createPerson("nkm","kalmath",12);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());



