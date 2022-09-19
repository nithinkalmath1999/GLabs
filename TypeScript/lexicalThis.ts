// var employee = {
//     id : 1,
//     greet : function (){
//         setTimeout(function(){console.log(this.id);},1000);
//     }
// };
// employee.greet(); 
//undefined coz this creates it own value inside a function


var employee = {
    id : 1,
    greet : function (){
        setTimeout(()=> (console.log(this.id)),1000);
    }
};
employee.greet(); 
//op : 1 here this.id refers to the outer function


