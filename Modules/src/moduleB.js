// let fname = "Nithin";
// let lname = "Kalmath";

// let obj ={
//     name : "rahul"
// };

// export {fname,lname,obj};




/* ----------------------- Default export -------------------------- */

// let name = "Nithin";
// export default name;

/*--------------------export functions and classes----------------------*/
 


// export function greet(message){
//     console.log(message);
//  }

//  export class GreetMessage{
//     constructor(){
//         console.log("Constructor");
//     }
//     greet(){
//         console.log("Greet Function");

//     }
//  };




/*--------------example--------------- */

export class Calculator{
   
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
};