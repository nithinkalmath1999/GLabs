// var employee = {
//     id : 1,
//     greet : function (){
//         setTimeout(function(){console.log(this.id);},1000);
//     }
// };
// employee.greet(); 
//undefined coz this creates it own value inside a function
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { return (console.log(_this.id)); }, 1000);
    }
};
employee.greet();
//op : 1 here this.id refers to the outer function
//# sourceMappingURL=lexicalThis.js.map