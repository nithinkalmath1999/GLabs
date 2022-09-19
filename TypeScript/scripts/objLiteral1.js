// let firstname = "nithin";
// let lastname = "kalmath";
// let person ={
//     firstname,
//     lastname
// };
// console.log(firstname);
// console.log(lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return { firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("nkm", "kalmath", 12);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
//# sourceMappingURL=objLiteral1.js.map